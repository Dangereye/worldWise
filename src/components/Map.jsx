// React router
import { useSearchParams } from 'react-router-dom';

// CSS
import styles from './Map.module.css';

export default function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get('lat');
  const lng = searchParams.get('lng');
  return (
    <div className={styles.mapContainer}>
      <h1>Map</h1>
      <p>
        Position: {lat}, {lng}
      </p>
    </div>
  );
}
