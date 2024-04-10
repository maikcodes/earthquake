import { Earthquakes } from "../../services/Earthquakes"
import { useState } from "react"
import { useEffect } from "react"
import { FeatureRow } from "."

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
    <>
      <h1>Earthquakes</h1>

      <div className="shadow-md rounded-md h-svh overflow-hidden">
        <table className="text-sm text-left rtl:text-right overflow-y-scroll">
          <thead className="text-xs uppercase">
            <tr>
              <th className="px-3 py-2 md:px-6 md:py-3">Magnitude</th>
              <th className="px-3 py-2 md:px-6 md:py-3">Place</th>
              {/* <th className="px-3 py-2 md:px-6 md:py-3">Date & Time</th> */}
            </tr>
          </thead>
          <tbody>
            {earthquakes?.data?.map((feature, index) => (
              <FeatureRow key={index} feature={feature} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
export default FeatureList