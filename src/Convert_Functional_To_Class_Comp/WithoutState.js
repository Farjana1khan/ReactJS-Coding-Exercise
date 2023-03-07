import React, {Component} from 'react';

function Example1() {
  const alertName = () => {
    alert('John Doe');
  };

  return (
    <div>
      <h3>This is a Functional Component</h3>
      <button onClick={alertName}>
        Alert
      </button>
    </div>
  );
};




//Convert To Class COmponent


class Example2 extends Component {

     alertName = () => {
        alert('John Doe');
      };

    render() {

        return (
            <div>
               <h3>This is a Class Component</h3>
      <button onClick={this.alertName}>
        Alert
      </button>  
            </div>
        );
    }
}

export default Example2;