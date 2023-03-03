import { useState } from "react";


function SearchCountry(props) {
  const { searchCountryStrollList } = props;
  const [firstLetter, setFirstLetter] = useState("");

  const handleSelect = (e) => {
    setFirstLetter(e.target.value);
    searchCountryStrollList(e.target.value);
    console.log("selected", e.target.value);
  };

  return (
    <div className="SearchCountry flex">
      <label className="text-lg font-semibold mb-2">Country:</label>
      <input type="text" value={firstLetter} onChange={handleSelect} />
    </div>
  );
}

export default SearchCountry;

