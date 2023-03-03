import { useState } from "react";

function FilterCity(props) {
  const { filterCityStrollList } = props;
  const { strolls } = props;
  const [firstLetter, setFirstLetter] = useState("");

  const handleSelect = (e) => {
    setFirstLetter(e.target.value);
    filterCityStrollList(e.target.value);
    console.log("selected", e.target.value);
  };

  return (
    <div className="FilterCity">
      <label>Filter by City:</label>
      <select value={firstLetter} onChange={handleSelect}>
        <option value="All">All</option>
        {strolls.map((stroll) => {
          return <option key={stroll.city} value={stroll.city}>{stroll.city}</option>;
        })}
      </select>
    </div>
  );
}

export default FilterCity;
