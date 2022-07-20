from flask import Flask, render_template, request
from datetime import datetime
from news import get_news
from stock import get_stock
from currency import get_currency, get_currency_list, convert
from weather import get_weather
from pm25 import get_pm25, get_six_pm25, get_all_city, get_city_pm25
import json

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('./index.html')


def get_date():
    today = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    return today


@app.route('/news')
def news_page():
    values = get_news()

    return render_template('/news.html', **locals())

@app.route('/stock/<cryptocurrencies>')
@app.route('/stock/<adr>')
@app.route('/stock/<commodities>')
@app.route('/stock/<cnmarket>')
@app.route('/stock/<cnmarket>')
@app.route('/stock/<hkmarket>')
@app.route('/stock/<usmarket>')
@app.route('/stock/<currencies>')
@app.route('/stock/<worldindices>')
@app.route('/stock/<data>')
@app.route('/stock')
def stock_page(data=None):
    today = get_date()

    head, body = get_stock()

    if data == 'worldindices':
        head, body = get_stock(data='worldindices')
    elif data == 'currencies':
        head, body = get_stock(data='currencies')
    elif data == 'usmarket':
        head, body = get_stock(data='usmarket')
    elif data == 'hkmarket':
        head, body = get_stock(data='hkmarket')
    elif data == 'cnmarket':
        head, body = get_stock(data='cnmarket')
    elif data == 'commodities':
        head, body = get_stock(data='commodities')
    elif data == 'adr':
        head, body = get_stock(data='adr')
    elif data == 'cryptocurrencies':
        head, body = get_stock(data='cryptocurrencies')

    return render_template('/stock.html', **locals())

@app.route('/currency' , methods=["POST"])
@app.route('/currency')
def currency():
    head, body = get_currency()
    values = get_currency_list()
    from_currency = '請選擇兌換貨幣'
    to_currency = '請選擇兌換貨幣'
    
    if request.method == 'POST':
        number = request.form.get("number")
        number = float(number)
        from_currency = request.form.get("from_currency")
        to_currency = request.form.get("to_currency")
        total_amount = convert(from_currency, to_currency, number)
        
    else:
        total_amount = 1

    return render_template('/currency.html', **locals())


@app.route('/time')
def time():
    return render_template('/time.html')

@app.route('/weather')
def weather():
    today = get_date()
    head, body = get_weather()

    return render_template('/weather.html', **locals())


@app.route('/taiwan')
def taiwan():
    return render_template('/taiwan.html')


@app.route('/pm25/<city>')
@app.route('/pm25/<station>')
@app.route('/pm25/<pm25>')
@app.route('/pm25/<time>')
@app.route('/pm25/<sort>')
@app.route('/pm25', methods=['GET', 'POST'])
def pm25(sort=None):

    if request.method == 'POST':
        columns, values = get_pm25()

    if request.method == 'GET':
        if sort == 'city':
            columns, values = get_pm25(sort='city')
        elif sort == 'station':
            columns, values = get_pm25(sort='station')
        elif sort == 'pm25':
            columns, values = get_pm25(sort='pm25')
        elif sort == 'time':
            columns, values = get_pm25(sort='time')
        else:
            columns, values = get_pm25()

    today = get_date()
    return render_template('/pm25.html', **locals())


@app.route('/pm25-json', methods=['GET', 'POST'])
def pm25_json():
    columns, values = get_pm25(False)

    stationName = [value[1] for value in values]
    result = [value[2] for value in values]

    data = {'stationName': stationName, 'result': result}

    return json.dumps(data, ensure_ascii=False)


@app.route('/six-pm25-json', methods=['POST'])
def pm25_six_json():
    six_citys, result = get_six_pm25()
    
    return json.dumps({'citys': six_citys, 'result': result}, ensure_ascii=False)

@app.route('/city-pm25/<city>', methods=['POST'])
def pm25_city_json(city):
    stationName, result = get_city_pm25(city)

    return json.dumps({'stationName': stationName, 'result': result}, ensure_ascii=False)

@app.route('/pm25-chart')
def pm25_chart():
    citys = get_all_city()
    return render_template('./pm25-chart.html', countys=citys)


if __name__ == '__main__':
    app.run(debug=True)
