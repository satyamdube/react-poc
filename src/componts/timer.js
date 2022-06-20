import React  from 'react'

class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          seconds: 0,
          name : "satyam",
          count: 0,
          getPokeName : function() {
            var fullname = this.firstname + ' ' + this.lastname;
            return fullname;
        }
        };
    }
    countIncrement = () => {
        this.setState({count: this.state.count + 1  });
    }
    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
      this.setState({name: "dubey"});
    }
    // componentWillUnmount() {
    //   clearInterval(this.interval);
    // }
    render() {
      return (
        <div>
          Seconds: {this.state.seconds}
          <div onClick={() => this.setState({name: "shivam"})}>{this.state.name}</div>
          <h1>{this.state.count}</h1>
          <button type="button" onClick={this.countIncrement}>Count Increment</button>
        </div>
      );
    }
  }
export default Timer; 
  
