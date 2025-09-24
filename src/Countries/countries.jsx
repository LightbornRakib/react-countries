import React, { use } from 'react';

 import Country from '../assets/Country/country';

const Countries = ({ CountriesPromise }) => {

    const countriesData = use(CountriesPromise);
   const Countries = countriesData.countries;
    return (
        <div className='grid grid-cols-3 gap-4 border p-6'>
            {
                Countries.map(country => <Country country={country} />)
            }
        </div>
    );
};

export default Countries;