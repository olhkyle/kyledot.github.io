import React from 'react';

const useCategory = data => {
	const [currentCategory, setCurrentCategory] = React.useState('All');

	const filteredData = data.filter(({ frontmatter }) => frontmatter.category === currentCategory);

	const updateCurrentCategory = category => () => {
		setCurrentCategory(category);
		localStorage.setItem('blogCategory', category);
	};

	return {
		data: filteredData,
		currentCategory,
		updateCurrentCategory,
	};
};

export default useCategory;
