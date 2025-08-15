import { useGetRepo } from "@/hooks";
import RepoCard from "@/components/repo-card";
import RepoCardSkeleton from "@/components/repo-card/skeleton";

export default function Home() {
  const { data, isLoading, error } = useGetRepo("TanStack/query");

  if (isLoading)
    return (
      <div className="flex flex-row items-center justify-center h-screen">
        <RepoCardSkeleton />
      </div>
    );

  if (error) return <div>Error: {error.message}</div>;

  if (!data) return <div>No data</div>;

  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <RepoCard key={data.id} repo={data} />
    </div>
  );
}
