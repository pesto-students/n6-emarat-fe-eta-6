import { Method } from 'axios';

type ApiConfigType = { [key: string]: { url: string; method: Method } };

export const API_CONFIG: ApiConfigType = {
	homepage: {
		url: '/api/home',
		method: 'GET',
	},
	login: {
		url: '/login/',
		method: 'GET',
	},
	users: {
		url: '/api/users/',
		method: 'GET',
	},
	postUser: {
		url: '/api/users/',
		method: 'POST',
	},
	delUser: {
		url: '/api/users/',
		method: 'DELETE',
	},
	putUser: {
		url: '/api/users/',
		method: 'PUT',
	},
	currentUserProfile: {
		url: '/api/users/current/profile',
		method: 'GET',
	},
	updateCurrentUserProfile: {
		url: '/api/users/current/profile',
		method: 'PUT',
	},
	currentUserAmenities: {
		url: '/api/users/current/amenities',
		method: 'GET',
	},
	amenities: {
		url: '/api/amenities/',
		method: 'GET',
	},
	postAmenities: {
		url: '/api/amenities/',
		method: 'POST',
	},
	putAmenity: {
		url: '/api/amenities/',
		method: 'PUT',
	},
	delAmenity: {
		url: '/api/amenities/',
		method: 'DELETE',
	},
	complaints: {
		url: '/api/complaints/',
		method: 'GET',
	},
	postComplaints: {
		url: '/api/complaints/',
		method: 'POST',
	},
	putComplaint: {
		url: '/api/complaints/',
		method: 'PUT',
	},
	delComplaint: {
		url: '/api/complaints/',
		method: 'DELETE',
	},
	broadcast: {
		url: '/api/broadcasts/',
		method: 'POST',
	},
	announcements: {
		url: '/api/broadcasts/',
		method: 'GET',
	},
	getPayments: {
		url: '/api/payments/',
		method: 'GET',
	},
	pay: {
		url: '/api/payments/order/',
		method: 'POST',
	},
	dashboardStats: {
		url: '/api/dashboard/',
		method: 'GET',
	},
	transactions: {
		url: '/api/transactions/',
		method: 'GET',
	},
	refreshToken: {
		url: '/refreshToken/',
		method: 'GET',
	},
	firebaseCommentsCount: {
		url: '',
		method: 'GET',
	},
	isRegisteredUser: {
		url: '/isRegistered/',
		method: 'POST',
	},
	mockLogin: {
		url: '/mockLogin/',
		method: 'POST',
	},
};

export const PATTERNS = {
	NAME: /^[a-zA-Z\s.']+$/,
	PHONE: /^\d{10}$/,
	DIGITS: /^\d+$/,
};

export const FORM_TYPES = {
	TEXT: 'text',
	TEXTAREA: 'textarea',
	SELECT: 'select',
	CHECKBOX: 'checkbox',
	SWITCH: 'switch',
	NUMBER: 'number',
	UPLOAD: 'file',
	MULTISELECT: 'multiselect',
};

export const ROLES = {
	ADMIN: 'admin',
	RESIDENT: 'resident',
};

export const STYLE_COMPONENT_THEME = {
	colors: {
		emarat: {
			primary: '#DDDDDD',
			secondary: '#125D98',
			tertiary: '#3C8DAD',
			accent: '#F5A962',
		},
		brands: {
			facebook: '#1877F2',
			instagram: '#DC2743',
			twitter: '#1C9CEA',
			linkedin: '#0A66C2',
		},
	},
};

export const SERVICE_URL = process.env.REACT_APP_PROXY;

export const CLOUDINARY_IMG_SPLITTER = 'upload/';
export const CLOUDINARY_IMG_TRANSFORMATIONS = {
	WIDTH_600: 'w_600/',
	AVATAR: 'w_50,h_50,c_thumb,g_face,r_max/',
	WIDTH_50: 'w_50/',
	WIDTH_200: 'w_200/',
};

export const RAZORPAY_SCRIPT = 'https://checkout.razorpay.com/v1/checkout.js';

export const MONTHS_LONG = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export const MONTHS_SHORT = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];
export const CLOUDINARY_IMAGES = {
	LOGO: 'https://res.cloudinary.com/emarat/image/upload/v1630505506/logo.svg',
	HARIS: 'https://res.cloudinary.com/emarat/image/upload/w_350/v1630606578/haris_vtcfch.jpg',
	DEEPAK: 'https://res.cloudinary.com/emarat/image/upload/w_350/v1630606542/deepak_bbpokm.jpg',
	SOCIETY:
		'https://res.cloudinary.com/emarat/image/upload/w_650/v1630606579/society_dxlslg.jpg',
	APARTMENT:
		'https://res.cloudinary.com/emarat/image/upload/v1630606579/apartment_limxbz.svg',
};

export const COLOR_CODES = [
	'#34568B',
	'#FF6F61',
	'#88B04B',
	'#6B5B95',
	'#009B77',
	'#EFC050',
	'#B565A7',
	'#F7CAC9',
	'#9B2335',
	'#92A8D1',
	'#955251',
	'#DD4124',
	'#D65076',
	'#45B8AC',
];

export const STATUS_COLOR_MAPPER = {
	success: 'text-green-500',
	failed: 'text-red-500',
	pending: 'text-yellow-500',
};

export const DATE_FORMAT = 'DD MMM YYYY';
export const DATE_TIME_FORMAT = 'DD MMM h:mm:ss A';

export const SENTRY_DSN = process.env.REACT_APP_SENTRY_DSN;

export const AMENITY_TYPES = {
	BASIC: 'basic',
	FLEXI: 'flexible',
	LIMITED: 'limited',
};

export const TEST_IMG_URL =
	'https://res.cloudinary.com/emarat/image/upload/v1631362403/dfejes8g9doeysyniydd.png';
