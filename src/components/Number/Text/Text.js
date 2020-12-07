import React, { Component } from 'react';
import './Text.css'
import {Number} from "../Number";

export default class Text extends Component {

	render() {
		return(
			<div className="flex">
				{this.props.num.map((item, index)=>{
					return <div className="animated fadeInDown yx-big" >
						{item}，
					</div>
				})}
			</div>
		)
		//console.log(this.props.num)

	}
}
