import React, { Component } from 'react';
import { observer } from 'mobx-react';
// import logo from './logo.svg';
import './App.css';
import AppStore from './stores/AppStore';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
class App extends Component {
	handleDisplay = (newPage)=>{
		AppStore.setDisplay(newPage)
	}
	render() {
		let display_obj = null;
		if (AppStore.page === 'page1') {
			display_obj = <Page1 />;
		} else {
			display_obj = <Page2 />;
		}
		return (
			<div>
				<div className="control">
					<button 
						onClick={this.handleDisplay.bind(this, 'page1')} 
						onMouseOver={(e)=>(e.target.style.cursor = 'pointer')}
					>Page 1</button>

					<button 
						onClick={this.handleDisplay.bind(this, 'page2')} 
						onMouseOver={(e)=>(e.target.style.cursor = 'pointer')}
					>Page 2</button>
				</div>
				{display_obj}

			</div>
		);
	}
}

export default observer(App);
