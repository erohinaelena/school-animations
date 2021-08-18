import React, {Component} from 'react';
import {Arrow1, Arrow2, Arrow3, Arrow4} from './Arrow.jsx';
import {A, B, X, Y, Equals, Plus, Ellipsis} from './Symbols.jsx';
import {A_bx_y} from './(a+b)(x+y).jsx';
import {Footer} from '../Footer/index.jsx';
import {slides} from './slides.js';
import styles from './styles.sass';
import classNames from "classnames";


export class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {
			slideNumber: 1,
			reset: false
		}
	}

	onBack = () => {
		this.setState((state) => ({
			slideNumber: Math.max(state.slideNumber - 1, 1),
			reset: false
		}))
	}

	onForward = () => {
		this.setState((state) => ({
			slideNumber: Math.min(Object.keys(slides).length, state.slideNumber + 1),
			reset: false
		}))
	}

	onReset = () => {
		this.setState({
			slideNumber: 1,
			reset: true
		})
	}

	render() {
		const {slideNumber, reset} = this.state;
		const activeSlide = slides[slideNumber];
		const slidesCount = Object.keys(slides).length;
		return (
			<div className={classNames(styles.content, {[styles.__reset]: reset})}>
				<div className={classNames(
					styles.text,
					{[styles.__shown]: activeSlide.text}
				)}>
					{activeSlide.text}
				</div>
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
				<div className={styles.task}>
					<A_bx_y/>
				</div>
				<div className={styles.solution}>
					<span className={classNames(
						styles.equals,
						{[styles.__shown]: activeSlide.a1}
					)}>
						<Equals/>
					</span>
					<span className={classNames(
						styles.a1,
						{[styles.__shown]: activeSlide.a1}
					)}>
						<A/>
					</span>
					<span className={classNames(
						styles.x1,
						{[styles.__shown]: activeSlide.x1}
					)}>
						<X/>
					</span>
					<span className={classNames(
						styles.plus,
						{[styles.__shown]: activeSlide.plus1}
					)}>
						<Plus/>
					</span>
					<span className={classNames(
						styles.ellipsis,
						{[styles.__shown]: activeSlide.ellipsis1}
					)}>
						<Ellipsis/>
					</span>
					<span className={classNames(
						styles.a2,
						{[styles.__shown]: activeSlide.a2}
					)}>
						<A/>
					</span>
					<span className={classNames(
						styles.y1,
						{[styles.__shown]: activeSlide.y1}
					)}>
						<Y/>
					</span>
					<span className={classNames(
						styles.plus,
						{[styles.__shown]: activeSlide.plus2}
					)}>
						<Plus/>
					</span>
					<span className={classNames(
						styles.ellipsis,
						{[styles.__shown]: activeSlide.ellipsis2}
					)}>
						<Ellipsis/>
					</span>
					<span className={classNames(
						styles.b1,
						{[styles.__shown]: activeSlide.b1}
					)}>
						<B/>
					</span>
					<span className={classNames(
						styles.x2,
						{[styles.__shown]: activeSlide.x2}
					)}>
						<X/>
					</span>
					<span className={classNames(
						styles.plus,
						{[styles.__shown]: activeSlide.plus3}
					)}>
						<Plus/>
					</span>
					<span className={classNames(
						styles.ellipsis,
						{[styles.__shown]: activeSlide.ellipsis3}
					)}>
						<Ellipsis/>
					</span>
					<span className={classNames(
						styles.b2,
						{[styles.__shown]: activeSlide.b2}
					)}>
						<B/>
					</span>
					<span className={classNames(
						styles.y2,
						{[styles.__shown]: activeSlide.y2}
					)}>
						<Y/>
					</span>
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
