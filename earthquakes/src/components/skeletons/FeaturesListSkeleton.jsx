export function FiltersSkeleton() {
  return (
    <div className="max-w-min flex flex-row items-center py-2 px-4 rounded-md shadow-md shadow-black/10 bg-gray-300 animate-pulse">
      <div className="bg-gray-400/60 animate-pulse h-6 w-20 rounded-md"></div>
    </div>
  )
}

export function FeatureCardSkeleton() {
  return (
    <div className="py-2 px-4 rounded-md shadow-md shadow-black/10 flex flex-col gap-2 border-gray-200/50 border-2 bg-gray-300 animate-pulse" >

      <div className="flex flex-row md:flex-col lg:flex-row justify-between gap-2">

        <div className="flex flex-row md:flex-col lg:flex-row gap-2">
          
          <div className="flex flex-row md:justify-center">
            <div className="bg-gray-400/60 rounded-md animate-pulse h-5 w-20 md:w-28"></div>
          </div>

          <div className="flex flex-row md:justify-center">
            <div className="bg-gray-400/60 rounded-md animate-pulse h-5 w-20 md:w-28"></div>
          </div>

        </div>

        <div className="flex flex-row md:justify-center">
          <div className="bg-gray-400/60 rounded-md animate-pulse h-5 w-16 md:w-24"></div>
        </div>

      </div>

      <div className="flex flex-row md:flex-col lg:flex-row gap-2">

        <div className="flex flex-row gap-4">
          <div className="flex flex-row items-center gap-1 md:justify-center w-full">
            <div className="bg-gray-400/60 rounded-md animate-pulse h-7 w-16"></div>
            <div className="bg-gray-400/60 rounded-md animate-pulse h-5 w-10"></div>
          </div>
        </div>

        <div className="flex flex-row items-center w-full">
          <div className="bg-gray-400/60 rounded-md animate-pulse h-5 w-full"></div>
        </div>

      </div>

      <div className="flex flex-row gap-4 justify-between items-center">

        <div className="flex flex-row items-center gap-2">
          <div className="bg-gray-400/60 rounded-md animate-pulse h-5 w-28"></div>
        </div>

        <div className="flex flex-row gap-2 items-center">
          <div className="bg-gray-400/60 rounded-md animate-pulse h-5 w-20"></div>
        </div>

      </div>

    </div>
  )
}

export function FeaturesListSkeleton() {
  return (
    <div className="flex flex-col gap-2 pr-1">
      <FeatureCardSkeleton />
      <FeatureCardSkeleton />
      <FeatureCardSkeleton />
      <FeatureCardSkeleton />
    </div>
  )
}


function PaginationButtonSkeleton() {
  return (
    <div className="h-7 w-8 bg-gray bg-gray-400/60 animate-pulse rounded-md shadow-md shadow-black/10 "></div>
  )
}

export function PaginationBarSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center md:justify-between gap-y-2">

      <div className="w-full md:w-auto flex flex-wrap items-center gap-2">
        <PaginationButtonSkeleton />
        <PaginationButtonSkeleton />
        <PaginationButtonSkeleton />
        <PaginationButtonSkeleton />
        <PaginationButtonSkeleton />

        <PaginationButtonSkeleton />
        <PaginationButtonSkeleton />
        <PaginationButtonSkeleton />
        <PaginationButtonSkeleton />
        <PaginationButtonSkeleton />

        <PaginationButtonSkeleton />
      </div>

      <div className="flex flex-col items-center w-[80%] gap-2">
        <div className="bg-gray-400/60 animate-pulse h-5 rounded-md w-full"></div>
        <div className="bg-gray-400/60 animate-pulse h-5 rounded-md w-full"></div>
      </div>
    </div>
  )
}

export function MapSkeleton() {
  return (
    <div className="w-full h-full bg-gray-400/60 animate-pulse"></div>
  )
}

export function CommentsSkeleton() {
  return (
    <div className="p-4" >
      <div className="px-4 py-2 bg-gray-300 rounded-md flex flex-col gap-2 animate-pulse">

        <div className="w-full h-5 bg-gray-400/60 rounded-md animate-pulse"></div>

        <div className="w-full flex flex-row justify-end">
          <div className="bg-gray-400/60 animate-pulse h-3 w-28 rounded-md"></div>
        </div>

      </div>
    </div>
  )
}