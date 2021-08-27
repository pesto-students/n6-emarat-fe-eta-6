export type ColorType =
	| 'primary'
	| 'danger'
	| 'warning'
	| 'success'
	| 'emarat-accent';

export type ColorMap = {
	[key in ColorType]?: string;
};

// export type ColorMap = { [key: string]: string; };

export type FieldType = {
	name: string;
	type: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	defaultValue: any;
	label: string;
	validations?: {
		[key: string]: {
			value: boolean | RegExp | number | string;
			message: string;
		};
	};
	role?: string;
	options?: Array<{ value: string; label: string }>;
	placeholder?: string;
};

export type FormMetaType = {
	submitLabel?: string;
	apiUrl?: string;
};

export type StringMapObj = { [key: string]: string };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyMapObj = { [key: string]: any };