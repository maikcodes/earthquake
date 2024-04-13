function PrimaryButton({ text, handleClick }) {
    return (
        <button
            className="bg-fg-green-400 hover:bg-fg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:cursor-pointer"
            onClick={handleClick}
        >
            {text}
        </button>
    )
}
export default PrimaryButton