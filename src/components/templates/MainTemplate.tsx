import { Provider } from 'react-redux';
import { Wrapper } from './MainTemplate.styles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { store } from 'redux/store/store';
import GlobalStyle from 'assets/styles/GlobalStyle';

const MainTemplate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Provider store={store}>
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Wrapper>{children}</Wrapper>
        </ThemeProvider>
      </>
    </Provider>
  );
};

export default MainTemplate;
