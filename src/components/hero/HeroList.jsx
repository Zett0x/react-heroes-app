import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";
import { useMemo } from "react";
export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <>
      <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
        {heroes.map((hero) => (
          <HeroCard
            key={hero.id}
            {...hero}
            /*
            id={hero.id}
            superhero={hero.superhero}
            publisher={hero.publisher}
            alter_ego={hero.alter_ego}
            first_appearance={hero.first_appearance}
            characters={hero.characters}*/
          />
        ))}
      </div>
    </>
  );
};
