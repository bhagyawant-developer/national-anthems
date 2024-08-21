import { useRouter } from 'next/router';
import countriesData from '../data/countries.json';
import ReactPlayer from 'react-player';

const CountryDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const country = countriesData.find(c => c.id === parseInt(id, 10));

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div className="country-detail">
      <h1>{country.name}</h1>
      <img src={country.flag} alt={`${country.name} flag`} />
      <ReactPlayer url={country.anthem} playing controls />
      <p><strong>History:</strong> {country.history}</p>
      <p><strong>Father of the Nation:</strong> {country.founder}</p>
      <p><strong>Freedom Fighters:</strong> {country.freedom_fighters.join(', ')}</p>
      <p><strong>Specialty:</strong> {country.specialty}</p>
    </div>
  );
};

export default CountryDetail;
