import React from "react";
//import propTypes from "prop-types";

class App extends React.Component {

  state= {
    isLoading : true
  }

  componentDidMount(){
  // 렌더링이 끝나면 5초 후에 state의 isLoading을 false로 변경한다.
  // 5초후인 이유는 그냥 너무 빨리 렌더링 되어서 잘 작동하는지 육안으로 확인하기 위해.
    setTimeout(() => {
      this.setState( { isLoading: false } );
    }, 5000)
  }

  render() {
    const state = this.state;
    // const {isLoading} = this.state;
    return(
      <div>
        <h1>
          { state.isLoading ? "Loading... It means rendering is still in progress." : "I'm ready! It means rendering is complete." }
        </h1>
      </div>
    );
  }

}

export default App;
