import styled from 'styled-components';

const Wrapper = styled.ul<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  position: absolute;
  background-color: #fff;
  width: 30rem;
  top: 105%;
  height: 20rem;
  border-radius: 2rem;
  flex-direction: column;
  color: black;
  list-style: none;
  padding: 0;
  overflow-x: scroll;
  align-items: center;
`;

const GenresList: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  return (
    <Wrapper isVisible={isVisible}>
      {/* <GenreWrapper>
        <img src="" alt="" />
        <h1>Rock</h1>
      </GenreWrapper>
      <GenreWrapper>lpasdffsdfasdsd</GenreWrapper>
      <GenreWrapper>lpasdffsdfasdsd</GenreWrapper> */}
    </Wrapper>
  );
};

export default GenresList;
