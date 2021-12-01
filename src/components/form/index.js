import './form.scss';

function Form(props) {

  return (
    <>
      <form onSubmit={(e => props.dispatch({type: 'DATA', payload: e.target.value}))}>
        <label>
          <span>URL: </span>
          <input
            onChange={(e) => {
              e.preventDefault();
              props.dispatch({type: 'PARAMS', payload: {url: e.target.value}})}}
            name="url"
            type="text"
          />
          <button type="submit">GO!</button>
        </label>
        <label className="methods">
          <button
            type="button"
            onClick={(e) =>
              props.dispatch({ type: 'METHOD', payload: e.target.id })
            }
            id="GET"
            value="GET"
          >
            GET
          </button>
          <button
            type="button"
            onClick={(e) =>
              props.dispatch({ type: 'METHOD', payload: e.target.id })
            }
            id="POST"
            value="POST"
          >
            POST
          </button>
          <button
            type="button"
            onClick={(e) =>
              props.dispatch({ type: 'METHOD', payload: e.target.id })
            }
            id="PUT"
            value="PUT"
          >
            PUT
          </button>
          <button
            type="button"
            onClick={(e) =>
              props.dispatch({ type: 'METHOD', payload: e.target.id })
            }
            id="DELETE"
            value="DELETE"
          >
            DELETE
          </button>
        </label>
        {/* <textarea onChange={handleUserData} name="json" /> */}
      </form>
    </>
  );
}

export default Form;
