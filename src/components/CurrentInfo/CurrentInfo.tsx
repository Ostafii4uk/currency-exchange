import React from 'react';
import './CurrentInfo.scss';

interface Props {
  selectedCurrency: string,
  exchangeCours: Currency[],
}

export const CurrentInfo: React.FC<Props> = ({ selectedCurrency, exchangeCours }) => {

  const USD: Currency | undefined = exchangeCours.find(ticker => ticker.ccy === 'USD');
  const EUR: Currency | undefined = exchangeCours.find(ticker => ticker.ccy === 'EUR');

  const getInfoAboutCurrency = (ticker: string) => {
    switch (ticker) {
      case 'UAH':
        return (
          <div className='current__info'>
            <div className='current__ticker'>
              {`1 ${USD?.ccy} = ${Number(USD?.buy).toFixed(2)} ${selectedCurrency}`}
            </div>
            <div className='current__ticker'>
              {`1 ${EUR?.ccy} = ${Number(EUR?.buy).toFixed(2)} ${selectedCurrency}`}
            </div>
          </div>
        )
      case 'EUR':
        return (
          <div className='current__info'>
            <div className='current__ticker'>
              {`1 ${USD?.base_ccy} = ${Number(USD?.sale).toFixed(2)} ${selectedCurrency}`}
            </div>
            <div className='current__ticker'>
              {`1 ${USD?.ccy} = ${(Number(EUR?.buy) / Number(USD?.buy)).toFixed(2)} ${selectedCurrency}`}
            </div>
          </div>
        )
      case 'USD':
        return (
          <div className='current__info'>
            <div className='current__ticker'>
              {`1 ${EUR?.base_ccy} = ${Number(USD?.sale).toFixed(2)} ${selectedCurrency}`}
            </div>
            <div className='current__ticker'>
              {`1 ${EUR?.ccy} = ${(Number(USD?.buy) / Number(EUR?.buy)).toFixed(2)} ${selectedCurrency}`}
            </div>
          </div>
        )
      default:
        break;
    }
  }

  return (
    <div className='current__main'>
      {getInfoAboutCurrency(selectedCurrency)}
    </div>
  )
}