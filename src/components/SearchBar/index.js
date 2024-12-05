export default function SearchBar(){
    return(
        <div className="search-bar-container">
            <input type="text" placeholder="Search" className="search-bar" />
            <button className="search-button">Search</button>
        </div>
    );
}