interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
}

interface Address {
    postalCode: string;
    city: string;
}

const person: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: '43753',
        city: 'New York',
    },
};

person.firstName = 'Peter';

const personClone = structuredClone(person);

personClone.firstName = 'Fanny';
personClone.lastName = 'Esquivel';
personClone.age = 25;

console.log(person, personClone);