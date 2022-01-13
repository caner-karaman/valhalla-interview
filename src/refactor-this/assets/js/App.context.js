import React from "react"

const initialState = {
  category: 'nature',
  setCategory: () => null,
  page: 1,
  setPage: () => null,
}

const AppContext = React.createContext(initialState);

const useAppContext = () => {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error('App context does not exist');
  }

  return context;
};

const APP_ACTIONS = {
  SET_CATEGORY: '@SET_CATEGORY',
  SET_PAGE: '@SET_PAGE',
};

const appReducer = (state, action) => {
  switch (action.type) {
    case APP_ACTIONS.SET_CATEGORY:
      return {...state, category: action.payload};
    case APP_ACTIONS.SET_PAGE:
      return {...state, page: action.payload};
    default:
      return state;
  }
};


export {
  useAppContext,
  AppContext,
  appReducer,
  initialState,
  APP_ACTIONS
}
