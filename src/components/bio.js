/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Bio = () => {
	const data = useStaticQuery(graphql`
		query BioQuery {
			site {
				siteMetadata {
					author {
						name
						summary
					}
					description
					social {
						linkedin
					}
				}
			}
		}
	`);

	// Set these values by editing "siteMetadata" in gatsby-config.js
	const author = data.site.siteMetadata?.author;
	const social = data.site.siteMetadata?.social;

	return (
		<div className="bio">
			<div className="flex gap-2">
				<StaticImage className="bio-avatar" layout="fixed" formats={['auto', 'webp', 'avif']} src="../images/space-person.png" width={50} height={50} quality={95} alt="Profile picture" />
				{author?.name && (
					<div className="flex flex-col gap-1">
						<p className="font-semibold tracking-tight sm:tracking-normal">
							Personal Blog by{' '}
							<a href={`https://linkedin.com/in/${social?.linkedin || ``}`} target="_blank" rel="noreferrer" className="p-1 rounded-xl text-blue-primary font-bold border-[1px] border-gray-300 hover:text-black hover:border-black dark:hover:text-white dark:border-gray-500 dark:hover:border-gray-300">
								{author.name}
							</a>
						</p>
						<p className="text-sm">{author?.summary || null}</p>
					</div>
				)}
			</div>
			<div className="flex flex-wrap gap-1 mt-2 ml-[4.5rem] md:gap-2 sm:text-base">
				<a href="https://github.com/olhkyle" target="_blank" rel="noreferrer" className="text-blue-primary font-semibold underline-offset-4 hover:underline text-sm">
					Github
				</a>
				<span className="text-sm">|</span>
				<a href="https://lazykyle.me" target="_blank" rel="noreferrer" className="text-blue-primary font-semibold font-medium underline-offset-4 hover:underline text-sm">
					lazykyle.me
				</a>
				<span className="text-sm">|</span>
				<a href="https://docs.google.com/document/d/1VLqvErvhdaCUYrcBTDzM1e3vHeHHkCJBTDW0hNYoGw4/edit?usp=sharing" target="_blank" rel="noreferrer" className="text-blue-primary font-semibold font-medium underline-offset-4 hover:underline text-sm">
					Resume(Korean)
				</a>
				<span className="text-sm">|</span>
				<a href="https://docs.google.com/document/d/1pFxuhsGGJLaQ1n5ej11ng0ZiKNXoXbjromNNKl40mJc/edit" target="_blank" rel="noreferrer" className="text-blue-primary font-semibold font-medium underline-offset-4 hover:underline text-sm">
					Resume(English)
				</a>
			</div>
		</div>
	);
};

export default Bio;
