import styled from 'styled-components';
import SelectedGenre from 'components/atoms/SelectedGenre/SelectedGenre';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 35%;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const SelectedGenresList = () => {
  return (
    <Wrapper>
      <SelectedGenre genre="masss" />
      <SelectedGenre genre="masss" />
      <SelectedGenre genre="masss" />
      <SelectedGenre genre="masss" />
      <SelectedGenre genre="masss" />
    </Wrapper>
  );
};

export default SelectedGenresList;
