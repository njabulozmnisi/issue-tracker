import Pagination from "@/app/components/Pagination";


export default function HomePage({ searchParams}: {searchParams: { page: string}}) {
  return (
   <Pagination itemCount={100} pageSize={10} currentPage={parseInt(searchParams.page)}></Pagination>
  );
}
