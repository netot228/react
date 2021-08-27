import React from 'react';

class SimpleForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {nameValue: ''};
    }

    handleOnChange = (e) =>{
        this.setState({nameValue: e.target.value})
    }

    handleOnSubmit = (e) =>{
        alert(`name is ${this.state.nameValue}`);
        e.preventDefault();

    }

    render(){
        return(
            <form onSubmit={this.handleOnSubmit}>
                <label>Name:</label>
                <input type="text" onChange={this.handleOnChange} value={this.state.nameValue} />
                <input type="submit" value="send" />
            </form>
        );
    }
}

export default SimpleForm;