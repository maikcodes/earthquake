import { FaExternalLinkAlt } from "react-icons/fa";

function Feature({ feature }) {
  const magnitude = Number(feature?.attributes?.magnitude).toFixed(2)

  return (
    <tr className="border-b hover:bg-gray-100">
      <td className="px-3 py-2 md:px-6 md:py-3 flex flex-col md:flex-row md:gap-2 items-center">
        <span className="text-base md:text-lg font-bold">{magnitude}</span>
        <span className="text-sm md:text-base text-gray-500">({feature?.attributes?.mag_type})</span>
      </td>
      <td className="px-3 py-2 md:px-6 md:py-3">
        <a
          className="flex text-sm md:inline-flex md:flex-wrap md:text-base flex-row items-center gap-2 underline underline-offset-4"
          href={feature?.links?.external_url} target="_blank" rel="noreferrer"
        >
          <span>{feature?.attributes?.place}</span>
          <span className="text-xs"><FaExternalLinkAlt /></span>
        </a>
      </td>
      {/* <td className="px-3 py-2 md:px-6 md:py-3 flex items-center">{feature?.attributes?.time} UTC</td> */}
    </tr>
  )
}
export default Feature