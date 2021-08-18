import React from 'react';
import styles from './Dice.sass';
import classNames from 'classnames';

const getDots = (dots) => {
	switch (dots) {
		case 1: return (
			<circle cx="13.4528" cy="13.4257" r="1.43619" fill="black"/>
		)
		case 2: return (
			<React.Fragment>
				<circle cx="9.53727" cy="13.4257" r="1.43619" fill="black"/>
				<circle cx="16.8776" cy="13.4257" r="1.43619" fill="black"/>
			</React.Fragment>
		)
		case 3: return (
			<React.Fragment>
				<circle cx="6.02652" cy="13.4257" r="1.43619" fill="black"/>
				<circle cx="13.3669" cy="13.4257" r="1.43619" fill="black"/>
				<circle cx="20.3883" cy="13.4257" r="1.43619" fill="black"/>
			</React.Fragment>
		)
		case 4: return (
			<React.Fragment>
				<circle cx="9.21793" cy="17.5747" r="1.43619" fill="black"/>
				<circle cx="17.5158" cy="17.5747" r="1.43619" fill="black"/>
				<circle cx="9.21793" cy="9.27671" r="1.43619" fill="black"/>
				<circle cx="17.5158" cy="9.27671" r="1.43619" fill="black"/>
			</React.Fragment>
		)
		case 5: return (
			<React.Fragment>
				<circle cx="9.21793" cy="17.5747" r="1.43619" fill="black"/>
				<circle cx="17.5158" cy="17.5747" r="1.43619" fill="black"/>
				<circle cx="13.3669" cy="13.4257" r="1.43619" fill="black"/>
				<circle cx="9.21793" cy="9.27671" r="1.43619" fill="black"/>
				<circle cx="17.5158" cy="9.27671" r="1.43619" fill="black"/>
			</React.Fragment>
		)
		case 6: return (
			<React.Fragment>
				<circle cx="6.34586" cy="17.5747" r="1.43619" fill="black"/>
				<circle cx="13.3673" cy="17.5747" r="1.43619" fill="black"/>
				<circle cx="20.3888" cy="17.5747" r="1.43619" fill="black"/>
				<circle cx="6.34586" cy="9.27671" r="1.43619" fill="black"/>
				<circle cx="13.3673" cy="9.27671" r="1.43619" fill="black"/>
				<circle cx="20.3888" cy="9.27671" r="1.43619" fill="black"/>
			</React.Fragment>
		)
		default: return null
	}
}
export const Dice = ({dots, active, disabled}) => (
	<div className={classNames(
		styles.dice, {
			[styles.__active]: active,
			[styles.__disabled]: disabled
		})
	}>
		<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
			<rect x="0.76056" y="0.819154" width="25.2131" height="25.2131" rx="1.59577" fill="white" stroke="black" strokeWidth="0.638307"/>
			{getDots(dots)}
		</svg>
	</div>
)
