import { CgClose } from 'react-icons/cg'
import ModalTab from './ModalTab'

function Modal({ children, isOpen, onClose, tab, handleChangeTab }) {

    if (isOpen) {
        return (
            <div className='bg-gray-600 bg-opacity-80 fixed overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full max-h-full' onClick={onClose}>
                <div className='relative p-4 w-full lg:max-w-[65vw] max-h-full'>
                    <div className='relative bg-white rounded-lg shadow-lg shadow-gray-700' onClick={(e) => e.stopPropagation()}>
                        <div className='flex items-center justify-between px-2 pt-2 rounded-t-lg bg-biscay-700 bg-fg-green-300/90'>
                            <div className='flex flex-row gap-2'>
                                <ModalTab
                                    title='Details'
                                    isActive={tab === 'details'}
                                    handleClick={() => handleChangeTab('details')}
                                />
                                <ModalTab
                                    title='Comments'
                                    isActive={tab === 'comments'}
                                    handleClick={() => handleChangeTab('comments')}
                                />
                            </div>
                            <button onClick={onClose} className='lg:hover:bg-biscay-400 p-1 rounded hover:text-white text-gray-400'>
                                <CgClose size={25} />
                            </button>
                        </div>

                        <div>
                            {children}
                        </div>

                        {/* <div className='flex flex-col gap-2 lg:flex-row lg:items-center p-4 border-t border-gray-300 justify-end'>
                            <button
                                className='bg-gray-300 hover:bg-gray-400 text-gray-500 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                                onClick={onClose}>
                                Close
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal