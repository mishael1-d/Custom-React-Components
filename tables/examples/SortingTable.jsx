import { sampleData } from '@/data/SampleData'
import React from 'react'
import Table from './Table'

function SortingTable() {
    return (
        <div>
            <h3 className='font-semibold text-xl mt-[20px] mb-[10px]'>Basic Standard React Table With Column Sorting</h3>
            <p>You can implement a basic React table component with the ability to sort columns in ascending or descending order. You can use the <i>Props: allowSorting(boolean) to enable or disable this functionality.</i></p>
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
            />
        </div>
    )
}

export default SortingTable