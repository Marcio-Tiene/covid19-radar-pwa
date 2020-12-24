import React, { memo } from 'react';
import { Card, Typography, Button } from '../../../components';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { countries } from '../../../commons/constants/countries';
import {
  CardPanelContentStyled,
  TypografyContainer,
  SelectorContainer,
} from './style';

const navigatorHasShare = navigator.share;

function Panel({ updateAt, onChange, data, country }) {
  const { cases, recovered, deaths, todayCases, todayDeaths } = data;

  const textCovid19 = `País: ${country.label} - casos hoje: ${todayCases} - mortes hoje: ${todayDeaths} - casos: ${cases} - mortes: ${deaths} -   recuperados: ${recovered}`;

  const copyInfo = () => {
    navigator.clipboard.writeText(textCovid19);
  };

  const shareInfo = () => {
    navigator.share({
      title: `Dados do Covid19 - ${country}`,
      text: textCovid19,
      url: 'https://covid19-radar.vercel.app/',
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
          <Typography
            variant='h5'
            component='span'
            color='primary'
            // style={{ maxWidth: 'fit-content' }}
          >
            COVID19
          </Typography>
          <Typography
            variant='h6'
            component='span'
            color='primary'
            // style={{ maxWidth: '50%' }}
          >
            Painel Coronavírus
          </Typography>
          <Typography
            variant='body2'
            component='span'
            color='primary'
            // style={{ maxWidth: 'fit-content' }}
          >
            Atualizado em: {updateAt}
          </Typography>
        </TypografyContainer>

        {navigatorHasShare ? renderShareButton : renderCopyButton}
      </CardPanelContentStyled>
      <SelectorContainer>
        {/* <div className='pt-2'> */}
        {/* <Select onChange={onChange} value={country}>
              {countries.map(renderCountries)}
            </Select> */}

        <Autocomplete
          color='primary'
          onChange={onChange}
          value={country}
          options={countries}
          getOptionSelected={(option) => option.label}
          getOptionLabel={(option) => option.label}
          style={{ width: '100%' }}
          renderInput={(params) => (
            <TextField
              color='primary'
              {...params}
              label='Escolha o país'
              style={{ maxWidth: 300 }}
            />
          )}
        />
        {/* </div> */}
      </SelectorContainer>
    </Card>
  );
}

export default memo(Panel);
