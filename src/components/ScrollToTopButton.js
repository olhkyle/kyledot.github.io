import * as React from 'react';
import useScroll from '../hooks/useScroll';
import { AiOutlineArrowUp } from 'react-icons/ai';

const TOP_POS_TO_SHOW = 300;

const ScrollToTopButton = () => {
	const yOffset = useScroll();

	return (
		<>
			{yOffset >= TOP_POS_TO_SHOW && (
				<button
					type="button"
					className="fixed bottom-24 right-10 xl:right-[30rem] p-1 border-[1px] border-gray-300 hover:ring-2 rounded-xl bg-white dark:bg-dark-primary dark:border-gray-600 z-10"
					onClick={() =>
						window.scrollTo({
							top: 0,
							behavior: 'smooth',
						})
					}>
					<AiOutlineArrowUp size="32" />
				</button>
			)}
		</>
	);
};

export default ScrollToTopButton;
