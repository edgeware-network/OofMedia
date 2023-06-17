import React from "react"

const ConnectMode = () => {
    const [isVideoSelected, setIsVideoSelected] = React.useState(true);
    const options = ["Gender", "SFW"];

    const handleToggle = () => {
        setIsVideoSelected(!isVideoSelected);
    }
    return (
        <div className="flex justify-center bg-green-700 rounded-lg">
            <form className="mt-2 mb-2">
                <div className="flex items-center">
                    <label htmlFor="toggle" className="block mr-2 text-lg ">Toggle Name: </label>

                    <span className="text-sm mr-2">Video</span>
                    <label htmlFor="toggle" className="cursor-pointer">
                        <div className="relative">
                            <input type="checkbox" id="toggle" className="sr-only" checked={isVideoSelected} onChange={handleToggle}></input>
                            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                            <div className={`dot absolute ${isVideoSelected ? "left-7" : "left-1"} top-1 bg-white w-6 h-6 rounded-full transition`}></div>
                        </div>
                    </label>
                    <span className="text-sm ml-2">Text</span>
                </div>
                <div className="mt-4">
                    <label htmlFor="keywords" className="text-lg  mr-2">Keywords:</label>
                    <input type="text" id="keywords" placeholder="Enter Keywords"  style={{fontFamily:"Poppins,sans-serif"}} className="mt-1 bg-gray-300 text-sm text-zinc-900 rounded-md shadow-sm 
                focus:ring-indigo-500 focus:border-indigo-500"></input>
                </div>
                <div className="mt-4  flex">
                <label htmlFor="keywords" className="text-lg  mr-2">Filters:</label>
                <select id="filter" multiple className="mt-1 w-full bg-gray-300 rounded-md text-sm shadow-sm text-zinc-900">{options.map((option)=>(<option key={option}>{option}</option>))}</select>
                </div>
                <div className="mt-4  ml-8 flex justify-center">
                    <button type="submit" className="py-2 w-20 ext-sm bg-indigo-600 rounded-md hover:bg-indigo-700">Match</button>
                </div>
            </form>
        </div>
    )
}
export default ConnectMode;