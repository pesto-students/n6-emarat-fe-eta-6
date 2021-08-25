import React from 'react';
import { Loading3QuartersOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ColorType, ColorMap } from '../../Types';

type PropsType = {
	type?: 'button' | 'submit';
	children: React.ReactNode;
	color?: ColorType;
	pilled?: boolean;
	disabled?: boolean;
	loading?: boolean;
	onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({
	type = 'button',
	color = 'primary',
	pilled = false,
	disabled = false,
	loading = false,
	children,
}: PropsType) {
	const colors: ColorMap = {
		primary:
			'text-white bg-indigo-600 focus:ring-indigo-200 hover:bg-indigo-700 active:bg-indigo-800',
		danger: 'text-red-100 bg-red-600 focus:ring-red-200 hover:bg-red-700 active:bg-red-800',
		warning:
			'text-yellow-100 bg-yellow-600 focus:ring-yellow-200 hover:bg-yellow-700 active:bg-yellow-800',
		success:
			'text-green-100 bg-green-600 focus:ring-green-200 hover:bg-green-700 active:bg-green-800',
		'emarat-accent':
			'text-white bg-emarat-accent-default hover:bg-emarat-accent-hover active:bg-emarat-accent-active',
	};

	return (
		<TButton
			type={type}
			className={`${colors[color]} ${
				pilled ? 'rounded-full' : 'rounded-lg'
			}`}
			disabled={disabled || loading}
		>
			{children}
			{loading && <Loading3QuartersOutlined className="ml-3" spin />}
		</TButton>
	);
}

const TButton = styled.button`
	${tw`
		flex
		items-center
		transition-colors
		duration-300
		py-3
		px-10
		font-bold
		focus:ring-2
		focus:ring
		disabled:opacity-70
		disabled:cursor-not-allowed
	`}
`;
