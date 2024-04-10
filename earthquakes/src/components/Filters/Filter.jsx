import { IoFilter } from "react-icons/io5";

function Filter({ children }) {
    return (
        <div className="flex flex-row items-center gap-1 bg-gray-50 max-w-min py-2 px-4  rounded-lg shadow-md shadow-black/10">
            <IoFilter className="text-fg-green-400" />
            <p className="text-[1rem] font-semibold">Filter</p>
            {children}
        </div>
    )
}
export default Filter