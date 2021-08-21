import { Menu } from 'antd';

type MainMenuType = {
    menuItems: string[];
    selectedKey: string;
    changeSelectedKey: (event: { key: string }) => void;
};

const MainMenu = ({
    menuItems,
    selectedKey,
    changeSelectedKey,
}: MainMenuType) => (
    <Menu mode="inline" selectedKeys={[selectedKey]}>
        {menuItems.map((menuItem) => (
            <Menu.Item key={menuItem} onClick={changeSelectedKey}>
                {menuItem}
            </Menu.Item>
        ))}
    </Menu>
);
export default MainMenu;
