import React, { useState } from 'react'
import Table from './Table'
import { sampleData } from '@/data/SampleData'
import ModalContainer from './ModalContainer';
import ConfirmationModal from './ConfirmationModal';

function TableWithActions() {
    const [openModal, setOpenModal] = useState({
        modalName: "",
        showModal: false,
    });
    const [rowData, setRowData] = useState(null);
    return (
        <div>
            <h3 className='font-semibold text-xl mt-[20px] mb-[10px]'>React Table With Actions</h3>
            <p>This showcases extra functions to edit, delete and view information on a particular row.</p>
            <p><i>Using the Props: allowActions(boolean), actions(object)</i></p>
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
                    showPagination: true,
                    allowActions: true,
                    actions: {
                        view: true,
                        edit: true,
                        delete: true,
                    }
                }}
                openModal={openModal}
                setOpenModal={setOpenModal}
                rowData={rowData}
                setRowData={setRowData}
            />
            {openModal.showModal && openModal.modalName === "edit" && (
                <ModalContainer height="auto">
                    <ConfirmationModal
                        message="This is the edit modal"
                        handleCancel={() =>
                            setOpenModal({ modalName: "", showModal: false })
                        }
                    />
                    <p className='p-4 text-center'>You have access to the the row Data by passing the rowData and setRowData props to table component</p>
                    <p className='p-4 text-center'>Row Name: {rowData?.name}</p>
                </ModalContainer>
            )}
            {openModal.showModal && openModal.modalName === "view" && (
                <ModalContainer height="auto">
                    <ConfirmationModal
                        message="This is the view modal"
                        handleCancel={() =>
                            setOpenModal({ modalName: "", showModal: false })
                        }
                    />
                    <p className='p-4 text-center'>You have access to the the row Data by passing the rowData and setRowData props to table component</p>
                    <p className='p-4 text-center'>Row Name: {rowData?.name}</p>
                </ModalContainer>
            )}
            {openModal.showModal && openModal.modalName === "delete" && (
                <ModalContainer height="auto">
                    <ConfirmationModal
                        message="This is the delete modal"
                        handleCancel={() =>
                            setOpenModal({ modalName: "", showModal: false })
                        }
                    />
                </ModalContainer>
            )}
        </div>
    )
}

export default TableWithActions