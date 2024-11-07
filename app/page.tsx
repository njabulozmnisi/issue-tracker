import Pagination from "@/app/components/Pagination";


export default function HomePage() {
  return (
   <Pagination itemCount={100} pageSize={10} currentPage={2}></Pagination>
  );
}
