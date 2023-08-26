import * as React from 'react';

const CategoryTag = ({ category }) => {
	return <span className="px-2 py-1 rounded-2xl border-2 border-blue-primary font-semibold text-blue-primary bg-blue-primary/40">{category}</span>;
};

export default CategoryTag;
