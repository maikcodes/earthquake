function Card({ children }) {
    return (
        <article className="hover:cursor-default py-2 px-4 rounded-md shadow-md shadow-gray-400 flex flex-col gap-1 border-gray-200/50 border-2 bg-gray-50" >
            {children}
        </article>
    )
}
export default Card