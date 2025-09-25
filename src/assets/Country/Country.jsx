import React from 'react';
import { useState } from 'react';

const Country = ({country}) => {

    const [visited, setVisited] = useState(false);
    const handleAddVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className='border p-4'>
            <img src={country.flags.flags.png}></img>
            <h1>name: {country.name.common}</h1>
            <h1>Population: {country.population.population} <br />
                {country.population.population > 300000? 'Populated': 'Not Populated'}
            </h1>
            <button className='bg-blue-500 text-white p-2 rounded-md hover:bg-green-600 grid ' onClick={handleAddVisited}>{visited? 'Visited': 'Not Visited'}</button><br />
        </div>
    );
};

export default Country;