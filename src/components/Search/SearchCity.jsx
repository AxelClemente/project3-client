import { useState } from "react";

function SearchCity(props) {
  const { searchCityStrollList } = props;
  const [firstLetter, setFirstLetter] = useState("");

  const handleSelect = (e) => {
    setFirstLetter(e.target.value);
    searchCityStrollList(e.target.value);
    console.log("selected", e.target.value);
  };

  return (
    <div className="SearchCity">
      <label>Search by City:</label>
      <input type="text" value={firstLetter} onChange={handleSelect} />
    </div>
  );
}

export default SearchCity;
