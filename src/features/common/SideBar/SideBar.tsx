import { Layout } from 'antd';
import './SideBar.css';

const SideBar = ({ menu }: { menu: JSX.Element }) => (
    <Layout.Sider
        className="sidebar"
        breakpoint="lg"
        theme="light"
        collapsedWidth={0}
        trigger={null}
    >
        {menu}
    </Layout.Sider>
);

export default SideBar;
