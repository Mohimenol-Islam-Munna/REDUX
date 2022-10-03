import "../styles/globals.css";
import storeWrapper from "../store/index";
import { Provider } from "react-redux";

function MyApp({ Component, ...rest }) {
  const { store, props } = storeWrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Component {...props.pageProps} />;
    </Provider>
  );
}

export default MyApp;
