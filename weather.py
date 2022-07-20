import requests
from bs4 import BeautifulSoup
from selenium import webdriver
import pandas as pd

def get_chrome(url,hide=True):
    try:
        options=webdriver.ChromeOptions()
        driver=r'C:\webdriver\chromedriver'
        if hide:
            options.add_argument('--headless')
        chrome=webdriver.Chrome(driver, options=options)
        chrome.implicitly_wait(10)
        chrome.get(url)

        return chrome
    except Exception as e:
        print(e)


def get_weather():
    url='https://www.timeanddate.com/weather/?low=c'
    chrome=get_chrome(url)
    soup=BeautifulSoup(chrome.page_source,'lxml')
    weathers=soup.find('table').find('tbody').find_all('tr')

    header=['City','Local Time', 'Temp.']
    weather_list=[]
    city_list=[]
    for weather in weathers:
        for i,values in enumerate(weather.find_all('td')):
            if values.text == '':
                continue
            city_list.append(values.text)
            if i ==3 or i ==7:
                weather_list.append(city_list)
                city_list=[]

        
    weather_list = sorted(weather_list, key=lambda x: x[0], reverse=False)
    return header, weather_list
        
