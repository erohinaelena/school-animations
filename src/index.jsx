import React, {Component} from 'react';
import {Content} from './Content/index.jsx';
import ReactDOM from 'react-dom';
import style from './style.sass';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div className={style.frame}>
				<Content/>
			</div>
		)
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);
