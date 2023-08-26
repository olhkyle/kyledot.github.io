import * as React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import Layout from '../components/layout';
import Seo from '../components/seo';
import useCategory from '../hooks/useCategory';

const BlogIndex = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`;
	const posts = data.allMarkdownRemark.nodes;
	const categories = ['All', ...data.allMarkdownRemark.categoryList];

	const { data: currentPosts, currentCategory, updateCurrentCategory } = useCategory(posts);

	if (posts.length === 0) {
		return (
			<Layout location={location} title={siteTitle}>
				<Bio />
				<p>No blog posts found.</p>
			</Layout>
		);
	}

	return (
		<Layout location={location} title={siteTitle}>
			<Bio />
			<nav className="sticky top-1 left-0 mb-[3rem] z-10">
				<ul role="tablist" id="category" className="hide-scrollbar flex gap-2 items-center m-0 p-2 w-full border-[1px] rounded-md border-gray-300 border-l-4 border-r-4 backdrop-blur overflow-x-scroll xs:bg-gray-100/40">
					{categories.map(category => (
						<li key={category} role="tab" aria-selected={currentCategory === category ? true : false} className={`category ${category === currentCategory ? 'border-blue-primary text-blue-primary font-bold dark:border-blue-primary dark:text-blue-primary' : 'border-gray-100'}`} onClick={updateCurrentCategory(category)}>
							{category}
						</li>
					))}
				</ul>
			</nav>
			<ol style={{ listStyle: `none` }}>
				{(currentCategory === 'All' ? posts : currentPosts).map(post => {
					const title = post.frontmatter.title || post.fields.slug;

					return (
						<li key={post.fields.slug}>
							<article className="post-list-item" itemScope itemType="http://schema.org/Article">
								<header>
									<h2>
										<Link to={post.fields.slug} itemProp="url">
											<span itemProp="headline" className="text-dark-primary dark:text-white font-extrabold hover:text-blue-primary dark:hover:text-blue-primary">
												{title}
											</span>
										</Link>
									</h2>
									<small>{post.frontmatter.date}</small>
								</header>
								<section>
									<div className="flex gap-2">
										<span>☕️</span>
										<p
											dangerouslySetInnerHTML={{
												__html: post.frontmatter.description || post.excerpt,
											}}
											itemProp="description"
											className="text-[15px]"
										/>
									</div>
								</section>
							</article>
						</li>
					);
				})}
			</ol>
		</Layout>
	);
};

export default BlogIndex;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Kyle.dot" />;

export const pageQuery = graphql`
	{
		site {
			siteMetadata {
				title
				description
			}
		}
		allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
			categoryList: distinct(field: { frontmatter: { category: SELECT } })
			nodes {
				excerpt
				fields {
					slug
				}
				frontmatter {
					date(formatString: "MMMM DD, YYYY")
					title
					description
					category
				}
			}
		}
	}
`;
