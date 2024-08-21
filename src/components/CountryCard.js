import Link from 'next/link';

const CountryCard = ({ country }) => {
  return (
    <div className="country-card">
      <h3>{country.name}</h3>
      <img src={country.flag} alt={`${country.name} flag`} />
      <Link href={`/countries/${country.id}`}>View Details</Link>
    </div>
  );
};

export default CountryCard;
