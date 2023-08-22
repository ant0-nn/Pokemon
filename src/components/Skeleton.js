const Skeleton = () => {
    return(
        <div className="bg-white p-4 rounded shadow-md transition-transform transform hover:scale-105 hover-shadow-red">
            <div className="animate-pulse w-48 h-48 mx-auto mb-4 bg-gray-300"></div>
            <div className="text-center">
                <div className="animate-pulse w-32 h-6 mb-2 bg-gray-300"></div>
                <div className="animate-pulse w-20 h-4 bg-gray-300"></div>
                <div className="animate-pulse w-20 h-4 mt-1 bg-gray-300"></div>
                <div className="animate-pulse w-24 h-4 mt-1 bg-gray-300"></div>
            </div>
        </div>
    );
}

export default Skeleton;