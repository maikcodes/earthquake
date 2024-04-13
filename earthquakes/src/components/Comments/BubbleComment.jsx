function BubbleComment({ text, time }) {
    return (
        <div className="px-4 py-2 bg-gray-200 rounded-md flex flex-col">
            <p>{text}</p>
            <p className="text-right italic text-gray-400 text-sm">{time}</p>
        </div>
    )
}
export default BubbleComment