import pandas as pd
import ssl

ssl._create_default_https_context = ssl._create_unverified_context
url = 'https://sta.ci.taiwan.gov.tw/STA_AirQuality_v2/v1.0/Datastreams?$expand=Thing,Observations($orderby=phenomenonTime%20desc;$top=1)&$filter=name%20eq%20%27PM2.5%27%20and%20Thing/properties/authority%20eq%20%27%E8%A1%8C%E6%94%BF%E9%99%A2%E7%92%B0%E5%A2%83%E4%BF%9D%E8%AD%B7%E7%BD%B2%27%20and%20substringof(%27%E7%A9%BA%E6%B0%A3%E5%93%81%E8%B3%AA%E6%B8%AC%E7%AB%99%27,Thing/name)&$count=true'

df = None

def get_pm25(sort=None):
    global df
    columns, values = None, None

    try:
        datas = pd.read_json(url)['value']
        values = []
        for data in datas:
            city = data['Thing']['properties']['city']
            station = data['Thing']['properties']['stationName']
            result = data['Observations'][0]['result']
            result_time = data['Observations'][0]['resultTime']
            result_time = pd.to_datetime(
                result_time).strftime('%Y-%m-%d %H:%M:%S')

            values.append([city, station, result, result_time])
        df = pd.DataFrame(
            values, columns=['city', 'stationName', 'result', 'resultTime'])

        
        if sort=='city':
            values = sorted(values, key=lambda x: x[0], reverse=False)
        elif sort=='station':
            values = sorted(values, key=lambda x: x[1], reverse=False)
        elif sort=='pm25':
            values = sorted(values, key=lambda x: x[2], reverse=True)
        elif sort=='time':
            values = sorted(values, key=lambda x: x[3], reverse=True)
        
        columns = ['city', 'station', 'pm25', 'time']

    except Exception as e:
        print(e)

    return columns, values


def get_city_pm25(city):
    global df
    stationName, result = [], []
    try:
        datas = df.groupby('city').get_group(
            city)[['stationName', 'result']].values.tolist()

        stationName, result = list(zip(*datas))
    except Exception as e:
        print(e)

    return stationName, result


def get_all_city():
    global df
    citys = []
    try:
        
        citys = sorted(list(set(df['city'])))
        #print(citys)
    except Exception as e:
        print(e)

    return citys


def get_six_pm25():
    global df
    six_citys = ['臺北市', '新北市', '桃園市', '臺中市', '臺南市', '高雄市']
    result = []
    try:
        for city in six_citys:
            mean = round(df.groupby('city').get_group(
                city)['result'].mean(), 2)
            #print(city, mean)
            result.append(mean)

    except Exception as e:
        print(e)

    return six_citys, result





if __name__ == "__main__":
    get_pm25()
    get_six_pm25()
    get_all_city()
    get_city_pm25('台北市')