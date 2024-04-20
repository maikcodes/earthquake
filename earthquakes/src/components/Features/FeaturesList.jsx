import useModal from "@hooks/useModal"
import FeatureCard from "./FeatureCard"
import { useState } from "react"
import { Modal } from "@components/Dialogs"
import FeatureDetails from "./FeatureDetails"
import FeatureComments from "./FeatureComments"
import { Virtuoso } from 'react-virtuoso'

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
        <div className="h-auto">

            <Virtuoso
                className="!h-[50vh] md:!h-[60vh] lg:!h-[70vh] scrollbar-sm"
                data={features}
                itemContent={(_, feature) => (
                    <button
                        className="w-full mb-2"
                        onClick={
                            () => handleOpenModal(
                                featureDetailsModal.handleOpen,
                                feature.id
                            )
                        }
                    >
                        <FeatureCard feature={feature} />
                    </button>
                )}
            />

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