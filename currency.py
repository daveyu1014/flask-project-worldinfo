# -*- coding: utf-8 -*-
"""
Created on Thu Jul 14 16:00:06 2022

@author: dave7
"""

from bs4 import BeautifulSoup
import requests

def get_soup():
    url = 'https://rate.bot.com.tw/xrt?Lang=zh-TW'
    response = requests.get(url) 
    html_doc = response.text 
    soup = BeautifulSoup(html_doc, "lxml") 
    
    return soup


def get_currency():
    soup=get_soup()
    rate_table = soup.find('table').find('tbody')
    rate_table_rows = rate_table.find_all('tr')
    result =[]
    
    for row in rate_table_rows: 
        columns = row.find_all('td')
        data = []
        for c in columns:
            if c.attrs['data-table'] == '幣別':
                last_div = None
                divs = c.find_all('div')
                for last_div in divs:pass
                
                data.append(last_div.string.strip())
            elif c.getText().find('查詢') != 0 and str(c).find('print_width') > 0 :
                data.append(c.getText().strip())       
        result.append(tuple(data))
    
    header = ['幣別', '現金買入', '現金賣出', '即期買入', '即期賣出']
    return header, result

def convert(from_currency, to_currency, number): 

        if from_currency != 'USD' : 
            number = number / currencies[from_currency] 
        result = round(number * currencies[to_currency], 4) 
        return result
    
def read_data():
    url='https://api.exchangerate-api.com/v4/latest/USD' 
    data = requests.get(url).json()
    return data

def get_currency_list():
    global currencies
    data = read_data()
    currencies = data['rates']
    #date= data['date']
    currency_list=[i for i in currencies.keys()]
    
    return currency_list


if __name__ == 'main':
    
    get_currency()
    read_data()
