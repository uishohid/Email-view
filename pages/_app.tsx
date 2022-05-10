import { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { ToastContainer } from 'material-react-toastify';
import { Theme } from 'helpers/theme'
import Layout from '@components/Layout/Layout'
import '../styles/globals.css'
import 'material-react-toastify/dist/ReactToastify.css';
import AuthProvider from '@components/Auth/AuthProvider'
import { observer } from 'mobx-react'
import AuthStore from '@stores/AuthStore'
import { useRouter } from 'next/router'
import { StyledEngineProvider } from '@mui/material'

export type NextApplicationPage<P = any, IP = P> = NextPage<P, IP> & {
	protected?: boolean
}

function MyApp(props: AppProps) {
	const { Component, pageProps }: { Component: any; pageProps: any } = props;
	const router = useRouter();

	useEffect(() => {
        if (AuthStore.redirectToPath) router.push(AuthStore.redirectToPath);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [AuthStore.redirectToPath])

	return (
		<ThemeProvider theme={Theme}>
			<Head>
				<title>Email Automation</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<StyledEngineProvider injectFirst>
				<ToastContainer />
				<AuthProvider protectedRoute={Component.protected}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</AuthProvider>
			</StyledEngineProvider>
		</ThemeProvider>
	)
}

export default observer(MyApp)
