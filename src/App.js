/* eslint-disable */          //lint(warnning출력하는 기능) 끄는 기능

import logo from './logo.svg';
import './App.css';
import { useState} from 'react';

function App() {

  let post = '강남 우동 맛집'; //서버대신 그냥 정해줌
  let [글제목, 글제목변경] = useState(['남자코트 추천','강남 우동맛집','리액트 독학']);       //첫번쨰 인자 state에 보관했던 자료 나옴, 두번째 인자 스테이트를 변경할 함수, [글제목,b] ->이 문법 Destructuring 문법
  let [따봉, 따봉변경] = useState(0);   //이름 옆에 함수를 써도 되지만 안쓰면 "따봉변경"안써도 됨!,  따봉변경 = state 변경함수, 변경하는법! 
  
  function 함수(){                //함수 만드는 형태! 함수: 긴 코드를 한 단어로 묶어줌
   console.log(1);
  }
  // let num = [1, 2];
  // let [a, c] = [1, 2];    ->Destructuring 문법 : array에 있던 배열을 뽑아주는 문법
  
  //왜 state 문법을 쓸까?  변수와 state의 차이점? -> 일반 변수는 갑자기 변경되면 리랜더링 해야만 변경 되지만, state를 쓰면 "자동으로 재랜더링" 됨 ->자동 반영!!
  //모든곳에 state문법을 쓰지는 않아 -> 블로그 로고 같이 10년에 한번 바뀔까 말까 한 애들은 하드코딩을 해주고 쓸대 없이 쓰지 말것, 그냥 하드코딩 하거나, 데이터 바인딩 해줘라, 자주 바뀌는 애들만 state문법 써줘
  return (
    <div className="App">
      <div className="black-nav">       {/* JSX 문법 1. html에 class 넣을 땐 className */}
        <h4 style={{color : 'red', fontSize : '16px'}}>ReactBlog</h4>             {/*jsx 문법 3. style 넣을 땐 style={{스타일명:'값'}}, style={}형태 이지만 중괄호 안에 객체를 넣어줘야함(objet) */}
      </div>

      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy)
      }}>가나다순 정렬</button>

      <button onClick={()=>{
        // 글제목[0] = '여자코트 추천';            (참고)array/object 다룰 때
        // 글제목변경(글제목);                     원본은 보존하는게 좋다. 그래서 다음 코드를 이용함
        //let copy = 글제목; 이렇게 짜면 버튼이 안먹어, 아래처럼 짜야함  원리->  [state 변경함수 특징] : 기존 state;(글제목)== 신규 state;(copy=글제목) 의 경우 같기 때문에 변경안해줌
        let copy = [...글제목];   //... -> 괄호를 벗겨주세요. 의미 , 따라서 괄호를 벗겨주고 다시 씌워서 만들었다. 이러면 화살표도 달라짐
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>변경</button>

      <div className="list">
        <h4>{글제목[0]} <span onClick={()=>{ 따봉변경(따봉+1)}}>👍🏻</span> {따봉} </h4>         {/* onClick={함수} -> 이벤트핸들러, 눌렀을때 뭔가 변경시켜줌! 중괄호 안에는 함수만 들어갈 수 있음 그래서 위에 함수를 선언해주고 쓰거나 onClick={function(){console.log(1)}} 함수만드는 문법을 넣거나!, onClick={ () => {console.log(1)} } 화살표 함수 넣어줌! !*/} 
        <p>2월 17일 발행</p>                                                          {/* onClick={()=>{ 따봉변경(새로운 state)}  따봉+1 을 넣어줌*/}
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p> 
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p> 
      </div>
    {/* <h4>{ post }</h4>                   jsx문법 2. 변수 넣을땐 중괄호{}, 이걸 전문 용어로 데이터 바인딩 이라고함 , 프론트 역할임: 데이터 가져와서 html에 꽂아주세요! */}

    </div>
  );
}

export default App;
