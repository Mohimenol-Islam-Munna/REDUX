import "../styles/globals.css";
import { Provider } from "react-redux";
import storeWrapper from "../RTKQuery/store";

function MyApp({ Component, ...rest }) {
  const { store, props } = storeWrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
}

export default MyApp;
