import React, {Component} from 'react';
import styles from './styles.sass';
import {Dice} from './Dice/Dice.jsx';

const slides = [{
	stroke1: 'Рассмотрим, как вычисляется вероятность, на примере броска одного кубика.',
	stroke2: 'Событие: число очков больше 5',
	goodCases: [6]
}]

const allCases = [1, 2, 3, 4, 5, 6]

export class Content extends Component {
	constructor(props) {
		super(props);
		this.state = {slideNumber: 0}
	}

	render() {
		const activeSlide = slides[this.state.slideNumber];
		return (
			<div className={styles.content}>
				<div className={styles.stroke1}>{activeSlide.stroke1}</div>
				<div className={styles.stroke2}>{activeSlide.stroke2}</div>

				<div className={styles.cases}>
					<div className={styles.casesTitle}>
						{'Пространство исходов'}
					</div>
					<div className={styles.dices}>
						{allCases.map((item) => <Dice
							key={item}
							dots={item}
						/>)}
					</div>
				</div>
				<div className={styles.cases}>
					<div className={styles.casesTitle}>
						{'Благоприятные исходы'}
					</div>
					<div className={styles.dices}>
						{allCases.map((item) => <Dice
							key={item}
							dots={item}
							active={activeSlide.goodCases.includes(item)}
							disabled={!activeSlide.goodCases.includes(item)}
						/>)}
					</div>
				</div>
				<div className={styles.probabilityTitle}>
					{'Вероятность события'}
				</div>
				<div>
					<span>{'P = '}</span>
				</div>
			</div>
		)
	}
}
