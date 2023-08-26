/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */
const React = require('react');

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes, setPreBodyComponents }) => {
	const script = `
    const isDark = window.matchMedia('(prefers-color-scheme: dark)');
    const savedTheme = localStorage.getItem('theme');

    const theme = savedTheme ?? (isDark.matches ? 'dark' : 'light');

    const setTheme = (newTheme) => {
      if (newTheme === 'dark') {
        document.body.dataset.theme = 'dark';
      } else {
        document.body.dataset.theme = 'light';
      }

      localStorage.setItem('theme', newTheme);
    };

    isDark.addListener((e) => {
      setTheme(e.matches ? 'dark' : 'light');
    });

    setTheme(theme);
  `;

	setHtmlAttributes({ lang: `en` });

	setPreBodyComponents(<script dangerouslySetInnerHTML={{ __html: script }} />);
};
