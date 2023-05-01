import { StoreProvider } from "@/components/cartReducers"
import "../styles/App.css"
import "../styles/index.css"
import 'bootstrap/dist/css/bootstrap.css'



export default function App({ Component, pageProps }) {
  return <StoreProvider>
    <Component {...pageProps} />
  </StoreProvider>
}
