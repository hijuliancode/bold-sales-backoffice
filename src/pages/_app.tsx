import type { AppProps } from 'next/app'

import { SalesProvider } from 'context/SalesProvider'

import '../scss/bold.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SalesProvider>
      <Component {...pageProps} />
    </SalesProvider>
  )
}
export default MyApp
