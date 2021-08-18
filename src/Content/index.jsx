import React, {Component} from 'react';
import {Arrow1, Arrow2, Arrow3, Arrow4} from './Arrow.jsx';
import {A_bx_y} from './(a+b)(x+y).jsx';
import {Footer} from '../Footer/index.jsx';
import {slides} from './slides.js';
import styles from './styles.sass';



export class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {slideNumber: 1}
	}

	onBack = () => {
		this.setState((state) => ({
			slideNumber: state.slideNumber - 1
		}))
	}

	onForward = () => {
		this.setState((state) => ({
			slideNumber: state.slideNumber + 1
		}))
	}

	onReset = () => {
		this.setState({slideNumber: 1})
	}

	render() {
		const {slideNumber} = this.state;
		const activeSlide = slides[slideNumber];
		const slidesCount = Object.keys(slides).length;
		return (
			<div className={styles.content}>
				<div className={styles.text}>{activeSlide.text}</div>
				<div className={styles.arrows}>
					{activeSlide.arrow1 && (
						<div
							className={styles.arrow1}
							style={activeSlide.arrow1}
						>
							<Arrow1/>
						</div>
					)}
					{activeSlide.arrow2 && (
						<div
							className={styles.arrow2}
							style={activeSlide.arrow2}
						>
							<Arrow2/>
						</div>
					)}
					{activeSlide.arrow3 && (
						<div
							className={styles.arrow3}
							style={activeSlide.arrow3}
						>
							<Arrow3/>
						</div>
					)}
					{activeSlide.arrow4 && (
						<div
							className={styles.arrow4}
							style={activeSlide.arrow4}
						>
							<Arrow4/>
						</div>
					)}
				</div>
				<div className={styles.stroke2}>
					<A_bx_y/>
				</div>
				<Footer
					onBack={this.onBack}
					onForward={this.onForward}
					onReset={this.onReset}
					slideNumber={slideNumber}
					slidesCount={slidesCount}
				/>
			</div>
		)
	}
}
