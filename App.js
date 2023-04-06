import { ChakraProvider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { GlobalContext } from "./contexts/GlobalContext";

import Router from "./routes/Router";

function App() {

  const [ isAuth, setIsAuth ] = useState(false)

  useEffect(() => {
      const token = window.localStorage.getItem("labeddit.token")

      if (token) {
          setIsAuth(true)
      }
  }, [])

  const context = {
      isAuth: isAuth,
      setIsAuth: setIsAuth
  }
  return (
    <GlobalContext.Provider value={context}>
       <ChakraProvider resetCSS>
      
          <Router />
          </ChakraProvider>
          </GlobalContext.Provider>
  );
}

export default App;
