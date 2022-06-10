import React, { useState, useEffect } from 'react';
import { getExchangeCours } from '../../api';
import { Info } from '../';
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
          Select the base currency:
        </p>
        <select 
          className='current__select'
          onChange={(event) => setSelectedCurrency(event.target.value)}
        >
          <option
            className='current__option'
            value="UAH"
          >
            UAH
          </option>
          {currentcyArr.map(ticker => (
            <option
              key={ticker.r030}
              className='current__option'
              value={ticker.cc}
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

