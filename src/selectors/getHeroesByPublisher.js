import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const VALID_PUBLISHERS = ["dc comics", "marvel comics"];
  if (!VALID_PUBLISHERS.includes(publisher.toLowerCase())) {
    throw new Error(`${publisher} is not a valid publisher`);
  }
  return heroes.filter(
    (hero) => hero.publisher.toLowerCase() === publisher.toLowerCase()
  );
};
