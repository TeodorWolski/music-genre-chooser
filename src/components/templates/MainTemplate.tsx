import { Provider } from 'react-redux';
import { Wrapper } from './MainTemplate.styles';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { store } from 'redux/store/store';
import SelectProvider from 'providers/SelectProvider';
import GlobalStyle from 'assets/styles/GlobalStyle';

const MainTemplate: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Provider store={store}>
      <SelectProvider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Wrapper>{children}</Wrapper>
        </ThemeProvider>
      </SelectProvider>
    </Provider>
  );
};

export default MainTemplate;
