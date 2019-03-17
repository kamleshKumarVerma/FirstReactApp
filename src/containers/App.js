import React, { Component } from 'react';
import Main from '../components/Main';
import User from '../components/User';
import { connect } from 'react-redux';
import { setName } from '../actions/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "kamlesh"
      }
    }
  }

  changeNameHandler(name) {
    this.props.setName(name);
  }
  render() {
    return (
      <div className="App">
        <Main changeName={this.changeNameHandler.bind(this)}/>
        <User name={this.props.user.name}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
