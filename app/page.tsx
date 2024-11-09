import Pagination from "@/app/components/Pagination";
import LatestIssues from "@/app/LatestIssues";


export default function HomePage({ searchParams}: {searchParams: { page: string}}) {
  return (
      <LatestIssues />
  );
}
