import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import Text from "./Text/Text"
import './Number.css'

class NumberReact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		return (
			<div className="num-oneitem">
				<Text num={this.props.num} />
			</div>
		)
	}
}
export const Number = withRouter(NumberReact)