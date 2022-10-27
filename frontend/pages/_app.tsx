import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Cabecalho from "../src/components/Cabecalho/Cabecalho";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Cabecalho></Cabecalho>
      <Component {...pageProps} />
    </>
  )
}
