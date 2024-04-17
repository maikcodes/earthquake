import usePaginationIndices from '@hooks/usePaginationIndices'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function PaginationBar({ paginationObject }) {
    const { page, totalPages, results, totalResults, handlePageChange, limit, handleLimitChange } = paginationObject
    const { paginationIndices, error } = usePaginationIndices({ page, totalPages })

    const generateStartResults = () => {
        if (page < totalPages) return (results * page) - results + 1
        return totalResults - results + 1
    }

    const generateEndResults = () => {
        if (page < totalPages) return results * page
        return totalResults
    }

    const _handleLimitChange = (event) => {
        const _limit = event.target.value
        if (_limit > totalPages) {
            handlePageChange(1)
            handleLimitChange(_limit)
        } else {
            const lastPage = Math.ceil(totalResults / _limit)
            if (page > lastPage) handlePageChange(lastPage)
            handleLimitChange(_limit)
        }
    }

    const handleNextPage = () => {
        if (page !== totalPages) handlePageChange(page + 1)
    }

    const handlePreviousPage = () => {
        if (page !== 1) handlePageChange(page - 1)
    }

    if (error) return null

    return (
        <div className='flex flex-col items-center justify-center md:justify-between gap-y-2'>
            <div className={`w-full md:w-auto flex flex-wrap items-center gap-2`}>

                <button
                    className={`px-2 h-8 ${page === 1 ? 'lg:hover:cursor-not-allowed' : 'lg:hover:cursor-pointer lg:hover:bg-fg-green-300'} rounded-md shadow-md shadow-black/10 bg-gray-50 flex items-center text-gray-600`}
                    onClick={handlePreviousPage}
                >
                    <IoIosArrowBack />
                </button>

                {
                    paginationIndices.map((pageIndex, index) => (
                        pageIndex === '...'
                            ? <div key={index} className='px-2 h-8 lg:hover:cursor-not-allowed flex items-center justify-center'><p>&hellip;</p></div>
                            : (
                                <button
                                    key={index}
                                    onClick={() => handlePageChange(pageIndex)}
                                    className={`px-2 h-8 ${pageIndex === page ? 'bg-fg-green-200' : 'bg-gray-50'} lg:hover:bg-fg-green-300 flex items-center rounded-md shadow-md shadow-black/10 text-gray-600 justify-center`}
                                >
                                    {pageIndex}
                                </button>
                            )
                    ))
                }

                <button
                    className={`px-2 h-8 ${page === totalPages ? 'lg:hover:cursor-not-allowed' : 'lg:hover:cursor-pointer lg:hover:bg-fg-green-300'} rounded-md shadow-md shadow-black/10 bg-gray-50 flex items-center text-gray-600`}
                    onClick={handleNextPage}
                >
                    <IoIosArrowForward />
                </button>

            </div>

            <div className='flex flex-col items-center gap-2'>

                <select
                    id='results'
                    className='text-sm bg-gray-50 mx-2 rounded-lg px-4 py-1 md:h-full lg:h-auto shadow-md shadow-black/10 w-full'
                    defaultValue={limit}
                    onChange={_handleLimitChange}
                >
                    <option className='bg-white' value='10'>10</option>
                    <option className='bg-white' value='15'>15</option>
                    <option className='bg-white' value='20'>20</option>
                    <option className='bg-white' value='100'>100</option>
                    <option className='bg-white' value='250'>250</option>
                    <option className='bg-white' value='500'>500</option>
                </select>

                <div className='flex flex-row justify-center text-gray-600'>
                    <p className='flex md:flex-col lg:flex-row gap-x-2'>
                        <span className='flex flex-row gap-2 items-center justify-center'>
                            <span className='text-sm'>Showing</span>
                            <span className='text-sm font-bold'>{results}</span>
                            <span className='text-sm'>({generateStartResults()} - {generateEndResults()})</span>
                        </span>
                        <span className='flex flex-row gap-2 items-center justify-center'>
                            <span className='text-sm'>of</span>
                            <span className='text-sm font-bold'>{totalResults}</span>
                            <span className='text-sm'>results</span>
                        </span>
                    </p>
                </div>

            </div>
        </div>
    )
}

export default PaginationBar