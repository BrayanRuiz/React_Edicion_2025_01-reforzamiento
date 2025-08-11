import { getHeroesByOwner } from './bases/08-imp-exp';
import { Owner } from './bases/data/heroes.data';
import './style.css'

// import './bases/01-const-let';
// import './bases/02-template-string'
// import './bases/03-object-literals';
// import './bases/04-arrays';
// import './bases/05-functions';
// import './bases/06-obj-destructuring';
// import './bases/07-array-destructuring';
// import './bases/08-imp-exp';
import './bases/09-promises';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div>
        <h1>Hola Mundo</h1>
    </div>
`

console.log(getHeroesByOwner(Owner.DC));