function ModalTab({ title, isActive, handleClick }) {
    return (
        <button
            className={`font-bold px-4 py-2 rounded-t-md ${isActive ? 'bg-white text-fg-green-400' : 'bg-gray-200 text-gray-400 hover:text-fg-green-400'}`}
            onClick={handleClick}
        >
            {title}
        </button>
    )
}
export default ModalTab