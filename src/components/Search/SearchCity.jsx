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
      <div className="flex">
        <label className="text-lg font-semibold mb-2">
        City:</label>
        <input type="text" value={firstLetter} onChange={handleSelect} />
      </div>
      
      
    </div>
  );
}

export default SearchCity;
