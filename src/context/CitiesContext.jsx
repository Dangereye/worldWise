// React
import { createContext, useEffect, useState } from 'react';

const CitiesContext = createContext();

const BASE_URL = 'http://localhost:8000';

export default function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert('There was an error loading data... ');
      } finally {
        setIsLoading(false);
      }
    }
    getCities();
  }, []);
  return (
    <CitiesContext.Provider value={{ cities, isLoading }}>
      {children}
    </CitiesContext.Provider>
  );
}
