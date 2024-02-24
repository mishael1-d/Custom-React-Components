import React from 'react'
import Table from './Table'
import { sampleData } from '@/data/SampleData'

function PaginatedTable() {
  return (
    <div>
        <h3 className='font-semibold text-xl mt-[20px] mb-[10px]'>React Table With Pagination</h3>
            <p>This provides an overview of how to implement pagination functionality in a React table component. It covers methods for dividing large datasets into manageable pages and navigating through them efficiently, enhancing user experience when dealing with extensive data sets.</p>
            <p><i>Using the Props: showPagination(boolean)</i> you can enable or disable the pagination functionality.</p>
            <Table
                header={[
                    { name: "Name", identifier: "name" },
                    { name: "Age", identifier: "age" },
                    { name: "Gender", identifier: "gender" },
                    { name: "Country", identifier: "country" },
                    { name: "City", identifier: "city" },
                ]}
                data={sampleData}
                options={{
                    variant: "primary",
                    showPagination: true
                }}
            />
    </div>
  )
}

export default PaginatedTable