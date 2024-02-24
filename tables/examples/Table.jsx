import React, { useState } from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { FiTrash2 } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import Loader from "./Loader";

function Table({
  header,
  data,
  options,
  openModal,
  setOpenModal,
  rowData,
  setRowData,
  searchQuery,
  loading
}) {
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc"); // Default to ascending order
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default number of items per page

  const handleSort = (column) => {
    if (sortBy === column) {
      if (sortOrder === "asc") {
        setSortOrder("desc");
      } else if (sortOrder === "desc") {
        setSortBy(null);
        setSortOrder("asc");
      } else {
        setSortOrder("asc");
      }
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  // Filter data based on search query
  const filteredData = searchQuery
    ? data?.filter((item) =>
      Object.values(item)?.some((value) =>
        value
          ?.toString()
          ?.toLowerCase()
          ?.includes(searchQuery?.toLowerCase())
      )
    )
    : data;

  const sortedData = filteredData?.slice()?.sort((a, b) => {
    const columnA = a[sortBy];
    const columnB = b[sortBy];

    // Check if column values are integers
    const isInteger = Number.isInteger(columnA) && Number.isInteger(columnB);

    if (sortOrder === "asc") {
      if (isInteger) {
        return columnA - columnB; // Directly compare integers
      } else {
        return columnA?.toString()?.localeCompare(columnB?.toString());
      }
    } else {
      if (isInteger) {
        return columnB - columnA; // Directly compare integers
      } else {
        return columnB?.toString()?.localeCompare(columnA?.toString());
      }
    }
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData?.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <table className={`table overflow-x-auto`}>
        <thead
          className={`${options?.variant === "primary"
            ? "tablePrimaryBg"
            : "bg-white text-black"
            }`}
        >
          <tr>
            <th scope="col">
              {/* <MdOutlineCheckBoxOutlineBlank className="cursor-pointer" /> */}
            </th>
            {header?.length > 0 &&
              header?.map((item, index) => {
                return (
                  <th
                    scope="col"
                    key={index}
                    className="font-semibold cursor-pointer"
                    onClick={() =>
                      options?.allowSorting && handleSort(item.identifier)
                    }
                  >
                    {item.name}{" "}
                    {sortBy === item.identifier &&
                      (sortOrder === "asc" ? "↑" : "↓")}
                  </th>
                );
              })}
            {options?.allowActions && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {options?.showPagination ? (
            currentItems?.length > 0 ? (
              currentItems.map((rowData, rowIndex) => {
                return (
                  <tr
                    key={rowIndex}
                    className={`${options?.tableStyle === "striped-even"
                      ? "even:bg-slate-200"
                      : options?.tableStyle === "striped-odd"
                        ? "odd:bg-slate-200"
                        : "bg-white"
                      }`}
                  >
                    {/* Render table cells */}
                    <td>
                      {/* <MdOutlineCheckBoxOutlineBlank className="cursor-pointer" /> */}
                    </td>
                    {header.map((column, colIndex) => {
                      return <td key={colIndex}>{rowData[column.identifier]}</td>;
                    })}
                    {options?.allowActions && (
                      <td className="flex items-center justify-start gap-3">
                        {options?.actions?.edit && (
                          <span
                            className="w-[2rem] h-[2rem] flex justify-center items-center rounded-full bg-blue-100 cursor-pointer"
                            onClick={() => {
                              setOpenModal &&
                                setOpenModal({
                                  modalName: "edit",
                                  showModal: true,
                                });
                              setRowData && setRowData(rowData);
                            }}
                          >
                            <CiEdit size={16} />
                          </span>
                        )}
                        {options?.actions?.delete && (
                          <span
                            className="w-[2rem] h-[2rem] flex justify-center items-center rounded-full bg-red-100 cursor-pointer"
                            onClick={() => {
                              setOpenModal &&
                                setOpenModal({
                                  modalName: "delete",
                                  showModal: true,
                                });
                              setRowData && setRowData(rowData);
                            }}
                          >
                            <FiTrash2 size={14} color="red" />
                          </span>
                        )}
                        {options?.actions?.view && (
                          <span className="w-[2rem] h-[2rem] flex justify-center items-center rounded-full bg-blue-300 cursor-pointer" onClick={() => {
                            setOpenModal &&
                              setOpenModal({
                                modalName: "view",
                                showModal: true,
                              });
                            setRowData && setRowData(rowData);
                          }}>
                            <IoEyeOutline size={15} />
                          </span>
                        )}
                      </td>
                    )}

                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan={`${header && header.length + (options?.allowActions ? 1 : 0) + 1}`}
                  className="bg-white h-[80px] !py-[3rem] !text-center leading-[80px] mx-auto w-full"
                >
                  {loading ? <Loader color="black" /> : "No result Found"}
                </td>
              </tr>
            )
          ) : (
            filteredData?.map((rowData, rowIndex) => {
              return (
                <tr
                  key={rowIndex}
                  className={`${options?.tableStyle === "striped-even"
                    ? "even:bg-slate-200"
                    : options?.tableStyle === "striped-odd"
                      ? "odd:bg-slate-200"
                      : "bg-white"
                    }`}
                >
                  {/* Render table cells */}
                  <td>
                    {/* <MdOutlineCheckBoxOutlineBlank className="cursor-pointer" /> */}
                  </td>
                  {header.map((column, colIndex) => {
                    return <td key={colIndex}>{rowData[column.identifier]}</td>;
                  })}
                  {options?.allowActions && (
                    <td className="flex items-center justify-start gap-3">
                      {options?.actions?.edit && (
                        <span
                          className="w-[2rem] h-[2rem] flex justify-center items-center rounded-full bg-blue-100 cursor-pointer"
                          onClick={() => {
                            setOpenModal &&
                              setOpenModal({
                                modalName: "edit",
                                showModal: true,
                              });
                            setRowData && setRowData(rowData);
                          }}
                        >
                          <CiEdit size={16} />
                        </span>
                      )}
                      {options?.actions?.delete && (
                        <span
                          className="w-[2rem] h-[2rem] flex justify-center items-center rounded-full bg-red-100 cursor-pointer"
                          onClick={() => {
                            setOpenModal &&
                              setOpenModal({
                                modalName: "delete",
                                showModal: true,
                              });
                            setRowData && setRowData(rowData);
                          }}
                        >
                          <FiTrash2 size={14} color="red" />
                        </span>
                      )}
                      {options?.actions?.view && (
                        <span className="w-[2rem] h-[2rem] flex justify-center items-center rounded-full bg-blue-300 cursor-pointer" onClick={() => {
                          setOpenModal &&
                            setOpenModal({
                              modalName: "view",
                              showModal: true,
                            });
                          setRowData && setRowData(rowData);
                        }}>
                          <IoEyeOutline size={15} />
                        </span>
                      )}
                    </td>
                  )}

                </tr>
              );
            })
          )}
        </tbody>

      </table>
      {options?.showPagination && (
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <label className="text-[15px]">Items Per Page</label>
            <select
              className="bg-white p-2 rounded-md text-[13px]"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(e.target.value)}
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </div>
          {data?.length > itemsPerPage && (
            <div>
              <div className="flex gap-4">
                {[...Array(Math.ceil(data.length / itemsPerPage))].map(
                  (_, index) => {
                    // Calculate the range of pages to display
                    const startPage = currentPage <= 3 ? 0 : currentPage - 3;
                    const endPage =
                      startPage + 5 >= Math.ceil(data.length / itemsPerPage)
                        ? Math.ceil(data.length / itemsPerPage)
                        : startPage + 5;

                    // Render pagination buttons within the range
                    if (index >= startPage && index < endPage) {
                      return (
                        <button
                          key={index}
                          onClick={() => paginate(index + 1)}
                          className={`${currentPage === index + 1
                            ? "bg-blue-500 text-white p-2 px-4 rounded-md"
                            : ""
                            } text-[15px] cursor-pointer`}
                        >
                          {index + 1}
                        </button>
                      );
                    }
                    return null;
                  }
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Table;
