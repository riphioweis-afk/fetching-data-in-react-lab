import { useEffect, useState } from 'react';
import * as starshipService from './services/starshipService';

import StarshipSearch from './components/StarshipSearch/StarshipSearch';
import StarshipList from './components/StarshipList/StarshipList';

function App() {
  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    async function fetchStarships() {
      try {
        const data = await starshipService.index();
        setStarshipsData(data);
        setDisplayedStarships(data);
      } catch (err) {
        console.error('Error loading starships');
      }
    }

    fetchStarships();
  }, []);

  function handleSearch(query) {
    const filtered = starshipsData.filter((ship) =>
      ship.name.toLowerCase().includes(query.toLowerCase())
    );

    setDisplayedStarships(filtered);
    setIsFiltered(query !== '');
  }

  function resetSearch() {
    setDisplayedStarships(starshipsData);
    setIsFiltered(false);
  }

  return (
    <main>
      <h1>Starships</h1>

      <StarshipSearch
        onSearch={handleSearch}
        resultCount={displayedStarships.length}
        isFiltered={isFiltered}
        onReset={resetSearch}
      />

      {!displayedStarships.length ? (
        <p>Loading...</p>
      ) : (
        <StarshipList starships={displayedStarships} />
      )}
    </main>
  );
}

export default App;
