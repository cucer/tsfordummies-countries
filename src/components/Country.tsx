import { FunctionComponent } from 'react';
import { CountryType } from '../types';

interface ICountryProps {
  country: CountryType;
}

// FunctionComponent ???
// bu şekilde yazma sebebi yani FunctionComponentli yazma sebebi, bu component içinde hem children kullanılabilir, hem de key gibi bir değer ataması yapabilir
// normal function şeklinde yazıp her zamanki gibi bir type ataması yapsaydık, componentin çağırıldığı yerde children veya key gibi değerler veremezdi
const Country: FunctionComponent<ICountryProps> = (props) => {
  const { country } = props;

  return (
    <p>
      {country.name.official} - {country.capital}
    </p>
  );
};

export default Country;
