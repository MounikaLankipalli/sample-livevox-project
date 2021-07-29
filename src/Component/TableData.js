import React from 'react';
import { Table } from 'antd';

import 'antd/dist/antd.css';
import './PersonData.css';

const { Column } = Table;

const TableData = (props) => {
    return (
        <Table className="table-info" dataSource={props.data}>
            <Column title="Number" dataIndex="Number" key="Number" />
            <Column title="Extension" dataIndex="Extension" key="Extension" />
            <Column title="Type" dataIndex="Type" key="Type" />
            <Column title="City" dataIndex="City" key="City" />
            <Column
                title="State"
                dataIndex="State"
                key="State"
            />
            <Column
                title="Description"
                key="Description"
                dataIndex="Description"
            />
            <Column
                title="Date Created"
                key="DateCreated"
                dataIndex="DateCreated"
            />
            <Column
                title="Action"
                key="Action"
                dataIndex="Action"
                style="color:green; font-size:20px;"
            />
        </Table>
    )
}

export default TableData;