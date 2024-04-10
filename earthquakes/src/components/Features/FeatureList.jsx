import { Earthquakes } from "../../services/Earthquakes"
import { useState } from "react"
import { useEffect } from "react"
import FeatureCard from "./FeatureCard"

function FeatureList() {
    const [earthquakes, setEarthquakes] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const response = await Earthquakes.index()
            setEarthquakes(response)
        }

        fetchData()
    }, [])
    return (
        <div className="flex flex-col gap-2 pr-1">
            {earthquakes?.data?.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
            ))}
        </div>
    )
}
export default FeatureList