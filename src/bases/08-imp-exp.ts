import { heroes, type Hero, Owner } from "./data/heroes.data"


const getHeroById = (id: number): Hero => {
    const hero = heroes.find((hero) => {
        return hero.id === id;
    });

    if (!hero) {
        throw new Error(`No existe un hereo con el id ${id}`);
    }
    return hero;
};

export const getHeroesByOwner = (owner: Owner): Hero[] => {
    const listaHero: Hero[] = heroes.filter(x => x.owner === owner);
    
    return listaHero;
}

// console.log(getHeroById(111));

