import "../styles/Search.css";
export default function Search({ handleSearch, handleSearchBook }) {
  return (
    <div className="search__area">
      <form onSubmit={handleSearchBook}>
        <input type="text" onChange={handleSearch} placeholder="Search" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
