import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <>
      <div className="space-y-2 text-lg text-secondary">
        <div className="mb-5 flex items-center  gap-4 ">
          <Skeleton className="h-10 w-[250px]" />
        </div>
        <div className="mb-5 flex items-center  gap-4 ">
          <Skeleton className="h-10 w-[250px]" />
        </div>
        <div className="mb-5 flex items-center  gap-4 ">
          <Skeleton className="h-10 w-[250px]" />
        </div>
        <div className="mb-5 flex items-center  gap-4 ">
          <Skeleton className="h-10 w-[250px]" />
        </div>
        <div className="mb-5 flex items-center  gap-4 ">
          <Skeleton className="h-10 w-[250px]" />
        </div>
        <div className="mb-5 flex items-center  gap-4 ">
          <Skeleton className="h-10 w-[250px]" />
        </div>
        <div className="mb-5 flex items-center  gap-4 ">
          <Skeleton className="h-10 w-[250px]" />
        </div>
        <div className="mb-5 flex items-center  gap-4 ">
          <Skeleton className="h-10 w-[250px]" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-10">
        {Array.from({ length: 5 }).map(() => (
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] max-w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 max-w-[250px]" />
              <Skeleton className="h-4 max-w-[250px]" />
              <div className="flex items-center gap-3 pt-10">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-10 w-10 rounded-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
