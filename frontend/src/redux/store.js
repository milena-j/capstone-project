import { configureStore } from '@reduxjs/toolkit';
/* import listaEventiReducer from '../features/eventi/listaEventiSlice'; */
import rootReducer from '../test-features/rootReducer';

const store = configureStore({
  reducer: rootReducer,

  /* reducer: {
    listaEventi: listaEventiReducer
  }, */
  
  /* {
        app: app,
        analytics: analytics,
        counterTest: counterTestReducer,
        userTest: userTestReducer,
        eventi: eventiReducer
    } */
});

export default store;

/* per configurare lo store è necessario inserire tutti i reducer  */