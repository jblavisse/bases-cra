import './App.css';
import Item from './Item';
import User from './User';
import {useState} from 'react';

function App() {
  const [truc, ] = useState("Bidule");

  const [users,] = useState([
    {firstname: "JB", lastname: "Lavisse", age:25},
    {firstname: "JiBou", lastname: "Lavice", age:32},
    {firstname: "Greg", lastname: "Tubbernut", age:47},
    {firstname: "Pierre", lastname: "Paul", age:52},
  ])

  return (
    <div className="App">
      <h1>Bienvenue sur mon application {truc}!</h1>
      <ul>
        <Item title="Pizza" />
        <Item title="Jambon" />
        <Item title="Fromage" />
      </ul>

      <table>
        <tr>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Age</th>
        </tr>

        {/*
        En entrée: [
    {firstname: "JB", lastname: "Lavisse", age:25},
    {firstname: "JiBou", lastname: "Lavice", age:32},
    {firstname: "Greg", lastname: "Tubbernut", age:47},
    {firstname: "Pierre", lastname: "Paul", age:52},
    ] */}
        {
          users.map(user => {
            return <User firstname={user.firstname} lastname={user.lastname} age={user.age} />
          })
        }

    {/* 
    Exemple avec le premier élément:
      Dans user du .map va se trouver: {firstname: "JB", lastname: "Lavisse", age:25}
      Et du coup, en retour
      il va générer ça: 
      <User firstname="JB" lastname="Lavisse" age=25 />
    */}

  {/* En retour: 
    <User firstname="JB" lastname="Lavisse" age=25 />
    <User firstname="JiBou" lastname="Lavice" age=32 />
    <User firstname="Greg" lastname"Tubbernut" age=47 />
    <User firstname="Pierre" lastname="Paul" age=52 />
    */}
      </table>
    </div>
  );
}

export default App;
