import { FeatureList } from "@components/Features"
import { Map } from "@components/Map"
import Metrics from "./Metrics"
import Filters from "./Filters"
import { PaginationBar } from "@components/Pagination";
import usePagination from "@hooks/usePagination";
import useFeatures from "@hooks/useFeatures";
import { Suspense } from "react";

function Dashboard() {
  const { page, limit, handleLimitChange, handlePageChange } = usePagination(1, 100)
  const { data, error, loading } = useFeatures(page, limit)

  const totalResults = data?.pagination?.total
  const totalPages = Math.ceil(totalResults / limit)

  return (
    <section className="flex flex-col w-screen h-screen p-5 bg-slate-300/30 gap-4">
      <div className="flex flex-col md:flex-row gap-2 md:h-[20vh]">
        <Metrics />
      </div>

      <div className="flex flex-col md:flex-row md:h-[80vh] gap-x-4">
        <div className="w-full md:w-[35vw] flex flex-col gap-2">
          <Filters />
          <div className="overflow-y-scroll scrollbar-sm">
            <Suspense fallback={<div>Loading...</div>}>
              <FeatureList features={data?.data} />
            </Suspense>
          </div>
          <PaginationBar
            paginationObject={
              { page, limit, handleLimitChange, handlePageChange, totalPages, results: limit, totalResults }
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