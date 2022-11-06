import { AppProps } from "next/app";
import Head from "next/head";
import { Global, MantineProvider } from "@mantine/core";
import { MoralisProvider } from "react-moralis";
import {NotificationProvider} from "web3uikit";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Relic</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Global
          styles={[
            {
              "@font-face": {
                src: `url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@800&display=swap');`,
              },
            },
            {
              // Align all elements to the center
              body: {
                justifyContent: "center",
                fontFamily: "Playfair Display",
              },
              input: {
                padding : "10px",
              }
            }
          ]}
        />
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
         

        }}
      >
        <MoralisProvider initializeOnMount={false}>
          <NotificationProvider>
            <Component {...pageProps} />
          </NotificationProvider>
        </MoralisProvider>
        
        
      </MantineProvider>
    </>
  );
}
