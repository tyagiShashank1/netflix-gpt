import { useDispatch, useSelector } from "react-redux";
import lang from "../Utils/languageConstants";
import { useEffect, useRef, useState } from "react";
import genAI from "../Utils/gemini";
import { API_OPTIONS } from "../Utils/constants";
import { addGeminiSearchMovies } from "../Utils/moviesSlice";

const GptSearchBar = () => {

    const searchText = useRef(null);
    const language = useSelector(function (appStore) {
        return appStore.config.preferredLanguage;
    })
    const dispatch = useDispatch();

    //handleGptSearchClick
    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);
        //Make an API Call to Google Gemini and get Movie Results

        const geminiQuery = "Act as a Movie Recommendation system and suggest some movies for the query" + searchText.current.value + ". only give me name of 5 movies, comma separated like the example given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya. Don;t give any messaage before like Here are 5 funny retro Indian movies , just provide thge movie names separated by comas, thats it";
        const geminiResults = await genAI.models.generateContent({
            model: 'gemini-2.0-flash-001',
            contents: geminiQuery,
        });

        console.log(geminiResults.text);
        const moviesArray = geminiResults.text.split(',').map(movie => movie.trim());
        const promiseArray = moviesArray.map((item) => fetchGeminiMovieResultsFromTMDB(item));
        //[Promise, Promise, Promise, Promise, Promise]

        const tmdbResults = await Promise.all(promiseArray);
        dispatch(addGeminiSearchMovies({movieNames:moviesArray, movieResults:tmdbResults}));
        console.log(tmdbResults);


    }

    //fetchGeminiMovieResultsFromTMDB
    const fetchGeminiMovieResultsFromTMDB = async (movie) => {

        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
        const json = await data.json();
        return json.results;

    }

    return (

        <div className="pt-[35%] md:pt-[10%] flex justify-center ">
            <form onSubmit={(e) => { e.preventDefault() }} className="w-auto md:w-1/2 bg-black grid grid-cols-12" action="">
                <input type="text" ref={searchText} className="p-4 m-4 col-span-9" placeholder={lang[language].gptSearchPlaceholder} />
                <button className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg" onClick={() => { handleGptSearchClick() }}>{lang[language].search}</button>
            </form>
        </div>
    )
}
export default GptSearchBar;