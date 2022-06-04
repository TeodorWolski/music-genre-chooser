import { useEffect } from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import { Heading } from './Root.styles';
import Combobox from 'components/organisms/Combobox/Combobox';
import axios from 'axios';

const Root = () => {
  useEffect(() => {
    axios.get('/genres').then(({ data }) => console.log(data.Genres));
  }, []);

  return (
    <MainTemplate>
      <Heading>Choose your favourite music</Heading>
      <Combobox />
    </MainTemplate>
  );
};

export default Root;
