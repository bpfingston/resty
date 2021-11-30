import { useState, useEffect } from 'react';
import axios from 'axios';

import './app.scss';

import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';


function App() {

  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false)
  const [method, setMethodRequest] = useState('')
  const [userData, setUserData] = useState({})

  const callApi = (formParams) => {
    setLoading(true);
    const info = {
      method: requestParams.method,
      url: requestParams.url
    };
    setData(info);
    setRequestParams({...requestParams, ...formParams});
  }

  useEffect(() => {

    if(method === "GET"){
      console.log('in this if now ')
    const action = async () => {
      try{
      let response = await axios.get(requestParams.url+`/${userData}`);
      console.log(response)
      setData(response.data);
      setLoading(false);
      }catch(e){
        if(requestParams){
          e.message;
          setLoading(false);
        }
      }
    }
    action();
  }
  }, [requestParams]);

  return (
    <>
      <Header />
      <div>Request Method: {method}</div>
      <div>URL: {requestParams.url}</div>
      <Form
        setRequestParams={setRequestParams}
        requestParams={requestParams}
        handleApiCall={callApi} 
        setMethodRequest={setMethodRequest}
        setUserData={setUserData}
      />
      {data ? <Results data={data} /> : loading && <p>loading</p> }
      <Footer />
    </>
  );
}

export default App;
