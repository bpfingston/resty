import { useState } from 'react';
import './form.scss';

function Form(props) {
  const [requestUrl, setRequestUrl] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      url: requestUrl,
    };
    props.handleApiCall(formData);
  };

  const handleClick = (e) => {
    props.setMethodRequest(e.target.id);
  };

  const handleUserData = (e) => {
    e.preventDefault();
    props.setUserData(e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input
            onChange={(e) => setRequestUrl(e.target.value)}
            name="url"
            type="text"
          />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <button type="button" onClick={handleClick} id="GET" value="GET">
            GET
          </button>
          <button type="button" onClick={handleClick} id="POST" value="POST">
            POST
          </button>
          <button type="button" onClick={handleClick} id="PUT" value="PUT">
            PUT
          </button>
          <button
            type="button" onClick={handleClick} id="DELETE" value="DELETE"
          >
            DELETE
          </button>
        </label>
        <textarea onChange={handleUserData} name="json" />
      </form>
    </>
  );
}

export default Form;
