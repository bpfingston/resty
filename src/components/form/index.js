import React from 'react';
import './form.scss';

function Form(props) {

  const [urlValue, setUrlValue] = useState('');
  const [methodValue, setMethodValue] = useState('');
  // const [] = useState('');

  const handleURL = (e) => {
    let { value } = e.target;
    setMethodValue(value);
  }

  const handleMethod = (e) => {
    let method = e.target.id.toLowerCase();
    setMethodValue(method);
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: methodValue,
      url: urlValue,
    };
    props.handleApiCall(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input onChange={handleURL} name="url" type="text" />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span 
            onClick={handleMethod}
            id="get"
            className="CRUDbutton"
          >GET</span>
          <span 
            onClick={handleMethod}
            id="post"
            className="CRUDbutton"
          >POST</span>
          <span 
            onClick={handleMethod}
            id="put"
            className="CRUDbutton"
          >PUT</span>
          <span 
            onClick={handleMethod}
            id="delete"
            className="CRUDbutton"
          >DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;
