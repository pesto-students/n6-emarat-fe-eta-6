import React, { useState } from 'react';
import { Layout } from 'antd';
import MainMenu from '../common/MainMenu';
import Table from '../common/Table';
import NavBar from '../common/NavBar/NavBar';
import SideBar from '../common/SideBar/SideBar';

function ManageUser() {
    const menuItems = [
        'Home',
        'Amenities',
        'Feeds',
        'Broadcast',
        'Complaints',
        'Users',
        'Payments',
    ];
    const [selectedKey, setSelectedKey] = useState('0');
    const changeSelectedKey = (event: { key: string }) => {
        const { key } = event;
        setSelectedKey(key);
    };
    const Menu = (
        <MainMenu
            menuItems={menuItems}
            selectedKey={selectedKey}
            changeSelectedKey={changeSelectedKey}
        />
    );
    return (
        <div className="App">
            <NavBar menu={Menu} />
            <Layout>
                <SideBar menu={Menu} />
                <Layout.Content className="content">
                    <Table />
                </Layout.Content>
            </Layout>
        </div>
    );
}

export default ManageUser;
