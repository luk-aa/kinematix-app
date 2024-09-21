import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <>
      <div className="space-y-5 text-lg text-secondary">
        <div className="mb-5 flex items-center  gap-4 ">
          <Skeleton className="h-10 w-10 rounded-sm" />
          <Skeleton className="h-10 w-[200px]" />
        </div>
        <div className="mb-5 flex items-center ml-2  gap-4 ">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-8 w-[200px]" />
        </div>
        <div className="mb-5 flex items-center ml-2  gap-4 ">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-8 w-[200px]" />
        </div>
        <div className="mb-5 flex items-center ml-2  gap-4 ">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-8 w-[200px]" />
        </div>
        <div className="mb-5 flex items-center ml-2  gap-4 ">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-8 w-[200px]" />
        </div>
        <div className="mb-5 flex items-center ml-2  gap-4 ">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-8 w-[200px]" />
        </div>
        <div className="mb-5 flex items-center ml-2  gap-4 ">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-8 w-[200px]" />
        </div>
        <div className="mb-5 flex items-center ml-2  gap-4 ">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-8 w-[200px]" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {Array.from({ length: 8 }).map(() => (
          <div className="flex w-[220px] flex-col space-y-3 p-4 bg-white">
            <Skeleton className="h-[125px] max-w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 max-w-[250px]" />
              <Skeleton className="h-4 max-w-[250px]" />
              <div className="flex justify-between items-center gap-3 pt-10">
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-10 w-10 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
