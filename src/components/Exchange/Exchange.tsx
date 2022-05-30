import React, { useEffect, useState } from 'react';
import { getExchangeCours } from '../../api/api';

export const Exchange: React.FC = React.memo(() => {
  const [exchangeCours, setExchangeCours] = useState([]);

  useEffect(() => {
    getExchangeCours()
      .then(excFromServer => setExchangeCours(excFromServer))
  }, [])

  console.log(exchangeCours);

  return (
    <div>
      Nothing
    </div>
  )
});