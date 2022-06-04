import MainTemplate from 'components/templates/MainTemplate';
import { Heading } from './Root.styles';
import Combobox from 'components/organisms/Combobox/Combobox';

const Root = () => {
  return (
    <MainTemplate>
      <Heading>Choose your favourite music</Heading>
      <Combobox />
    </MainTemplate>
  );
};

export default Root;
