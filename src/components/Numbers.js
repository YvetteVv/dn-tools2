import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

import {Number} from './Number/Number'
import './Numbers.css'

class NumbersReact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		let arr = this.props.arr;
		return (
			<div className="container-flex">
				{arr.map((item, i) => {
						return <Number num={item} key={i}/>
					})}
			</div>
		)
	}
}
export const Numbers = withRouter(NumbersReact)