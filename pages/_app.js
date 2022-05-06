import '../styles/globals.css';
import "../styles/Home.module.css"
import { Provider } from 'react-redux';
import {store,wrapper} from "../Redux/Store";
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return( 
    <>
    <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
      </>
  )
}

export default wrapper.withRedux(MyApp)
