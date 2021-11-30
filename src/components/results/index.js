import React from 'react';
import './results.scss';
import ReactJson from 'react-json-view';

function Results(props) {
  return (
    <section>
      <pre class="results">
        {props.data ? <ReactJson src={props.data} theme="summerfruit:inverted" />  : null}
      </pre>
    </section>
  );
}

export default Results;
