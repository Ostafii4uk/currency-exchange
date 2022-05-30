import React, { useState, useEffect } from 'react';
import { getExchangeCours } from '../../api/api';
import { CurrentInfo } from '../CurrentInfo';
import './Current.scss';

export const Current: React.FC = React.memo(() => {
  const [exchangeCours, setExchangeCours] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("UAH");

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
            onClick={() => setSelectedCurrency('UAH')}
          >
            UAH
          </option>
          <option
            className='current__option'
            value="1"
            onClick={() => setSelectedCurrency('EUR')}
          >
            EUR
          </option>
          <option
            className='current__option'
            value="2"
            onClick={() => setSelectedCurrency('USD')}
          >
            USD
          </option>
        </select>
      </div>
      <CurrentInfo
        exchangeCours={exchangeCours}
        selectedCurrency={selectedCurrency}
      />
    </div>
  )
});

