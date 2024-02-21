import { useState, useEffect } from 'react';
import { getRequest } from '@/service/HttpService';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getRequest('/v3.1/all').then((res) => {
      setCountries(res.data);
    });
  }, [0]);

  return (
    <div className="bg-white pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Countries flag</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose the right plan for you
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi
            velit ut non voluptas in. Explicabo id ut laborum.
          </p>
        </div>
        <div className="mx-auto mt-16 sm:mt-12">
          <ul className="flex-wrap flex">
            {countries.map((country: { name: { common: string }; flags: { svg: string } }) => (
              <li key={country.name.common}>
                <img className="w-10 mr-3 mb-3" src={country.flags.svg} alt="flag" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Countries;
