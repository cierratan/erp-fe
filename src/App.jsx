import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
// import { PersistGate } from 'redux-persist/integration/react';

// import { GlobalStyles } from './constant';
import Router from './router';
// import { history, store, Redux } from 'store';


const App = () => {
  return (
    // <Provider store={ store }>
    //   <PersistGate loading={ null } persistor={ persistor }>
    //     <GlobalStyles/>
    //     <Router history={ history } />
    //   </PersistGate>
    // </Provider>
    <div className='App' style={ { overflow: 'hidden' } }>
      {/* <Redux> */ }
      {/* <GlobalStyles /> */ }
      <Router />
      {/* </Redux> */ }
    </div>
  );
};
export default App;
