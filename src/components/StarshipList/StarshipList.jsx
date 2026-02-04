import StarshipCard from '../StarshipCard/StarshipCard';

function StarshipList({ starships }) {
  return (
    <section>
      {starships.map((ship) => (
        <StarshipCard key={ship.name} starship={ship} />
      ))}
    </section>
  );
}

export default StarshipList;
