import requests
from bs4 import BeautifulSoup
import pandas as pd

    
def get_soup(url):   
    headers={
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36'
    }
    resp=requests.get(url,headers=headers)
    resp.encoding='utf-8'
    #print(resp.status_code)
    if resp.status_code==200:
        soup=BeautifulSoup(resp.text,'lxml')
        return soup
    #return None


def get_header(soup):
    table_heads= soup.find(class_='Pos(r) Ov(h)').find(class_='table-header-wrapper Bxz(bb) Pos(r) D(f) H(48px) Ai(c) Px(12px) Fz(14px) Bgc($c-gray-hair) C($c-primary-text) Bdrs(4px)').find_all('div')

    header=[]
    for thead in table_heads[2:]:
        header.append(thead.text)
    
    return header

def get_body(soup):
    table_body= soup.find(class_='M(0) P(0) List(n)').find_all(class_="List(n)")
    tbody=[]
    for table_list in table_body:
        for body in table_list:
            tlist=[]
            for b in body:
                tlist.append(b.text)
            tbody.append(tlist)
    
    return tbody

def get_stock(data=None):
    
    try:
        url='https://tw.stock.yahoo.com/world-indices'
            
        if data=='worldindices':
            url='https://tw.stock.yahoo.com/world-indices'
        elif data =='currencies':
            url='https://tw.stock.yahoo.com/currencies'
        elif data =='usmarket':
            url='https://tw.stock.yahoo.com/us-market'
        elif data =='hkmarket':
            url='https://tw.stock.yahoo.com/hk-market'
        elif data =='cnmarket':
            url='https://tw.stock.yahoo.com/cn-market'
        elif data =='commodities':
            url='https://tw.stock.yahoo.com/commodities'
        elif data =='adr':
            url='https://tw.stock.yahoo.com/adr'
        elif data =='cryptocurrencies':
            url='https://tw.stock.yahoo.com/cryptocurrencies'
            
        
        soup=get_soup(url)
        head=get_header(soup)
        body=get_body(soup)

    except Exception as e:
        print (e)
    
    return head, body
