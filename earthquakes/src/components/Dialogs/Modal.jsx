import { CgClose } from 'react-icons/cg'

function Modal({ title, actionTitle, isOpen, onClose, action, children }) {
    if (isOpen) {
        return (
            <div className='bg-gray-600 bg-opacity-80 fixed overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full max-h-full' onClick={onClose}>
                <div className='relative p-4 w-full lg:max-w-[65vw] max-h-full'>
                    <div className='relative bg-white rounded-lg shadow-lg shadow-gray-700' onClick={(e) => e.stopPropagation()}>

                        <div className='flex items-center justify-between px-4 py-2 rounded-t-lg border-b border-gray-300 bg-biscay-700 bg-fg-green-100 text-fg-green-400'>
                            <h3 className='font-bold text-xl'>{title}</h3>
                            <button onClick={onClose} className='lg:hover:bg-biscay-400 p-1 rounded'>
                                <CgClose size={25} />
                            </button>
                        </div>

                        <div className='p-4 scrollbar-sm lg:overflow-y-scroll lg:max-h-[60vh]'>
                            {children}
                        </div>

                        <div className='flex flex-col gap-2 lg:flex-row lg:items-center p-4 border-t border-gray-300 justify-end'>
                            <button
                                className='bg-fg-green-400 hover:bg-fg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                                onClick={onClose}>
                                {actionTitle}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal