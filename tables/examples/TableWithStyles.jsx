import { sampleData } from '@/data/SampleData'
import React from 'react'
import Table from './Table'

function TableWithStyles() {
    return (
        <div>
            <h3 className='font-semibold text-xl mt-[20px] mb-[10px]'>React Table With Styling</h3>
            <p>This is a simple table that showcases the use of this custom table component to display data in the simplest form.</p>
            <p><i>Using the Props: variant(string - "primary")</i> you can set the table header to have a background color.</p>
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
                    variant: "primary"
                }}
            />
            <h3 className='font-semibold text-xl mt-[20px] mb-[10px]'>React Table With Styled Rows(Even)</h3>
            <p>This showcases various styling options and techniques to enhance the visual appearance and user experience of the React table component.</p>
            <p><i>Using the Props: tableStyle(string - "striped-even")</i> with this props you can style the even row to have a certain background color and text color.</p>
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
                    tableStyle: "striped-even"
                }}
            />
            <h3 className='font-semibold text-xl mt-[20px] mb-[10px]'>React Table With Styled Rows(Odd)</h3>
            <p>This showcases various styling options and techniques to enhance the visual appearance and user experience of the React table component.</p>
            <p><i>Using the Props: tableStyle(string - "striped-odd")</i> with this props you can style the odd row to have a certain background color and text color.</p>
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
                    tableStyle: "striped-odd"
                }}
            />
        </div>
    )
}

export default TableWithStyles