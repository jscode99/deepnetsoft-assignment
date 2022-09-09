import { useState } from "react";
import AppContext from "../App/services/AppContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [appContext, setAppContext] = useState('Categories');
  return (
    <AppContext.Provider value={{ appContext, setAppContext }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
