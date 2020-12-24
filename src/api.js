import { NO_DATA } from 'commons/constants/countries';

const path = 'https://coronavirus-19-api.herokuapp.com/countries';

const headers = {
  method: 'get',
  mode: 'cors',
  cache: 'default',
};

async function getCountry(country) {
  const response = await fetch(`${path}/${country}`, headers)
    .then((response) => response.json())
    .catch((err) => {
      return NO_DATA;
    });

  return response;
}

export default {
  getCountry,
};
