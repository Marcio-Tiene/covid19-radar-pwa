import { countries } from 'commons/constants/countries';
import React, { memo, useState, useCallback, useEffect } from 'react';
import Api from '../../api';
import Board from './components/Board';
import Panel from './components/Panel';
import { ContainerStyled } from './style';

function Main() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState('brazil');
  const updateAt = new Date().toLocaleString();

  const getCovidData = useCallback((country) => {
    Api.getCountry(country).then((data) => setData(data));
  }, []);

  useEffect(() => {
    getCovidData(country);
  }, [getCovidData, country]);

  const handleChange = (event) => {
    const countryOnLabel = event.target.innerHTML;
    const country =
      countries.find((country) => country.label === countryOnLabel) || 'a';

    console.log(event.target.innerHTML);
    setCountry((country.value || 'a').toLowerCase());
  };

  return (
    <ContainerStyled>
      <div className='mb-2'>
        <Panel
          data={data}
          updateAt={updateAt}
          onChange={handleChange}
          country={country}
          getCovidData={getCovidData}
        />
      </div>
      <Board data={data} />
    </ContainerStyled>
  );
}

export default memo(Main);
