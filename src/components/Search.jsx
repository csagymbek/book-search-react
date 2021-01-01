import "../styles/Search.css";
export default function Search({ handleSearch, handleSearchBook, handleSort }) {
  return (
    <div className="search__area">
      <form onSubmit={handleSearchBook}>
        <input type="text" onChange={handleSearch} placeholder="Search" />
        <select name="" id="" defaultValue="Sort" onChange={handleSort}>
          <option value="Sort" disabled>
            Sort
          </option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
