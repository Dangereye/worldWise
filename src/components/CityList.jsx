// CSS
import styles from './CityList.module.css';

// Hooks
import { useCities } from '../context/CitiesContext';

// Components
import Spinner from './Spinner';
import CityItem from './CityItem';
import Message from './Message';

export default function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;
  if (!cities.length) {
    return <Message message='Add your first city by clicking on the map' />;
  }

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.cityName} city={city} />
      ))}
    </ul>
  );
}
