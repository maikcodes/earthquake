import { FeatureList } from "@components/Features"
import { Map } from "@components/Map"
import Metrics from "./Metrics"
import Filters from "./Filters"
import { PaginationBar } from "@components/Pagination";
import usePagination from "@hooks/usePagination";

function Dashboard() {
  const { page, limit, handleLimitChange, handlePageChange } = usePagination()
  return (
    <section className="flex flex-col w-screen h-screen p-5 bg-slate-300/30 gap-4">
      <div className="flex flex-col md:flex-row gap-2 md:h-[20vh]">
        <Metrics />
      </div>

      <div className="flex flex-col md:flex-row md:h-[80vh] gap-x-4">
        <div className="w-full md:w-[35vw] flex flex-col gap-2">
          <Filters />
          <div className="overflow-y-scroll scrollbar-sm">
            <FeatureList />
          </div>
          <PaginationBar
            paginationObject={
              { page, limit, handleLimitChange, handlePageChange, totalPages: 10, results: 10, totalResults: 100}
            }
          />
        </div>

        <div className="w-full md:w-[70vw] rounded-lg overflow-hidden">
          <Map />
        </div>
      </div>
    </section>
  )
}
export default Dashboard