import { useState } from "react";

function FilterCountry(props) {
  const { filterCountryStrollList } = props;
  const { strolls } = props;
  const [firstLetter, setFirstLetter] = useState("All");

  const handleSelect = (e) => {
    setFirstLetter(e.target.value);
    filterCountryStrollList(e.target.value);
    console.log("selected", e.target.value);
  };

  return (
    <div className="FilterCountry">
      <label className="text-lg font-semibold mb-2">Filter by Country:</label>
      <select value={firstLetter} onChange={handleSelect}>
        <option key="All" value="All">
          All
        </option>
        {strolls.map((stroll) => {
          return (
            <option key={stroll._id} value={stroll.country}>
              {stroll.country}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FilterCountry;

