import React, { memo } from 'react';
import {
  Card,
  Typography,
  Button,
  Select,
  MenuItem,
} from '../../../components';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { countries } from '../../../commons/constants/countries';
import {
  CardPanelContentStyled,
  ItemStyled,
  TypografyContainer,
} from './style';

const navigatorHasShare = navigator.share;

function Panel({ updateAt, onChange, data, country, getCoviddata }) {
  const { cases, recovered, deaths, todayCases, todayDeaths } = data;
  console.log(data);

  // const renderCountries = (country, index) => (
  //   <MenuItem key={`country-${index}`} value={country.value.toLowerCase()}>
  //     <ItemStyled>
  //       <div>{country.label}</div>
  //     </ItemStyled>
  //   </MenuItem>
  // );

  const textCovid19 = `País: ${country} - casos hoje: ${todayCases} - mortes hoje: ${todayDeaths} - casos: ${cases} - mortes: ${deaths} -   recuperados: ${recovered} -`;

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19);
  };

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: 'https://covid19dio.netlify.app/',
    });
  };

  const renderShareButton = (
    <div>
      <Button variant='contained' color='primary' onClick={shareInfo}>
        Compartilhar
      </Button>
    </div>
  );

  const renderCopyButton = (
    <div>
      <Button variant='contained' color='primary' onClick={copyInfo}>
        Copiar
      </Button>
    </div>
  );

  return (
    <Card>
      <CardPanelContentStyled>
        <TypografyContainer>
          <Typography variant='h5' component='span' color='primary'>
            COVID19
          </Typography>
          <Typography variant='h6' component='span' color='primary'>
            Painel Coronavírus
          </Typography>
          <Typography variant='body2' component='span' color='primary'>
            Atualizado em: {updateAt}
          </Typography>
          <div className='pt-2'>
            {/* <Select onChange={onChange} value={country}>
              {countries.map(renderCountries)}
            </Select> */}

            <Autocomplete
              onChange={onChange}
              value={country.label}
              options={countries}
              getOptionSelected={(option) => option.label}
              getOptionLabel={(option) => option.label}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label='Escolha o país' />
              )}
            />
          </div>
        </TypografyContainer>
        {navigatorHasShare ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
    </Card>
  );
}

export default memo(Panel);
