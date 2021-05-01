import './App.css';
import { useState, useEffect } from 'react';
import { CardList } from './components/card-list/CardList';
import { SearchField } from './components/search-field/SearchField';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getUsers = async() => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const usersData = await res.json();
    setMonsters(usersData)
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    getUsers();
  }, []);

  console.log(searchTerm)
  const monsterSearch = monsters.filter(monster => monster.name.toLowerCase().includes(searchTerm.toLowerCase().trim()))
  console.log(monsterSearch)
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchField type="search" placeholder="Search Monsters" onChange={handleChange} value={searchTerm} />
      <CardList monsters={monsterSearch} />
    </div>
  );
}

export default App;
