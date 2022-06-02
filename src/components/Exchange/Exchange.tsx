import React, { useEffect, useState } from 'react';
import { getExchangeCours } from '../../api/api';
import './Exchange.scss';

export const Exchange: React.FC = React.memo(() => {
  const [exchangeCours, setExchangeCours] = useState([]);
  const [queryNumber, setQueryNumber] = useState('');
  const [errorQueryNumber, setErrorQueryNumber] = useState(false);
  const [deleteButton, setDeleteButton] = useState('');
  const currentcyArr: Currency[] = exchangeCours;
  const [currency, setCurrency] = useState('');
  const [base, setBase] = useState('');

  useEffect(() => {
    getExchangeCours()
      .then(excFromServer => setExchangeCours(excFromServer))
  }, [])

  const validationNumber = (quer: string) => {
    if ((Number(quer[quer.length - 1])).toString() !== 'NaN') {
      setQueryNumber(quer);
      setErrorQueryNumber(false);
    } else if (deleteButton === 'Backspace') {
      setErrorQueryNumber(false);
      setQueryNumber('');
      
    } else {
      setErrorQueryNumber(true);
    }
  }

  const getExchange = () => {
    const currencyTicker = currentcyArr.find(ticker => ticker.cc === currency);
    const baseTicker = currentcyArr.find(ticker => ticker.cc === base);

    if (currencyTicker === undefined && baseTicker !== undefined) {
      return `${(Number(queryNumber) / baseTicker?.rate)?.toFixed(2)} ${baseTicker.cc}`;
    }

    if (currencyTicker !== undefined && baseTicker === undefined) {
      return `${(Number(queryNumber) * currencyTicker?.rate)?.toFixed(2)} UAH`;
    }

    if (currencyTicker === undefined && baseTicker === undefined) {
      return `${queryNumber} UAH`;
    }

    if (currencyTicker !== undefined && baseTicker !== undefined) {
      return `${((Number(queryNumber) * currencyTicker.rate) / baseTicker.rate).toFixed(2)} ${baseTicker.cc}`;
    }
  }

  return (
    <div 
      className='exchange'
    >
      <div
        className='exchange__amount'
      >
        <input
          className='exchange__input'
          type='text'
          value={queryNumber}
          onChange={(event) => {
            validationNumber(event.target.value)
          }}
          onKeyUp={(event) => setDeleteButton(event.key)}
          placeholder='Write the amount'
        >
        </input>
        {errorQueryNumber
            &&
              <div
                className='exchange__input-error'
              >
                Type number
              </div>
        }
      </div>
      <select
        className='exchange__select-currenct'
      >
        <option
          value="0"
          onClick={() => setCurrency('UAH')}
          className='exchange__option-currenct'
        >
          UAH
        </option>
        {currentcyArr.map(ticker => (
          <option
            key={ticker.r030}
            value={(currentcyArr.indexOf(ticker)) + 1}
            onClick={() => setCurrency(ticker.cc)}
            className='exchange__option-currenct'
          >
            {ticker.cc}
          </option>
        ))}
      </select>
      <div
        className='exchange__text'
      >
        IN
      </div>
      <select
        className='exchange__select-base'
      >
        <option
          value="0"
          onClick={() => setBase('UAH')}
          className="exchange__option-base"
        >
          UAH
        </option>
        {currentcyArr.map(ticker => (
          <option
            key={ticker.r030}
            value={(currentcyArr.indexOf(ticker)) + 1}
            onClick={() => setBase(ticker.cc)}
            className="exchange__option-base"
          >
            {ticker.cc}
          </option>
        ))}
      </select>
      <div
        className='exchange__result'
      >
        {queryNumber
          &&
           getExchange()
        }
      </div>
    </div>
  )
});