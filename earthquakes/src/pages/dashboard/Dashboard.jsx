import { FeaturesList } from "@components/Features"
import { Map } from "@components/Map"
import Filters from "./Filters"
import { PaginationBar } from "@components/Pagination";
import usePagination from "@hooks/usePagination";
import useFeatures from "@hooks/useFeatures";
import { useState } from "react";
import { FallbackText } from "@components/Texts";
import { FeaturesListSkeleton, FiltersSkeleton, MapSkeleton, PaginationBarSkeleton } from "@components/skeletons";

function Dashboard() {
  const [filters, setFilters] = useState('')
  const { page, limit, handleLimitChange, handlePageChange } = usePagination()
  const { data, error, loading } = useFeatures(page, limit, filters)
  const features = data?.data

  const totalResults = data?.pagination?.total
  const totalPages = Math.ceil(totalResults / limit)

  const handleFiltersChange = (filters) => {
    setFilters(filters)
  }

  return (
    <section className="flex flex-col w-screen h-auto md:h-screen p-2 md:p-3 lg:p-5 bg-neutral-100 gap-4">
      <div className="flex flex-col-reverse md:flex-row md:h-full gap-4">
        
        <div className="w-full md:w-[35vw] flex flex-col gap-2">

          {loading && <FiltersSkeleton />}
          {!error && !loading && <Filters handleFiltersChange={handleFiltersChange} />}

          <div className="h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-y-hidden">
            {
              error && <div className="bg-gray-200 flex flex-row h-[90vh] min-h-max w-full items-center justify-center">
                <FallbackText text='There was an error loading features' />
              </div>
            }

            {loading && <FeaturesListSkeleton />}
            {!error && !loading && <FeaturesList features={features} />}
          </div>

          {loading && <PaginationBarSkeleton />}
          {
            !loading && <PaginationBar
              paginationObject={
                {
                  page,
                  limit,
                  handleLimitChange,
                  handlePageChange,
                  totalPages,
                  results: features?.length,
                  totalResults
                }
              }
            />
          }

        </div>

        <div className="w-full md:w-[70vw] overflow-hidden h-[50vh] md:h-auto rounded-md shadow-md shadow-gray-400">
          {
            error && <div className="bg-gray-200 flex flex-row h-[90vh] min-h-max w-full items-center justify-center">
              <FallbackText text='There was an error loading the map' />
            </div>
          }
          {loading && <MapSkeleton />}
          {!error && !loading && <Map features={features} />}
        </div>
      
      </div>
    </section>
  )
}
export default Dashboard