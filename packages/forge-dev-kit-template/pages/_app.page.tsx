import { Global } from '@emotion/core';
import { AppProps } from 'next/app';
import '@atlaskit/css-reset';

const App = ({ Component, pageProps }: AppProps) => (
    <>
        <Global
            styles={{
                '#__next': {
                    height: '100%',
                },
            }}
        />
        <Component {...pageProps} />
    </>
);

export default App;
