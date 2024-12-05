import React, { useState } from "react";

// Liste des données
const list = [
  { nom: "banane", type: "fruit" },
  { nom: "orange", type: "fruit" },
  { nom: "pomme", type: "fruit" },
  { nom: "raisins", type: "fruit" },
  { nom: "kiwi", type: "fruit" },
  { nom: "tomate", type: "legume" },
  { nom: "carotte", type: "legume" },
  { nom: "pomme de terre", type: "legume" },
  { nom: "poivron", type: "legume" },
];

const Input = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    onSearch(inputValue); 
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Rechercher..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

// Composant Select
const SearchSelect = ({ onSelectChange }) => {
  return (
    <select onChange={(e) => onSelectChange(e.target.value)}>
      <option value="">Tous</option>
      <option value="fruit">Fruits</option>
      <option value="legume">Légumes</option>
    </select>
  );
};

// Composant Résultat
const ResultList = ({ results }) => {
  return (
    <ul>
      {results.map((item, index) => (
        <li key={index}>
          {item.nom} ({item.type})
        </li>
      ))}
    </ul>
  );
};

// Composant Parent
const App = () => {
  const [searchText, setSearchText] = useState("");
  const [searchType, setSearchType] = useState("");
  const [filteredList, setFilteredList] = useState(list);

  // Filtrer
  const filterList = () => {
    let list = list;

    if (searchText) {
      list = list.filter((elt) =>
        elt.nom.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (searchType) {
      list = list.filter((elt) => elt.type === searchType);
    }

    setFilteredList(list);
  };

  return (
    <div>
      <h1>Recherche</h1>
      <Input onSearch={(text) => setSearchText(text)} />
      <SearchSelect onSelectChange={(type) => setSearchType(type)} />
      <button onClick={filterList}>Rechercher</button>
      <ResultList results={filteredList} />
    </div>
  );
};

export default App;

