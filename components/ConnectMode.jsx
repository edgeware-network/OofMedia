import React from "react"

const ConnectMode = () => {
    const [isVideoSelected, setIsVideoSelected] = React.useState(true);
    const [isGenderMale, setisGenderMale] = React.useState(true);


    const handleToggle = () => {
        setIsVideoSelected(!isVideoSelected);
    }
    const handleGenderSelected= () => {
        setisGenderMale(!isGenderMale);
    }

    return (
        <div className="flex outline outline-1 w-full justify-center bg-[#0d7377] rounded-lg p-4">
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
                    <input type="text" id="keywords" placeholder="Enter Keywords" style={{ fontFamily: "Poppins,sans-serif" }} className="mt-1 bg-gray-300 text-sm p-2 text-zinc-900 rounded-md shadow-sm 
                focus:ring-indigo-500 focus:border-indigo-500"></input>
                </div>
                <div className="mt-4 ">
                    <label htmlFor="filter" className="text-lg">Filters: </label>
                    <div className="mt-1 flex">
                        <label htmlFor="filter" className="text-lg mr-8">Gender:</label>
                        <select className="select select-bordered w-40 h-8">
                            <option disabled selected>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div className="flex items-center mt-4">
                    <label htmlFor="toggle2" className="block mr-8 text-lg ">SFW: </label>

                    <span className="text-sm mr-2">Male</span>
                    <label htmlFor="toggle2" className="cursor-pointer">
                        <div className="relative">
                            <input type="checkbox" id="toggle2" className="sr-only" checked={isGenderMale} onChange={handleGenderSelected}></input>
                            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                            <div className={`dot absolute ${isGenderMale ? "left-7" : "left-1"} top-1 bg-white w-6 h-6 rounded-full transition`}></div>
                        </div>
                    </label>
                    <span className="text-sm ml-2">Female</span>
                </div>

                </div>
                <div className="mt-4  ml-8 flex justify-center">
                    <button type="submit" className="py-2 w-20 ext-sm bg-indigo-600 rounded-md hover:bg-indigo-700">Match</button>
                </div>
            </form>
        </div>
    )
}
export default ConnectMode;