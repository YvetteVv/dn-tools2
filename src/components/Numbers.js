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
		//let arr = this.props.arr;
		return (
			<div className="container-flex">
				{this.props.arr.map((item, index)=>{
					console.log(index)
					return <Number num={item} key={index}/>
				})}
			</div>
		)
	}
}
export const Numbers = withRouter(NumbersReact)