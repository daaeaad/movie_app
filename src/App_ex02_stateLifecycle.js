import React from "react";
//import propTypes from "prop-types";

class App extends React.Component {

  state = {
    count: 0,
    str: ""
  }

  add = () => {
    console.log("add");
    this.setState( current => ({ count: current.count + 1, str: current.str + "A " }) );
    // current 는 state object의 현재 상태를 가져옴
  };
  minus = () => {
    console.log("minus");
    this.setState( current => ({ count: current.count - 1, str: current.str + "B " }) );
  };

  constructor(props){ // 컴포넌트 생성 후 가장 먼저 실행되는 함수.
  // constructor 는 javascript ES6에서 class 생성시 사용되는 문법이다. 
    super(props); // 이 함수 실행시, 인자값 props와 함수 내에 super(props);가 없으면 에러와 함께 실행되지 않는다.
    console.log("::: mounting 1 - 컴포넌트가 생성되었어. ::: constructor()");
  }

  componentDidMount(){ // 컴포넌트 출력물이 DOM에 렌더링 된 후에 실행
  // constructor()는 render() 전에 실행되지만 componentDidMount()는 render()후에 실행된다.
  // 실행 순서 :  constructor() -> render() -> componentDisMount()
    console.log("::: mounting 2 - 컴포넌트가 생성되었고, 내용이 화면에 그려진(render) 후에 내가 실행되지. ::: componentDidMount()");
  }

  componentDidUpdate(){ // 컴포넌트가 update되었을때 render() 함수 다음에 실행되는 함수.
    // 함수 실행 순서 :  setState -> render() -> componentDidUpdate()
    console.log("::: Updating - 컴포넌트에 변경사항이 있어서 업데이트되었어. ::: componentDidUpdate()");
  }

  componentWillUnmount(){ // 컴포넌트가 죽었을때 실행되는 함수
    // 컴포넌트가 페이지 새로고침 혹은 이동, 서버 재시작시, js파일 코드의 변경 등으로 인해 죽었을때 실행된다.
    // 페이지 새로고침과 이동시에는 콘솔에서 확인할 수 없지만 실행은 된다.
    // js파일의 코드가 변경되면 서버를 재시작하고 새로운 컴포넌트를 불러오기 위해 render() 후 실행되며, 이때는 콘솔에서 확인 가능하다.
    console.log("::: Unmounting - 컴포넌트 죽음 ::: componentWillUnmount()");
  }

  render(){
    console.log("::: Render - 컴포넌트가 화면에 렌더링 되었어. :::");

    return(
      <div>
        <h1>The number is {this.state.count}</h1>
        <h1>The string is {this.state.str}</h1>
        <br/>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }

}

export default App;
