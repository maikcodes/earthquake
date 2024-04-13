import { FeaturesList } from "@components/Features"
import { Map } from "@components/Map"
// import Metrics from "./Metrics"
import Filters from "./Filters"
import { PaginationBar } from "@components/Pagination";
import usePagination from "@hooks/usePagination";
import useFeatures from "@hooks/useFeatures";
import { useState } from "react";
import { FallbackText } from "@components/Texts";

function Dashboard() {
  const [filters, setFilters] = useState('')
  const { page, limit, handleLimitChange, handlePageChange } = usePagination()
  const { data, error, loading } = useFeatures(page, limit, filters)

  const totalResults = data?.pagination?.total
  const totalPages = Math.ceil(totalResults / limit)

  const handleFiltersChange = (filters) => {
    setFilters(filters)
  }

  return (
    <section className="flex flex-col w-screen h-screen p-2 md:p-3 lg:p-5 bg-slate-300/30 gap-4">
      {/* <div className="flex flex-col md:flex-row gap-2 md:h-[20vh]">
        <Metrics />
      </div> */}

      <div className="flex flex-col md:flex-row md:h-full gap-x-4">
        <div className="w-full md:w-[35vw] flex flex-col gap-2">
          <Filters handleFiltersChange={handleFiltersChange}/>
          <div className="overflow-y-scroll scrollbar-sm">
            {loading && <p>Loading...</p>}
            {error && <FallbackText text='There was an error loading features' />}
            <FeaturesList features={data?.data} />
          </div>

          <PaginationBar
            paginationObject={
              { page, limit, handleLimitChange, handlePageChange, totalPages, results: data?.data?.length, totalResults }
            }
          />

        </div>

        <div className="w-full md:w-[70vw] rounded-lg overflow-hidden">
          <Map features={data?.data} />
        </div>
      </div>
    </section>
  )
}
export default Dashboard