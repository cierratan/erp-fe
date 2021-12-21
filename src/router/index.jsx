import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { useHistory } from 'react-router-dom';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';
import moment from 'moment';

import {
  Dashboard,
  Master,
  Inm00001,
  Form,
  StockLocation,
  StockLocationForm
} from '../screens';
import { Sidebar } from '../components';
import { Colors, Images } from '../constant';


// import PrivateRoute from './private';
// import { scrollToTop as ScrollToTop } from '../helpers';
// import { store } from 'store';


const publicRoutes = [
  {
    path: '/',
    component: Dashboard,
  },
  {
    path: '/master',
    component: Master,
  },
  {
    path: '/items',
    component: Inm00001,
  },
  {
    path: '/form',
    component: Form,
  },
  {
    path: '/stock-locations',
    component: StockLocation,
  },
  {
    path: '/stock-locations/create',
    component: StockLocationForm,
  },

];

const privateRoutes = [
  // {
  //   path: '/payment-status/:id',
  //   component: WaitingPayment,
  // },
];


const Router = props => {
  const history = useHistory();
  const [userName, setUserName] = useState('username');
  const [company, setCompany] = useState('company name');
  const [loginDate, setLoginDate] = useState(moment().format("YYYY-MM-DD HH:mm:ss"));
  // const dispatch = useDispatch();

  return (
    <BrowserRouter history={ history }>
      {/* <GlobalStyles /> */ }
      {/* <ScrollToTop /> */ }

      <Sidebar />

      <div className="page-wrapper">
        {
          <div className="userInfo">
            <div className="left">
              <p className="username">Username: { userName }</p>
              <p className="company">Company: { company }</p>
            </div>
            <div className="right">
              <p className="login">Login Date: { loginDate }</p>
            </div>
          </div>
        }
        <Switch>
          {
            publicRoutes.map(route =>
              <Route
                key={ route.path }
                exact
                path={ route.path }
                component={ route.component }
              />
            )
          }

          {/* {
            privateRoutes.map(route => <PrivateRoute key={ route.path } path={ route.path } component={ route.component } langContent={ langContent } />)
          } */}

          {/* <Route component={ Page404 }/> */ }
        </Switch>
      </div>

    </BrowserRouter>
  );
};

export default Router;
