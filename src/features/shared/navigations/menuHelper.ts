/* eslint-disable @typescript-eslint/no-explicit-any */

const getCurrentUrl = () => `/${window.location.pathname.split('/')[1]}`;

export const getDefaultSelectedKeys = (filteredMenuData: any) => {
	const defaultOpenKeys = [];
	const defaultSelectedKeys = [];
	const url = getCurrentUrl();

	for (const filteredMenu of filteredMenuData) {
		const { options = [], id, link } = filteredMenu;
		if (options.length) {
			for (const option of options) {
				if (option.link === url) {
					defaultSelectedKeys.push(option.id);
					defaultOpenKeys.push(id);
				}
			}
		} else if (link === url) defaultSelectedKeys.push(id);
	}
	return { defaultOpenKeys, defaultSelectedKeys };
};

export const getPageTitle = (filteredMenuData: any) => {
	const url = getCurrentUrl();

	for (const filteredMenu of filteredMenuData) {
		const { options = [], link, label } = filteredMenu;
		if (options.length) {
			for (const option of options) {
				if (option.link === url) {
					return option.label;
				}
			}
		} else if (link === url) return label;
	}
	return '';
};