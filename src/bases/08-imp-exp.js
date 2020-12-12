// import { heroes } from './data/heroes';

import heroes, { owners } from "../data/heroes";

export const getHeroById = (id) => heroes.find((element) => element.id === id);

export const getHeroByOwner = (owner) => heroes.filter((element) => element.owner === owner);

