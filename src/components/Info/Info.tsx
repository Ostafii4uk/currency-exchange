import React from 'react';
import './Info.scss';

export const Info: React.FC<Info> = ({ selectedCurrency, exchangeCours }) => {
  const getCours = (baseName: string, currencyName: string, currency: Currency[]) => {
    const base = currency.find(ticker => ticker.cc === baseName);
    const current = currency.find(ticker => ticker.cc === currencyName);

    const baseRate = base?.rate;
    const currentRate = current?.rate

    if (baseName === 'UAH') {
      return (current?.rate)?.toFixed(2);
    }

    if (baseRate !== undefined && currentRate !== undefined) {
      return (baseRate / currentRate).toFixed(2);
    }
  }

  return (
    <div className='current__main info'>
      {exchangeCours.map(ticker => (
        <div
          key={ticker.r030}
          className='info__ticker'
        >
          {`1 ${selectedCurrency} = ${getCours(selectedCurrency, ticker.cc, exchangeCours)} ${ticker.cc}`}
        </div>
      ))}
    </div>
  )
}