
const SearchBar = ({ handleQuery }) => {

    return (
        <div className="SearchBar">

            <label htmlFor='search'>Search</label>
            <input type="text" id="search" onChange={handleQuery} placeholder='keyword' />


        </div>
    );
}

export default SearchBar;