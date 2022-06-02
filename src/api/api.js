const API_URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

export const getExchangeCours = () => {
  return fetch(API_URL)
    .then(response => response.json())
}