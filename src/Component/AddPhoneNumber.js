import React from 'react';
import { Menu, Dropdown, Button, Radio } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import './AddAndEditPhoneNumber.css'

const AddPhoneNumber = () => {
    const [status, setStatus] = React.useState(1);
    const [menuItem, setMenuItem] = React.useState(1);
    const [button, setButton] = React.useState(1);

    const onChangeRadioButtonHandler = e => {
        setStatus(e.target.value);
    };

    const handleButtonClick = (e) => {
        setButton(e.target.value);
    }

    const handleMenuClick = (e) => {
        setMenuItem(e.target.value);
    }
    
    const menu = (
        <Menu >
            <Menu.Item key="1" value="Ja">
                Callback
            </Menu.Item>
            <Menu.Item key="2" value="Ja">
                Operator ID
            </Menu.Item>
            <Menu.Item key="3" value="Ja">
                System ID
            </Menu.Item>
        </Menu>
    );

    const stateMenu = (
        <Menu onClick={() => { }}>
            <Menu.Item key="1">
                AP
            </Menu.Item>
            <Menu.Item key="2">
                TN
            </Menu.Item>
            <Menu.Item key="3">
                KA
            </Menu.Item>
        </Menu>
    );

    return (
        <div className="add-edit-container">
            <div className="row individual-row">
                <span className="col-lg-2"> Phone Number:</span>
                <span className="col-lg-4">
                    <input type="text" value="" />
                </span>
                <span className="col-lg-2">
                    Description
                </span>
                <span className="col-lg-4">
                    <input type="text" value="" />
                </span>
            </div>
            <div className="row individual-row">
                <span className="col-lg-2"> Number Type</span>
                <span className="col-lg-4">
                    <Dropdown overlay={menu}>
                        <Button onClick={handleMenuClick} value={menuItem}>
                            {menuItem} <DownOutlined />
                        </Button>
                    </Dropdown>

                </span>
                <span className="col-lg-2"> Extension </span>
                <span className="col-lg-4">
                    <input type="text" value="" />
                </span>

            </div>
            <div className="row individual-row">
                <span className="col-lg-2"> State </span>
                <span className="col-lg-4">
                    <Dropdown overlay={stateMenu}>
                        <Button>
                            Texas <DownOutlined />
                        </Button>
                    </Dropdown>
                </span>
                <span className="col-lg-2"> city </span>
                <span className="col-lg-4"><input type="text" value="" /></span>
            </div>
            <div className="row individual-row">
                <span className="col-lg-3"> Status </span>
                <Radio.Group onChange={onChangeRadioButtonHandler} value={status}>
                    <Radio value={1}>Active</Radio>
                    <Radio value={2}>Inactive</Radio>
                </Radio.Group>
            </div>
            <div className="row individual-row">
                <span className="col-lg-9"></span>
                <span className="col-lg-1"><Button onClick={handleButtonClick} value={button}>Save</Button></span>
                <span className="col-lg-1"><Button onClick={handleButtonClick} value={button}>Close</Button></span>
            </div>

        </div >
    )
}

export default AddPhoneNumber;