import React, { Component } from 'react';
// import Aux from '../../../hoc/Auxilary.js'
import classes from './Person.css';
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types'

class Person extends Component {
  componentDidMount() {
    this.inputElement.focus()
  }
  render() {
    console.log('[Person.js] rendering...');
    return (
      <React.Fragment>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input 
        ref={(inputEl) => {this.inputElement = inputEl}}
        type="text" 
        onChange={this.props.changed} 
        value={this.props.name} />

      </React.Fragment>

    );
  };
  }
  Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
  }



export default withClass(Person, classes.Person);
