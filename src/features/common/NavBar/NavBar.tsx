import { useState,ReactElement } from "react";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./NavBar.css";
import logo from "../../../assets/images/imarat-color-1.svg";

const NavBar = ({ menu }: { menu: JSX.Element }): ReactElement<any, any> => {
    const [visible, setVisible] = useState(false);
    return (
        <nav className="navbar">
            <Button
                className="menu"
                type="primary"
                icon={<MenuOutlined />}
                onClick={() => setVisible(true)}
            />
            <Drawer
                title="E-marat"
                placement="left"
                onClose={() => setVisible(false)}
                visible={visible}
            >
                {menu}
            </Drawer>
            <a href="/">
                <img src={logo} className="logo" alt="logo" />
            </a>
        </nav>
    );
};

export default NavBar;

