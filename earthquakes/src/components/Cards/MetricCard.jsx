import Card from "./Card"

function MetricCard({ icon, value, title }) {
    return (
        <Card>
            <header className="flex flex-row">
                <div className="flex flex-col items-center justify-center w-12 h-12 bg-fg-green-100 rounded-full text-fg-green-400">
                    {icon}
                </div>
                <div className="flex flex-col ml-2">
                    <p className="text-[1.5rem] font-semibold">{value}</p>
                    <h2 className="text-[0.7rem] uppercase text-gray-400 font-semibold">{title}</h2>
                </div>
            </header>
        </Card>
    )
}
export default MetricCard