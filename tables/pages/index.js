import BasicTable from "@/examples/BasicTable";
import PaginatedTable from "@/examples/PaginatedTable";
import SortingTable from "@/examples/SortingTable";
import TableWIthLoadingState from "@/examples/TableWIthLoadingState";
import TableWithActions from "@/examples/TableWithActions";
import TableWithSearch from "@/examples/TableWithSearch";
import TableWithStyles from "@/examples/TableWithStyles";

export default function Home() {
  return (
    <main className={`px-[100px]`}>
      <BasicTable />
      <SortingTable/>
      <TableWithStyles/>
      <PaginatedTable/>
      <TableWithActions/>
      <TableWithSearch/>
      <TableWIthLoadingState/>
    </main>
  );
}
