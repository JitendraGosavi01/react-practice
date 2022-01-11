import React, { Component } from 'react';
import PureComp from './PureComp';
import MemoComp from './MemoComp';
import RegularComp from './RegularComp';
class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Jitendra',
    };
  }
  componentDidMount() {
    // setInterval(() => {
    //   this.setState({ name: 'Jitendra' });
    // }, 1000);
  }

  render() {
    console.log(
      '***************** Parent Component rendered *****************'
    );
    return (
      <div>
        <h1>Parent Component</h1>
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
