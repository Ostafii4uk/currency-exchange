const API_URL = 'https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5';

export const getExchangeCours = () => {
  return fetch(API_URL)
    .then(response => response.json())
}