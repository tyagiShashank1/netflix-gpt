const Shimmer = () => {
    return (

        <div className="grid grid-cols-4 gap-4 p-4">
            {Array(16).fill("").map((_, i) => (
                <div
                    key={i}
                    className="h-48 bg-gray-300 animate-pulse rounded-lg"
                ></div>
            ))}
        </div>

    )
}

export default Shimmer;