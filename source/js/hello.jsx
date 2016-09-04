import React from 'react';

export default class Hello extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			value: 'value'
		}
	}
	onSubmit(e) {
		e.preventDefault();
		alert(this.state.value);
	}
	render() {
		return (
			<div>
				<div class="welcome">Hello, your name?</div>
				<form onSubmit={this.onSubmit.bind(this)}>
					<input type="text" name="name" placeholder="输入名字" />
					<button>submit</button>
				</form>
			</div>
		)
	}
}