/* eslint-disable no-undef */
import React, { useState } from "react";
import { getToken } from "./localStorage";
import { options } from "helpers";
import { Colors } from "../constant";
import { store } from "store";

import * as authActions from "store/authentication/actions";

const customFetch = async (url, method, data, isUpload) => {
  const headers = {};

  const logoutAction = store.dispatch(authActions.logout);

  // NotificationManager.info('Info message');
  // if (!url.includes('login') && !url.includes('forgot-password')) {
  // if (!isUpload) {
  //   }
  // }

  if (isUpload) {
    headers["Accept"] = "multipart/form-data";
    // headers['Content-Type'] = 'application/x-www-form-urlencoded';
  } else {
    headers["Accept"] = "application/json; charset=utf-8";
    headers["Content-Type"] = "application/json; charset=utf-8";
  }
  headers["Authorization"] = getToken();
  headers["X-Channel"] = "web_katagamer_channel";
  // headers['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY29kZSI6IiIsImV4cCI6MTYxNDY1Nzk2NiwiaXNzIjoiYWRtaW4ifQ.QqHHYUBKHXtqxIQG2R_vcffLGDgRrE6irqM7p2I2l0Y';
  // headers['Accept'] = 'application/json; charset=utf-8';
  // headers['Content-Type'] = 'application/json; charset=utf-8';
  // headers['X-Channel'] = 'web_cms_channel';

  try {
    // console.log(headers, method, data);
    const response = await fetch(url, {
      method: method,
      body: isUpload
        ? data
        : method !== "GET"
        ? JSON.stringify(data)
        : undefined,
      mode: "cors",
      headers,
    });

    switch (response.status) {
      case 500:
        window.location.replace("/server-attacked");
        break;

      case 404:
        // console.log('response', response);
        window.location.replace("/not-found");
        break;

      case 403:
        // window.location.replace('/403');
        break;

      case 401:
        // const res = await response.json();
        // if (res.stat_code === 'ERR:AUTHENTICATION') {
        toast(
          <NotifPopUp
            color={Colors.white.default}
            bgColor={Colors.red.fee}
            text="Session Expired. Please re-login."
            weight="700"
          />,
          options
        );
        logoutAction();
        // localStorage.removeItem('token');
        // localStorage.removeItem('user');
        // window.location.replace('/');
        // location.reload();
        // }
        return await response;

        break;

      case 400:
        // const res = await response.json();
        // if (res.stat_msg.toLowerCase() === 'invalid token') {
        //   localStorage.removeItem('token');
        //   window.location.replace('/signin');
        // } else {
        //   return res;
        // }
        // console.log(response);
        // store.addNotification({
        //   title: 'Oops!',
        //   message: 'Something Happened',
        //   type: 'danger',
        //   insert: 'top',
        //   container: 'top-center',
        //   animationIn: ['animate__animated', 'animate__fadeIn'],
        //   animationOut: ['animate__animated', 'animate__fadeOut'],
        //   dismiss: {
        //     duration: 2000,
        //     onScreen: true
        //   }
        // });
        return await response;
      // break;

      default:
        // console.log('response', response);
        return await response;
    }
  } catch (err) {
    throw err;
  }
};
export default customFetch;
