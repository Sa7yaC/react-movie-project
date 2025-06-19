import MovieCard from "../components/MovieCard"

function Home(){
    const movies = [
        {id : 1, title: "John wick" , release_date : "2020"},
        {id : 1, title: "2012:End of world" , release_date : "2012"},
        {id : 1, title: "Lord of the rings" , release_date : "1900"},

    ];
    const handleSearch=()=>{

    };

    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type = "text" placeholder="Search for movies..." className="search-input"></input>
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map((movie)=>(
                <MovieCard movie={movie} key = {movie.id}/>
            ))}
        </div>
    </div>
    );
}

export default Home