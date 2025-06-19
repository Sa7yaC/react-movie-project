import MovieCard from "../components/MovieCard"
import { useState } from "react";

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        {id : 1, title: "John wick" , release_date : "2020"},
        {id : 2, title: "2012:End of world" , release_date : "2012"},
        {id : 3, title: "Lord of the rings" , release_date : "1900"},

    ];
    const handleSearch = (e)=>{
        e.preventDefault();
    };

    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type = "text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}></input>
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie)=>
                movie.title.toLowerCase().startsWith(searchQuery) && 
                (<MovieCard movie={movie} key = {movie.id}/>)
            
                )}
        </div>
    </div>
    );
}

export default Home