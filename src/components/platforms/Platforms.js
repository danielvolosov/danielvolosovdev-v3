import React from 'react';
import './Platforms.css';
import { Image } from 'rebass';

import * as siteConstants from '../../shared/Constants';

const socialMediaIcons = [
	require('../../shared/icons/twitter.svg'),
	require('../../shared/icons/linkedin.svg'),
	require('../../shared/icons/github.svg'),
	require('../../shared/icons/medium.svg'),
	require('../../shared/icons/stackoverflow.svg'),
];

const socialMedia = [
	{
		id: 1,
		mediaLink: siteConstants.TWITTER,
		src: socialMediaIcons[0],
	},
	{
		id: 2,
		mediaLink: siteConstants.LINKEDIN,
		src: socialMediaIcons[1],
	},
	{
		id: 3,
		mediaLink: siteConstants.GITHUB,
		src: socialMediaIcons[2],
	},
	{
		id: 4,
		mediaLink: siteConstants.MEDIUM,
		src: socialMediaIcons[3],
	},
	{
		id: 5,
		mediaLink: siteConstants.STACKOVERFLOW,
		src: socialMediaIcons[4],
	},
];

export default function Platforms() {
	return (
		<div className='platformContainer'>
			{socialMedia.map((icon) => {
				return (
					<div className='platforms'>
						<a href={icon.mediaLink}>
							<Image
								key={icon.id}
								src={icon.src}
								alt='Social Media Icon Photo Unavailable'
							/>
						</a>
					</div>
				);
			})}
		</div>
	);
}
