import useModal from "@hooks/useModal"
import { useState } from "react"
import { Modal } from "@components/Dialogs"
import FeatureDetails from "./FeatureDetails"
import FeatureComments from "./FeatureComments"

function FeatureModal({ features, featureId }) {
    const [tab, setTab] = useState('details')
    const featureDetailsModal = useModal()
    const feature = features.find((element) => element.id === featureId)

    const handleChangeTab = (tab) => {
        setTab(tab)
    }

    return (
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
    )
}

export default FeatureModal