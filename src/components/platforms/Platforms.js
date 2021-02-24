import React from 'react';
import './Platforms.css';
import { Image } from 'rebass';

import * as siteConstants from '../../shared/Constants';

const socialMediaIcons = [
	require('../../shared/icons/linkedin.svg'),
	require('../../shared/icons/github.svg'),
	require('../../shared/icons/SubtleAlgorithm.png'),
	require('../../shared/icons/stackoverflow.svg'),
];

const socialMedia = [
	{
		id: 1,
		mediaLink: siteConstants.LINKEDIN,
		src: socialMediaIcons[0],
	},
	{
		id: 2,
		mediaLink: siteConstants.GITHUB,
		src: socialMediaIcons[1],
	},
	{
		id: 3,
		mediaLink: siteConstants.SUBTLEALGORITHM,
		src: socialMediaIcons[2],
	},
	{
		id: 4,
		mediaLink: siteConstants.STACKOVERFLOW,
		src: socialMediaIcons[3],
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
