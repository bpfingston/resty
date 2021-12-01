import React from 'react';
import './header.scss';



function Header(props) {
// const handleHistory = () => {
//   props.setShowHistory(true);
// };

// const handleSearch = () => {
//   props.setShowHistory(false);
// };
  return (
    <header className="RESTy-header">
      <h1>RESTy</h1>
      <button onClick={() => props.dispatch({type: 'SHOW-HISTORY', payload: false})}>Search</button>
      <button onClick={() => props.dispatch({type: 'SHOW-HISTORY', payload: true})}>History</button>
    </header>
  );
}

export default Header;
