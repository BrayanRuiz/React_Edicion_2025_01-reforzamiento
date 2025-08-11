const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
}

const { name: IronmanName, age, key } = person;

// const name = person.name;
// const age = person.age;
// const key = person.key;

console.log(IronmanName, age, key);

interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

const useContext = (hero: Hero) => {
    const { key, name, age, rank = 'sin rango'} = hero;

    return {
        keyName: key,
        user: {
            name: name,
            age: age,
        },
        rank: rank,
    };
};

const context = useContext(person);

console.log(context);

const { keyName, rank, user: { name } } = context;
console.log(keyName, rank, name);
