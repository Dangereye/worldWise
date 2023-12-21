// React
import { useEffect, useState } from 'react';

// CSS
import styles from './Form.module.css';

// Hooks
import { useUrlPosition } from '../hooks/useUrlPosition';

// Components
import Button from './Button';
import BackButton from './BackButton';
import Message from './Message';
import Spinner from './Spinner';

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const BASE_URL = 'https://api.bigdatacloud.net/data/reverse-geocode-client';

export default function Form() {
  const [lat, lng] = useUrlPosition();
  const [cityName, setCityName] = useState('');
  const [country, setCountry] = useState('');
  const [emoji, setEmoji] = useState('');
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState('');
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [geocodingError, setGeocodingError] = useState('');

  useEffect(() => {
    async function getCity() {
      if (!lat && !lng) return;
      try {
        setIsLoadingGeocoding(true);
        setGeocodingError('');
        const res = await fetch(`${BASE_URL}?latitude=${lat}&longitude=${lng}`);

        if (!res.ok) {
          throw new Error('Oops! Something went wrong getting the data.');
        }
        const data = await res.json();

        if (!data.countryCode)
          throw new Error(
            "Well, that doesn't seem to be a city. Try clicking somewhere else."
          );

        setCityName(data.city || data.locality || '');
        setCountry(data.countryName);
        setEmoji(convertToEmoji(data.countryCode));
      } catch (err) {
        setGeocodingError(err.message);
      } finally {
        setIsLoadingGeocoding(false);
      }
    }
    getCity();
  }, [lat, lng]);

  if (isLoadingGeocoding) return <Spinner />;

  if (!lat && !lng)
    return <Message message='Start by clicking somewhere on the map.' />;

  if (geocodingError) return <Message message={geocodingError} />;

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor='cityName'>City name</label>
        <input
          id='cityName'
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        <span className={styles.flag}>{emoji}</span>
      </div>

      <div className={styles.row}>
        <label htmlFor='date'>When did you go to {cityName}?</label>
        <input
          id='date'
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor='notes'>Notes about your trip to {cityName}</label>
        <textarea
          id='notes'
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type='primary'>Add</Button>
        <BackButton />
      </div>
    </form>
  );
}
