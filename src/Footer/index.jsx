import React from 'react';
import styles from './styles.sass';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import classNames from 'classnames';

export const Footer = ({
	slideNumber,
	slidesCount,
	onReset,
	onBack,
	onForward
}) => (
	<div className={styles.footer}>
		<div className={styles.counter}>
			<TransitionGroup>
				<CSSTransition
					key={slideNumber}
					addEndListener={(node, done) => {
						node.addEventListener("transitionend", done, false);
					}}
					classNames="fade"
				>
					<span className={styles.counterText}>
						{`${slideNumber} из ${slidesCount}`}
					</span>
				</CSSTransition>
			</TransitionGroup>
		</div>
		{slideNumber === slidesCount && (
			<div
				className={styles.reset}
				onClick={onReset}
			>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M18.25 12C17.8358 12 17.5054 12.3376 17.4496 12.7481C17.0846 15.4318 14.7838 17.5 12 17.5C8.96243 17.5 6.5 15.0376 6.5 12C6.5 9.21617 8.56822 6.91541 11.2519 6.55045C11.6624 6.49463 12 6.16421 12 5.75C12 5.33579 11.6631 4.99578 11.2512 5.03958C7.73729 5.41327 5 8.38697 5 12C5 15.866 8.13401 19 12 19C15.613 19 18.5867 16.2627 18.9604 12.7488C19.0042 12.3369 18.6642 12 18.25 12Z" fill="white"/>
					<path fillRule="evenodd" clipRule="evenodd" d="M18.8 8.73333C18.4 8.2 17.6 8.2 17.2 8.73333L15.2 11.4C14.7056 12.0592 15.176 13 16 13L20 13C20.824 13 21.2944 12.0592 20.8 11.4L18.8 8.73333Z" fill="white"/>
				</svg>
			</div>
		)}
		<div className={classNames(
			styles.buttonsGroupBackForward,
			{[styles.__hiddenAfter]:  slideNumber === slidesCount}
		)}>
			<div
				className={classNames(
					styles.back,
					{[styles.__visible]:  slideNumber > 1}
				)}
				onClick={onBack}
			>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M7.41436 12L11.9783 16.4269C12.3768 16.8134 12.3757 17.4532 11.9758 17.8383C11.5949 18.205 10.992 18.2042 10.6122 17.8363L4.58594 12L10.613 6.2294C10.993 5.86563 11.5923 5.86649 11.9712 6.23135C12.3727 6.61799 12.3715 7.26114 11.9686 7.64631L7.41436 12Z" fill="#1A1B22"/>
					<rect x="7" y="11.0741" width="12" height="1.92593" rx="0.962963" fill="#1A1B22"/>
				</svg>
			</div>
			<div
				className={classNames(styles.forward)}
				onClick={onForward}
			>
				{'Далее'}
			</div>
		</div>
	</div>
);
