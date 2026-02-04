import { useState } from 'react';

function StarshipSearch({ onSearch, resultCount, isFiltered, onReset }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [prevSearchTerm, setPrevSearchTerm] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    onSearch(searchTerm);
    setPrevSearchTerm(searchTerm);
    setSearchTerm('');
  }

  return (
    <section>
      <p>
        <strong>{resultCount}</strong> results —{' '}
        {prevSearchTerm
          ? `Last search: "${prevSearchTerm}"`
          : 'Search for a starship by name.'}
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          placeholder="Search starships..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isFiltered && (
        <button onClick={onReset}>Show all starships</button>
      )}
    </section>
  );
}

export default StarshipSearch;
