import React, { useState, useEffect } from 'react';
import { getExchangeCours } from '../../api/api';
import { Info } from '../Info';
import './Current.scss';

export const Current: React.FC = React.memo(() => {
  const [exchangeCours, setExchangeCours] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("UAH");
  const currentcyArr: Currency[] = exchangeCours;

  useEffect(() => {
    getExchangeCours()
      .then(excFromServer => setExchangeCours(excFromServer))
  }, []);

  return (
    <div className='current'>
      <div className='current__header'>
        <p className='current__title'>
          Виберіть базову валюту:
        </p>
        <select className='current__select'>
          <option
            className='current__option'
            value="0"
            onClick={() => setSelectedCurrency("UAH")}
          >
            UAH
          </option>
          {currentcyArr.map(ticker => (
            <option
              key={ticker.r030}
              className='current__option'
              value={(currentcyArr.indexOf(ticker)) + 1}
              onClick={() => setSelectedCurrency(ticker.cc)}
            >
              {ticker.cc}
            </option>
          ))}
        </select>
      </div>
      <Info
        exchangeCours={exchangeCours}
        selectedCurrency={selectedCurrency}
      />
    </div>
  )
});

