import { MetricCard } from "@components/Cards"
import { useEffect } from "react"
import { RiEarthquakeFill } from "react-icons/ri"

function Metrics() {
  useEffect(() => {
    const mockDelay = setTimeout(() => {
      console.log("Metrics loaded")
    }, 0)

    return () => clearTimeout(mockDelay)
  }, [])
  
  return (
    <>
      <div className="w-full md:w-4/12">
        <MetricCard
          icon={<RiEarthquakeFill />}
          value="123456"
          title="tile"
        />
      </div>
      <div className="w-full md:w-4/12">
        <MetricCard
          icon={<RiEarthquakeFill />}
          value="123456"
          title="tile"
        />
      </div>
      <div className="w-full md:w-2/12">
        <MetricCard
          icon={<RiEarthquakeFill />}
          value="123456"
          title="tile"
        />
      </div>
      <div className="w-full md:w-2/12">
        <MetricCard
          icon={<RiEarthquakeFill />}
          value="123456"
          title="tile"
        />
      </div>
    </>
  )
}
export default Metrics