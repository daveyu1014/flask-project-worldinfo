import pandas as pd
from selenium import webdriver
from bs4 import BeautifulSoup
import requests



def get_soup(url):
    resp=requests.get(url)
    if resp.status_code == 200:
        soup = BeautifulSoup(resp.text, 'lxml')
        return soup
    else:
        return resp.status_code


def get_news():
    try:
        soup=get_soup(url)
        results = soup.find(class_="part_pictxt_3 lazyload").find_all(class_="piece clearfix")
        
        news_list = []
        header = ['', 'Title', 'Date' 'Content', 'Url']
        for result in results:
            img_url =result.find('a').find('img').get('data-original')
            news_url = result.find('h3').find('a').get('href')
            title = result.find('h3').text
            date= result.find('span',class_="date").text
            content = result.find('p',class_="summary").text
            news_url = "https://www.ettoday.net/" + news_url
            news_list.append([img_url, news_url, title, date, content])
        
        #print(news_list)
        return news_list
    except Exception as e:
        return e



url='https://www.ettoday.net/news/focus/%E5%9C%8B%E9%9A%9B/'

if __name__ == "__main__":
    get_news()
