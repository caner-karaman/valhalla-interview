import React from "react";
import Nav from "./Nav";
import Pagination from "./Pagination";
import { AppContext, appReducer, APP_ACTIONS, initialState  } from "./App.context";
import Display from "./Display";

const App = () => {
  const [state, dispatch] = React.useReducer(
    appReducer,
    initialState,
  );

  const {category, page} = state;

  const setCategory = React.useCallback((category) => {
    dispatch({type: APP_ACTIONS.SET_CATEGORY, payload: category});
  }, []);

  const setPage = React.useCallback((page) => {
    dispatch({type: APP_ACTIONS.SET_PAGE, payload: page});
  }, []);

  const context = {
    category,
    setCategory,
    page, 
    setPage
  };

  return(
    <AppContext.Provider value={context}>
      <Nav />
      <Pagination />
      <Display />
    </AppContext.Provider>
  )
}

export default App;