import React, {lazy, Suspense, createContext, useReducer, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'custom-input-aslam/build/index.css';
import './assets/css/style.css';
import './assets/font_awesome/css/fontawesome-all.min.css';
import {BrowserRouter as Router, Redirect, Route, useHistory} from "react-router-dom";
import { ToastProvider, useToasts } from 'react-toast-notifications';
import axios from 'axios'

import Header from './components/Header';
import Footer from './components/Footer';
import {API_URL} from './config/apis';
import {getToken} from './methods/methods';

const Home = lazy(()=>import('./pages/home/Home'));
const Productdetails = lazy(()=>import('./pages/home/Productdetails'));
const Auth = lazy(()=>import('./pages/auth/Auth'));
const Wishlist = lazy(()=>import('./pages/wishlist/Wishlist'));
const Cartview = lazy(()=>import('./pages/cartview/Cartview'));
const Placeorder = lazy(()=>import('./pages/placeorder/Placeorder'));

const Admin = lazy(()=>import('./admin/Admin'));

let initialState={
  API_URL:API_URL
}

export const AppContext = createContext();

const reducer=(state, action)=>{
  initialState={
    API_URL:API_URL
  }
  switch(action.type){
    case 'FETCH_PRODUCTS':
      return {...state, products:action.payload}
    case 'PRODUCT_DETAILS':
      return {...state, productDetails:action.payload}
    case 'LOGGED_IN_USER':
      return {...state, loggedInUser:action.payload}
    case 'FETCH_CART':
      return {...state, carts:action.payload}
    case 'FETCH_FAVORITE':
      return {...state, favorites:action.payload}
    case 'PROGRESS':
      return {...state, progress:action.payload}
    default:
      return initialState
  }
}

const PrivateRoute = ({ component: Component, auth: auth, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('auth') === 'true' ? (
        <Component {...props} />
      ) : (
        <Redirect to="/auth" />
      )
    }
  />
);


function App(props) {
  const [data, dispatch] = useReducer(reducer, initialState); 

    useEffect(()=>{
      axios.get(`${data.API_URL}/users/user`, getToken() ).then((res)=>{
        dispatch({type:'LOGGED_IN_USER', payload:res.data[0]})
        if(res.data.status===false){
            dispatch({type:'FETCH_PRODUCTS', payload:''})
            localStorage.setItem('auth', false)
            localStorage.removeItem('token')
          }
        else{
          localStorage.setItem('auth', true)
        }
        }).catch((err)=>{
        // setError({message:err})
      });
  },[])

  return (
    <div className="App">
      <Suspense fallback={<div className="loader">Loading...</div>}>
        <ToastProvider>
          <Router>
            <AppContext.Provider value={{data:data, dispatch:dispatch}}>
              <Header />
              <Route exact path='/' component={Home} />
              <Route path='/product/:id' component={Productdetails} />
              <Route path='/auth' component={Auth} />
              <PrivateRoute path='/admin' component={Admin} />
              <PrivateRoute path='/wishlist' component={Wishlist} />
              <PrivateRoute path='/cartview' component={Cartview} />
              <PrivateRoute path='/placeorder' component={Placeorder} />
            </AppContext.Provider>
          </Router>
          <Footer />        
        </ToastProvider>
      </Suspense>
    </div>
  );
}

export default App;
