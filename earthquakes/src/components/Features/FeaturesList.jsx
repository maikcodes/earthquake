import useModal from "@hooks/useModal"
import FeatureCard from "./FeatureCard"
import { useState } from "react"
import { Modal } from "@components/Dialogs"
import FeatureDetails from "./FeatureDetails"
import FeatureComments from "./FeatureComments"

function FeaturesList({ features }) {
    const [feature, setFeature] = useState({})
    const [tab, setTab] = useState('details')
    const featureDetailsModal = useModal()

    const handleOpenModal = (modalOpenHandler, id) => {
        const detailedFeature = features.find((element) => element.id === id)
        setFeature(detailedFeature)
        modalOpenHandler()
        setTab('details')
    }

    const handleChangeTab = (tab) => {
        setTab(tab)
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
                isOpen={featureDetailsModal.isOpen}
                onClose={featureDetailsModal.handleClose}
                tab={tab}
                handleChangeTab={handleChangeTab}
            >
                {
                    tab === 'details' ?
                        <FeatureDetails feature={feature} />
                        : <FeatureComments featureId={feature.id} />
                }
            </Modal>
        </div >
    )
}
export default FeaturesList