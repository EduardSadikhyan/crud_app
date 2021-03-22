import React, { Component } from 'react';
class LoginControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'karamislo'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ value: event.target.value })
    }
    handleSubmit(event) {
        alert(this.state.value.toUpperCase());
        // event.preventDefault();
        return this.state.value
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" />
            </form>
        )
    }
}

export default LoginControl;