const path = 'https://coronavirus-19-api.herokuapp.com/countries';

const headers = {
  method: 'get',
  mode: 'cors',
  cache: 'default',
};

async function getCountry(country) {
  const response = await fetch(`${path}/${country}`, headers).then((response) =>
    response.json()
  );
  console.log(response);
  return response;
}

export default {
  getCountry,
};
