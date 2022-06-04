import styled from 'styled-components';

const Wrapper = styled.div`
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Input = styled.input`
  padding: 1rem;
  width: 25rem;
  border-radius: 3rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  border: 3px solid ${({ theme }) => theme.colors.green};
  outline: none;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.green};
  border: none;
  border-radius: 1.25rem;
  color: white;
  padding: 1rem 1.35rem;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const Combobox = () => {
  return (
    <Wrapper>
      <Input placeholder="Genre name" />
      <Button>↓</Button>
    </Wrapper>
  );
};

export default Combobox;
