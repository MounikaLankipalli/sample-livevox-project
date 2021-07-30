import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import TableData from './TableData';
import AddPhoneNumber from './AddPhoneNumber';

import 'antd/dist/antd.css';
import './PersonData.css';

const MOCKDATA = [
    {
        key: 'Number',
        Number: 123456789,
        Extension: 123,
        Type: 'callback',
        City: 'New York No. 1 Lake Park',
        State: 'AP',
        Description: '',
        DateCreated: '05/01/2016',
        Action: <CheckOutlined />,
    },
    {
        key: 'Number',
        Number: 1234565644,
        Extension: 456,
        Type: 'Operator',
        City: 'London',
        State: 'KA',
        Description: '',
        DateCreated: '10/11/2012',
        Action: <CheckOutlined />,
    }
]

const PersonData = () => {
    const [loadTableData, setLoadTableData] = useState(false);
    const [loadPersonModal, setLoadPersonModal] = useState(false);

    const onClickGeneralBtnHandler = () => {
        setLoadTableData(!loadTableData);
    }

    useEffect(() => {
        if (loadTableData) {
            loadPersonalData();
        }
    }, [loadTableData]);

    const loadPersonalData = () => {
        // Api Call handling for getting the table data from external api
    }

    const addPersonData = () => {
        setLoadPersonModal(!loadPersonModal)
    }

    const onAddPersonDataHandler = () => {
        // We can add API here..for saving...once saving is done we can call data load api
        setLoadPersonModal(false)
    }

    return (
        <div className="add-container">
            <Modal
                title="Phone Number"
                centered
                visible={loadPersonModal}
                onOk={() => onAddPersonDataHandler()}
                onCancel={() => setLoadPersonModal(false)}
                width={1000}
            >
                <AddPhoneNumber />
            </Modal>

            <p className="row individual-row heading">{'Phone Numbers'}</p>

            <div className="row individual-row-data">
                <span className="col-lg-1"><Button onClick={() => onClickGeneralBtnHandler()}>{'General'}</Button></span>
                <span className="col-lg-1"><Button>{'Change History'}</Button></span>
            </div>

            <div className="table-data">
                {loadTableData && <TableData data={MOCKDATA} />}

                <div className="row individual-row add-button">
                    <span className="col-lg-1"><Button onClick={() => addPersonData()}>Add</Button></span>
                    <span className="col-lg-9"></span>
                    <span className="col-lg-1"><Button>Cancel</Button></span>
                </div>
            </div>
        </div>
    )
}

export default PersonData;