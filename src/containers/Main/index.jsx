import { countries } from 'commons/constants/countries';
import React, { memo, useState, useCallback, useEffect } from 'react';
import Api from '../../api';
import Board from './components/Board';
import Panel from './components/Panel';
import { ContainerStyled } from './style';

function Main() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState({
    id: 33,
    label: 'BRASIL',
    value: 'BRAZIL',
  });
  const updateAt = new Date().toLocaleString();

  const getCovidData = useCallback((country) => {
    Api.getCountry(country).then((data) => setData(data));
  }, []);

  useEffect(() => {
    getCovidData(country.value.toLowerCase());
  }, [getCovidData, country]);

  const handleChange = (event) => {
    const country = event.target.innerHTML;
    const countrySearch = countries.find(
      (countrySearch) => countrySearch.label === country
    ) || {
      id: 0,
      label: '',
      value: 'world',
    };

    setCountry(countrySearch);
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
