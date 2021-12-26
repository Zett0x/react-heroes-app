import { heroes } from "../data/heroes";

export const getHeroesByName = (name = "") => {
  console.log("getheroesByName called");
  return heroes.filter((hero) =>
    hero.superhero.toLowerCase().includes(name.toLowerCase())
  );
};
