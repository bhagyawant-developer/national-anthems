import countriesData from '../data/countries.json';
import CountryCard from './CountryCard';

const CountryList = () => {
  return (
    <div className="country-list">
      {countriesData.map(country => (
        <CountryCard key={country.id} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
