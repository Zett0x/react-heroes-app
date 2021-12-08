import { heroes } from "../data/heroes";

export const getHeroesByName = (name = "") =>
  heroes.filter((hero) => hero.superhero.toLowerCase() === name.toLowerCase());
