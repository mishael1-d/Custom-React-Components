import BasicTable from "@/examples/BasicTable";
import PaginatedTable from "@/examples/PaginatedTable";
import SortingTable from "@/examples/SortingTable";
import TableWIthLoadingState from "@/examples/TableWIthLoadingState";
import TableWithActions from "@/examples/TableWithActions";
import TableWithSearch from "@/examples/TableWithSearch";
import TableWithStyles from "@/examples/TableWithStyles";
import Link from "next/link";

export default function Home() {
  return (
    <main className={`px-[100px]`}>
      <h1 className="text-2xl font-semibold">Introduction</h1>
      <p>
        The "Basic Standard React Table" is a React component designed to
        display tabular data in a structured and customizable format. It
        provides essential features such as sorting, pagination, and actions
        (such as edit, delete, and view) for each row. The table supports
        sorting by column headers in ascending and descending order, pagination
        to navigate through large datasets efficiently, and customizable actions
        for interacting with individual rows. Additionally, it includes a search
        functionality to filter data based on user input, enhancing the user
        experience by allowing users to quickly find relevant information within
        the table. Overall, the "Basic Standard React Table" serves as a
        versatile and user-friendly solution for presenting data in a web
        application built with React.
      </p>
      <p>
        NB: This custome table isn't mobile responsive yet. Would fix that in a
        couple of days 🥲
      </p>
      <Link
        href="https://github.com/mishael1-d/Custom-React-Components/tree/main/tables"
        target="_blank"
      >
        <b>Github Repository-</b>
        <p className="underline">
          https://github.com/mishael1-d/Custom-React-Components/tree/main/tables
        </p>
      </Link>
      <BasicTable />
      <SortingTable />
      <TableWithStyles />
      <PaginatedTable />
      <TableWithActions />
      <TableWithSearch />
      <TableWIthLoadingState />
    </main>
  );
}
