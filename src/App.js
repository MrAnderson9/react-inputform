import React, { Component } from 'react';
import Overview from './components/Overview';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
			input: ''
		};
		this.addTask = this.addTask.bind(this);
		this.storeFormData = this.storeFormData.bind(this);
	}

	addTask(e) {
		e.preventDefault();
		this.setState({
			tasks: this.state.tasks.concat(this.state.input),
      		input: ""
		});
	}

	storeFormData(e) {
		this.setState({
			input: e.target.value
		});
	}

	render() {
	  return (
	    <div className="App">
			<form onSubmit={ this.addTask }>
				<fieldset>
					<div>
						<label for="task">Enter your task:  </label>
						<input type="text" id="task" name="task" value={this.state.input} onChange={ this.storeFormData }/>
					</div>
					<button type="submit">Add to Tasks</button>
				</fieldset>
			</form>
	        <Overview listitem={ this.state.tasks }/>
	    </div>
	  );
	}
}

export default App;
