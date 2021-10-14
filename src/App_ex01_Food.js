// import React from "react";
import propTypes from "prop-types";


function Food({name, picture, rating}) {
// Food 컴포넌트에서 fav라는 인자를 보냄 -> props
// fav와 같은 인자들은 모두 props 안에 들어감
// 인자를 props 로 받고 {props}로 콘솔을 찍으면 json data 로 확인할수 있음
// 혹은 {props.fav} 와 같이 특정 데이터 파싱 가능
// 그러나 props로 인자를 받고 {props.~~}로 파싱하는 방식은 거의 안씀
// 인자명을 {fav}로 처음부터 특정 데이터를 파싱하여 받는걸 권장

  return (
    <div>
      <h3>{name} 먹고싶다.</h3>
      <h4>{rating}</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
   name: propTypes.string.isRequired,
   picture: propTypes.string.isRequired,
   rating: propTypes.number
};

const foodArr = [
  /* 
  Each child in a list should have a unique "key" prop.
  각 리스트 내의 child는 고유의 키 속성을 가져야 한다.
    - react의 모든 element들은 유일해야하고, 리스트에 element들을 집어넣을때 얘네가 유일성을 잃음.
    - 따라서 이 배열의 각 item들에 고유키로 쓸 수 있을만한 id를 넣어주고,
    - 아래에서 리턴하는 <Food /> 컴포넌트에는 "key" prop을 추가해주어야 함.
    - key 속성은 클라이언트 화면에 필요한것이 아니라 react 내부에서 사용하는 속성이므로 function Food에서는 사용하지 않음.
  */
  
  {
    id: 1,
    name : "삼겹살",
    image : "https://src.hidoc.co.kr/image/board/2021/8/27/1630049957798_0.jpg",
    rating : 3.3
  },
  {
    id: 2,
    name : "하울정식(베이컨에그)",
    image : "https://img1.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/25/dailylife/20210525051406523mojq.jpg",
    // rating : 4.8
  },
  {
    id: 3,
    name : "참치회",
    image : "https://img.khan.co.kr/news/2021/03/03/l_2021030401000387600034561.webp",
    rating : 5.0
  }
];


function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}


function App() {
  return (
    <div className="App">

      {/* 방법 1 { 
         - 방법 2와 같은 결과지만 방법 1을 더 추천함. 지금은 굳이 function을 하나 더 만들 필요가 없기 때문

        [ERROR]
        -> Each child in a list should have a unique "key" prop.
        : 각 리스트 내의 child는 고유의 키 속성을 가져야 한다.
          - react의 모든 element들은 유일해야하고, 리스트에 element들을 집어넣을때 얘네가 유일성을 잃음.
          - 따라서 FoodArr 배열의 각 item들에 고유키로 쓸 수 있을만한 id를 넣어주고,
          - 아래에서 리턴하는 <Food /> 컴포넌트에는 "key" prop을 추가해주어야 함.
          - key 속성은 기본적으로 react 내부에서 사용하는 속성이므로 function Food에서는 사용하지 않음.
      */} 
      { foodArr.map( dish =>  // dish는 foodArr 배열 안의 각 item을 for문처럼 돌면서 아래 내용의 함수를 실행시킴
        (
          <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
        )
      ) }
      {/* } 방법 1 */}

      {/* 방법 2 { */}
      {/* { foodArr.map(renderFood) } */}
      {/* } 방법 2 */}

      {
        // 콘솔을 아래와 같이 찍으면 <Food /> 컴포넌트와 같은 배열을 콘솔에서 확인할 수 있음.
        console.log(foodArr.map(renderFood))
      }

    </div>
  );
}

export default App;
