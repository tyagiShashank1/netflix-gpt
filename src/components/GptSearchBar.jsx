import { useSelector } from "react-redux";
import lang from "../Utils/languageConstants";

const GptSearchBar = () => {

    const language = useSelector(function(appStore){
        return appStore.config.preferredLanguage;
    })
    return (

        <div className="pt-[10%] flex justify-center ">
            <form className="w-1/2 bg-black grid grid-cols-12" action="">
                <input type="text" className="p-4 m-4 col-span-9" placeholder={lang[language].gptSearchPlaceholder} />
                <button className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg">{lang[language].search}</button>
            </form>
        </div>
    )
}
export default GptSearchBar;