import React, { Component } from 'react';


const Container = (props)=>(<div className="container" style={props.myStyle}><div className="ball" style={props.ballStyle}></div></div>);
class Page2 extends Component {
	constructor(props) {
		super();
		this.num = 40;
	}
	
	componentWillMount() {
	}
	render() {
		let containers = [];
		for (let i = 0; i < this.num; i++) {
			containers.push(<Container key={i} 
									myStyle={{ transform: `rotate(${i * 360 / this.num}deg)`}}
									ballStyle={{animationDelay: `${i * 0.1}s`}}
								/>)
		}
		return (
			<div className="page2">
			{containers}
			</div>
		);
	}
}

export default Page2;
