import { useState, useEffect } from 'react';
import styled from 'styled-components';

export type PropsType = {
	className?: string;
	animationStartClasses: string;
	children: React.ReactNode;
};

export default function AnimateOnLoad({
	animationStartClasses,
	children,
	className = '',
}: PropsType) {
	const [animationClasses, setAnimationClasses] = useState<string>(
		animationStartClasses
	);

	useEffect(() => {
		setAnimationClasses('');

		return () => {
			setAnimationClasses(animationStartClasses);
		};
	}, []);

	return (
		<Root className={`${className} transform ${animationClasses}`}>
			{children}
		</Root>
	);
}

const Root = styled.div`
	transition: transform 2s cubic-bezier(0, 1, 0.3, 1) 0.1s,
		opacity 0.7s ease-out 0.1s;
	will-change: transform, opacity;
`;
