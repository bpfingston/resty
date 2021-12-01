import { useState, useEffect, useReducer } from 'react';
import axios from 'axios';

import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App() {


  let initialState = {
    data:null,
    loading: false,
    method: '',
    body: {},
    url: '',
    history:[],
    showHistory:false,
  }
  // const [data, setData] = useState(null);
  // const [requestParams, setRequestParams] = useState({});
  // const [loading, setLoading] = useState(false);
  // const [method, setMethodRequest] = useState('');
  // const [userData, setUserData] = useState(null);
  // const [showHistory, setShowHistory] = useState(false)
  // const [history, setHistory] = useState([])
  let reducer = (state, action) => {
    switch(action.type){
      case 'DATA':
        return{
          ...state,
          data: action.payload
        }
      case 'LOADING':
        return{
          ...state,
          loading: action.payload
        }
      // case 'LOADING':
      //   return{
      //     ...state,
      //     loading: action.payload
      //   }
      case 'PARAMS':
        return{
          ...state,
          body: action.payload.body,
          url: action.payload.url,
        }
      case 'METHOD':
        return{
          ...state,
          method: action.payload,
        }
      case 'HISTORY':
        return{
          ...state,
          history: [...state.data, action.payload]
        }
      case 'SHOW-HISTORY':
        return{
          ...state,
          showHistory: action.payload
        }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
  // if(state.url.length > 0){
    // let action = {type: 'LOADING', payload: true}
    // dispatch(action);
    // let action = {type: 'HISTORY', payload: []}
    const callApi = async () => {
      let action = {type:'DATA', payload: null}
      try {
        switch (state.method) {
          case 'GET':
            // if ( state.data === null) {
              let { headers, data } = await axios.get(state.url)
                action.payload = { headers, data }
                dispatch(action);
            // } else {
            //   let { headers, data } = await axios.get(state.url+ `/${state.data}`)
            //     action.payload = { headers, data }
            //     dispatch(action);
            // }
            break;
          case 'POST':
            state.data({
              Message:
                'You have clicked on POST, Click GET to retrieve Data from the API',
            });
            break;
          case 'PUT':
            state.data({
              Message:
                'You have clicked on PUT, Click GET to retrieve Data from the API',
            });
            break;
          case 'DELETE':
            state.data({
              Message:
                'You have clicked on DELETE, Click GET to retrieve Data from the API',
            });
            break;
          default:
            console.log('welp');
            break;
        }
      } catch (e) {
        if (state.body) {
          e.message;
          setLoading(false);
        }
      }
    }
    callApi()
  }, [state.url]);
  

  return (
    <>
      <Header dispatch={dispatch} />
      <div>Request Method: {state.method}</div>
      <div>URL: {state.url}</div>
      {state.showHistory ? <History /> : <Form dispatch={dispatch}/>};
      {state.data ? <Results data={state.data} /> : state.loading && <p>loading</p>};
      <Footer />
    </>
  );
};

export default App;
