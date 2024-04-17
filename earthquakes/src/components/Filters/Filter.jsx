import { IoFilter } from "react-icons/io5";

function Filter({ filters, isActive, handleClick, handleApplyFilters, handleFilterChange }) {


    return (
        <>
            <button
                className="max-w-min flex flex-row items-center gap-1 py-2 px-4  rounded-md shadow-md shadow-black/10 border-2 border-gray-100 bg-gray-50 lg:hover:border-fg-green-400"
                onClick={handleClick}
            >
                <IoFilter className="text-fg-green-400" />
                <p className="text-[1rem] font-semibold">Filters</p>
            </button>
            <div className={` ${isActive ? 'visible' : 'invisible'} position absolute translate-y-11 rounded-md shadow-lg shadow-black/30 flex flex-col gap-2 border-gray-200/50 border-2 bg-gray-100 px-4 py-2 w-56`}>
                <h4>Magnitude types</h4>
                <div className="grid grid-cols-2">
                    {
                        filters?.map(filter => (
                            <div key={filter.id} className="flex flex-row items-center gap-2">
                                {
                                    filter.isChecked ?
                                        <input type="checkbox" value={filter.value} checked onChange={handleFilterChange} />
                                        :
                                        <input type="checkbox" value={filter.value} onChange={handleFilterChange} />
                                }
                                <span>{filter.name}</span>
                            </div>
                        ))
                    }
                </div>
                <form>
                    <input type="submit" value='Apply filters' className='w-full bg-fg-green-400 hover:bg-fg-green-500 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline hover:cursor-pointer' onClick={handleApplyFilters} />
                </form>
            </div>
        </>
    )
}
export default Filter;