import '@fontsource/inter/variable.css';
import '@/styles/main.css';

import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import type { MarkdocNextJsPageProps } from '@markdoc/next.js';

import { ThemeProvider } from 'next-themes';

import { SkipToContent } from '@/components/skip-to-content';
import { Header } from '@/components/header';
import { LayoutDocs } from '@/layouts/docs';

interface MyAppProps extends AppProps {
  pageProps: MarkdocNextJsPageProps;
}

function MyApp(props: MyAppProps) {
  let { Component, pageProps, router } = props;

  let isDocs = router.asPath.startsWith('/docs');

  let TITLE = pageProps.markdoc?.frontmatter.title;
  let DESCRIPTION = pageProps.markdoc?.frontmatter.description;
  let SITE = 'https://' + process.env.VERCEL_URL;

  return (
    <React.Fragment>
      <Head>
        <title>RVTCS | Elevate Your Dev Experience</title>

        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <meta name="description" content='Elegant way of creating fullstack app' />

        {/*<!-- Twitter Meta Tags -->*/}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content='https://rvtcs.vercel.app/' />
        <meta name="twitter:title" content='RVTCS' />
        <meta name="twitter:description" content='Elegant way of creating fullstack app' />
        <meta name="twitter:creator" content="@Kinfe123" />

        {/*<!-- Facebook Meta Tags -->*/}
        <meta property="og:url" content='https://rvtcs.vercel.app/' />
        <meta property="og:type" content="article" />
        <meta property="og:title" content='RVTCS' />
        <meta property="og:description" content='Elegant way of creating fullstack app' />

        <meta
          property="og:image"
         
        />
      </Head>

      <ThemeProvider attribute="class" disableTransitionOnChange enableSystem>
        <SkipToContent />
        <Header />

        {isDocs ? (
          <LayoutDocs markdoc={pageProps.markdoc}>
            <Component {...pageProps} />
          </LayoutDocs>
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
