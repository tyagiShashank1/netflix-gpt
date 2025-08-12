const VideoTitle = ({ original_title, overview }) => {
    return (
        <div className=" w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-2xl md:text-6xl font-bold">{original_title}</h1>
            <p className=" hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
            <div className="my-2 md:m-0">
                <button className="my-2 bg-white text-black py-2 md:py-4 px-6 md:px-10 text-xl bg-opacity-50 rounded-lg hover:opacity-50">
                   ▶ Play
                </button>
                <button className="mx-2 my-2 bg-gray-500 text-white  py-2 md:py-4 px-6 md:px-10 text-xl bg-opacity-50 rounded-lg hover:opacity-50">
                   🛈 More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle;