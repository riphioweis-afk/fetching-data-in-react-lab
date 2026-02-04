const BASE_URL = 'https://swapi.dev/api/starships/';

async function index() {
  try {
    const res = await fetch(BASE_URL);

    if (!res.ok) {
      throw new Error('Failed to fetch starships.');
    }

    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export { index };
