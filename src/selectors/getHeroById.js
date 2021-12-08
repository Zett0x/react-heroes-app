import { heroes } from "../data/heroes";

export const getHeroById = (id = "") => heroes.find((h) => h.id === id);
