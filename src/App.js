import { useState, useEffect } from 'react';
import api from './utils/api';

import './App.css';

const App = () => {
  let rates = [];
  let loading = false;
  let error = false

  async function fetchRates() {
    loading = true;
    const result = await api.get('/rates');
    rates = result;
    loading = false;
  }

  let appContent;
  if (loading) {
    appContent = <Loading />;
  } else if (error) {
    appContent = <Error errorMessage={error} />;
  } else {
    appContent = (
      <>
        <Rates loanRates={rates} />
        <button onClick={fetchRates}>Refetch Rates</button>
      </>
    );
  }

  return <div className="App">{appContent}</div>;
};

const Loading = () => <div className="Loader" />;
const Error = ({ errorMessage }) => <div>{errorMessage}</div>;
const Rates = () => (
  <>
    <h1>Loan Rates</h1>
  </>
);

export default App;
