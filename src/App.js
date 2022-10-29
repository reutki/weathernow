import "./App.css";
import SearchBar from "./components/SearchBar";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };
  return (
    <div className="App_container">
      <SearchBar onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
