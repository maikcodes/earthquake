import useModal from "@hooks/useModal"
import FeatureCard from "./FeatureCard"
import { useState } from "react"
import { Modal } from "@components/Dialogs"
import { FaExternalLinkAlt } from "react-icons/fa"

function FeatureList({ features }) {
    const [feature, setFeature] = useState({})
    const featureDetailsModal = useModal()

    const handleOpenModal = (modalOpenHandler, id) => {
        const detailedFeature = features.find((element) => element.id === id)
        setFeature(detailedFeature)
        modalOpenHandler()
    }

    return (
        <div className="flex flex-col gap-2 pr-1">
            {features?.map((_feature, index) => (
                <button key={index} onClick={() => handleOpenModal(featureDetailsModal.handleOpen, _feature.id)} >
                    <FeatureCard feature={_feature} />
                </button>
            ))
            }

            <Modal
                title='Feature Details'
                actionTitle='Close'
                isOpen={featureDetailsModal.isOpen}
                onClose={featureDetailsModal.handleClose}
            >
                {
                    feature && (
                        <div className='flex flex-col gap-4'>

                            <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
                                <h3 className='font-bold text-xl'>
                                    <a
                                        className="flex flex-row gap-2 items-center underline underline-offset-4"
                                        href={feature?.external_url} target="_blank" rel="noreferrer"
                                    >
                                        <span>{feature.place}</span>
                                        <span className="text-sm">
                                            <FaExternalLinkAlt />
                                        </span>
                                    </a>
                                </h3>
                                <p className="text-gray-500">{feature?.title}</p>
                            </div>

                            <div className='flex flex-col md:grid md:grid-cols-2 gap-2'>
                                <div className="flex flex-row gap-2">
                                    <p className="uppercase font-bold">id</p>
                                    <p>{feature?.id}</p>
                                </div>
                                <div className="flex flex-row gap-2">
                                    <p className="uppercase font-bold">usgs id</p>
                                    <p>{feature?.external_id}</p>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex flex-row gap-2">
                                        <p className="capitalize font-bold">magnitude</p>
                                        <p>{feature?.magnitude}</p>
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <p className="capitalize font-bold">magnitude type</p>
                                        <p>{feature?.mag_type}</p>
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <p className="capitalize font-bold">longitude</p>
                                        <p>{feature?.longitude}</p>
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <p className="capitalize font-bold">latitude</p>
                                        <p>{feature?.latitude}</p>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <div className="flex flex-row gap-2">
                                        <p className="capitalize font-bold">type</p>
                                        <p>{feature?.type}</p>
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <p className="capitalize font-bold">date</p>
                                        <p>{feature?.time} UTC</p>
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        <p className="capitalize font-bold">tsunami</p>
                                        <p className="uppercase">{feature?.tsunami ? 'Yes' : 'No'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </Modal>
        </div >
    )
}
export default FeatureList