import requests
from bs4 import BeautifulSoup

URL = 'https://www.t-mobile.nl/my/verbruik-en-kosten'
page = requests.get(URL)
soup = BeautifulSoup(page.content, 'html.parser')
print(soup)