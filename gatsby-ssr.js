/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */
import React from 'react';

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes }) => {
	setHtmlAttributes({ lang: `en` });
};

exports.replaceRenderer = ({ setPreBodyComponents }) => {
	setPreBodyComponents([
		React.createElement('script', {
			key: 'darkmode',
			dangerouslySetInnerHTML: {
				__html: `
        (function () {
          // 다크모드 여부에 따라 document.body.dataset.theme 값을 토글
          document.body.dataset.theme = localStorage.getItem('theme');
        })();
        `,
			},
		}),
	]);
};
