import './App.css'


const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json());

const App = ()=>

  {
    return (
      <> <h1 className="text-4xl font-bold text-blue-600">Countries</h1>
        <Countries CountriesPromise={countriesPromise} />
      </>
    );
  }

import Countries from './Countries/countries';

export default App;