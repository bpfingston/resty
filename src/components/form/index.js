import React from 'react';
import './form.scss';

function Form(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
    };
    props.handleApiCall(formData);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name="url" type="text" />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <span 
            id="get"
            className="CRUDbutton"
          >GET</span>
          <span 
            id="post"
            className="CRUDbutton"
          >POST</span>
          <span 
            id="put"
            className="CRUDbutton"
          >PUT</span>
          <span 
            id="delete"
            className="CRUDbutton"
          >DELETE</span>
        </label>
      </form>
    </>
  );
}

export default Form;
