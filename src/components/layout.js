import * as React from 'react';
import { Link } from 'gatsby';
import ScrollToTopButton from './ScrollToTopButton';
import ThemeButton from './common/ThemeButton';
import { Helmet } from 'react-helmet';

const Layout = ({ location, title, children }) => {
	const rootPath = `${__PATH_PREFIX__}/`;
	const isRootPath = location.pathname === rootPath;
	let header;

	if (isRootPath) {
		header = (
			<h1 className="main-heading dark:text-white">
				<Link to="/">{title}</Link>
			</h1>
		);
	} else {
		header = (
			<div>
				<span className={`text-[1.728rem]`}>🧑🏻‍🚀 </span>
				<Link className="header-link-home" to="/">
					{title}
				</Link>
			</div>
		);
	}

	return (
		<div className="global-wrapper" data-is-root-path={isRootPath}>
			<header className="global-header">
				{header}
				<ThemeButton />
			</header>
			<Helmet>
				<meta name="google-site-verification" content={process.env.GATSBY_GOOGLE_CONSOLE} />
			</Helmet>
			<main className="mb-[4rem]">{children}</main>
			<footer className="border-t-2">
				<div className="flex justify-between font-semibold relative">
					<div className="text-sm text-gray-400"> © 2023 Hyukmin Kwon.</div>
					<div className="flex gap-4 text-sm">
						<a href="https://github.com/olhkyle" target="_blank" rel="noreferrer" className="text-gray-500 dark:text-white underline-offset-4 hover:underline hover:text-blue-primary cursor-pointer">
							Github
						</a>

						<a href="https://olhkyle.me" target="_blank" rel="noreferrer" className="text-gray-500 dark:text-white underline-offset-4 hover:underline hover:text-blue-primary cursor-pointer">
							Olhkyle.me
						</a>
					</div>
					<ScrollToTopButton />
				</div>
			</footer>
		</div>
	);
};

export default Layout;
