import { MdLocationOn } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { GiWaveCrest } from "react-icons/gi";
import { TbWorldLongitude, TbWorldLatitude } from "react-icons/tb";


function FeatureCard({ feature }) {
    const magnitude = Number(feature?.magnitude).toFixed(2)
    const longitude = feature?.longitude
    const latitude = feature?.latitude

    return (
        <article className="hover:cursor-default py-2 px-4 rounded-md shadow-md shadow-black/10 flex flex-col gap-1 border-gray-200/50 border-2 bg-gray-50 lg:hover:border-fg-green-400" >
            <section className="flex flex-row justify-between">
                <div className="flex md:flex-col flex-row lg:flex-row gap-2 text-gray-400 text-sm">
                    <div className="flex flex-row items-center gap-1">
                        <span>
                            <TbWorldLongitude />
                        </span>
                        <p>{longitude}</p>
                    </div>

                    <div className="flex flex-row items-center gap-1">
                        <span>
                            <TbWorldLatitude />
                        </span>
                        <p>{latitude}</p>
                    </div>
                    {/* {feature?.id} */}
                </div>

                <div className="flex flex-col items-center text-gray-600">
                    {
                        feature?.tsunami ?
                            <p className="text-indigo-500 flex flex-row items-center">
                                <GiWaveCrest />
                                <span>Tsunami</span>
                            </p>
                            : null
                    }
                </div>
            </section>

            <header className="flex flex-row md:flex-col lg:flex-row gap-2">
                <div className="flex flex-row gap-4">
                    <div className="flex flex-row items-center gap-1">
                        <span className="text-base md:text-2xl font-bold">{magnitude}</span>
                        <span className="text-sm md:text-base text-gray-500">({feature?.mag_type})</span>
                    </div>
                </div>

                <div className="flex flex-row items-center">
                    <span className="text-gray-600">
                        <MdLocationOn />
                    </span>
                    <span className="font-bold">{feature?.place}</span>
                </div>
            </header>

            <footer className="flex flex-row gap-4 justify-between items-center">

                <div className="flex flex-row items-center gap-2 text-gray-400">
                    <MdOutlineAccessTime />
                    <span>{feature?.time} UTC</span>
                </div>

                <a
                    className="flex flex-row gap-2 items-center text-indigo-600 underline underline-offset-3 text-sm"
                    href={feature?.external_url} target="_blank" rel="noreferrer"
                >
                    <span>USGS</span>
                    <span className="text-sm">
                        <FaExternalLinkAlt />
                    </span>
                </a>
            </footer>
        </article>
    )
}
export default FeatureCard