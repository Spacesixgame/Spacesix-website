import "styles/globals.css";
import { Provider } from "react-redux";
import store from "store/index";
import "bootstrap/dist/css/bootstrap.min.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import Layout from "components/layout/Layout";
import {
  ChakraProvider,
  extendTheme,
  withDefaultColorScheme,
} from "@chakra-ui/react";

import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import theme from "../config/material_ui/theme";
import createEmotionCache from "../config/material_ui/createEmotionCache";
import { CssBaseline } from "@mui/material";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const customTheme = extendTheme(
    withDefaultColorScheme({
      colorScheme: "inherit",
      // components: ["Button", "Slider"],
    })
  );

  return (
    <div>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <SSRProvider>
            <Provider store={store}>
              <CssBaseline />
              <ChakraProvider theme={customTheme}>
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </ChakraProvider>
            </Provider>
          </SSRProvider>
        </ThemeProvider>
      </CacheProvider>
    </div>
  );
}

export default MyApp;
