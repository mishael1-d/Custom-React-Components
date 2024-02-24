import React from 'react'
import Table from './Table'
import { sampleData } from '@/data/SampleData'

function PaginatedTable() {
  return (
    <div>
        <h3 className='font-semibold text-xl mt-[20px] mb-[10px]'>React Table With Pagination</h3>
            <p>This is a simple table that showcases the use of this custom table component to display data in the simplest form.</p>
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