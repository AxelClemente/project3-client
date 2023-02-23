// src/components/Spinner.js

const spinner =
  "https://tenor.com/en-GB/view/rainbow-spinner-loading-gif-20872339";

function Spinner() {
  return (
    <div className="Spinner">
      <img src={spinner} alt="loading spinner" />
    </div>
  );
}

export default Spinner;
