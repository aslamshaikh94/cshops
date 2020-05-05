import React, {lazy, Suspense, createContext, useReducer, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'custom-input-aslam/build/index.css';
import './assets/css/style.css';
import './assets/font_awesome/css/fontawesome-all.min.css';
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";
import { ToastProvider} from 'react-toast-notifications';
import axios from 'axios';
import {Helmet} from 'react-helmet';
import {loaderBar} from './methods/methods';


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
  API_URL:API_URL,
  loading:true,
  error:false,
}

export const AppContext = createContext();

const reducer=(state=initialState, action)=>{
  
  switch(action.type){
    case 'FETCH_REQUEST':
      return {...state, loading:action.payload}
     case 'FETCH_ERROR':
      return {...state, loading:false, error:action.payload}
    case 'FETCH_PRODUCTS':
      return {...state, loading:false, products:action.payload}
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
    if(data.loading===true){
      loaderBar(true)
    } 
    else if(data.loading===false){
      loaderBar(false)
    }
  },[data.loading])      
    
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
  },[data.API_URL])

  return (
    <div className="App">
      <Helmet>
        <title>CShops</title>
        <meta name="description" content=">CShops Commercial Shops Wholesalers and Retailers" />
      </Helmet>
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
