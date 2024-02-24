import { sampleData } from '@/data/SampleData'
import React, { useState } from 'react'
import Table from './Table'
import { HiOutlineSearch } from "react-icons/hi";

function TableWithSearch() {
    const [searchTerm, setSearchTerm] = useState("")
    return (
        <div>
            <h3 className='font-semibold text-xl mt-[20px] mb-[10px]'>React Table With Search Functionality</h3>
            <p>This is a simple table that showcases the use of this custom table component to display data in the simplest form.</p>
            <div className="relative">
                <input
                    className="w-[343px] h-[50px] rounded-[8px]  pl-[36px] pr-4 text-[16px] relative outline-none border"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="absolute top-[16px] left-[15px] text-[20px]">
                    <HiOutlineSearch />
                </span>
            </div>
            <Table
                header={[
                    { name: "Name", identifier: "name" },
                    { name: "Age", identifier: "age" },
                    { name: "Gender", identifier: "gender" },
                    { name: "Country", identifier: "country" },
                    { name: "City", identifier: "city" },
                ]}
                data={sampleData}
                options={
                    { allowSorting: true, }
                }
                searchQuery={searchTerm}
            />
        </div>
    )
}

export default TableWithSearch