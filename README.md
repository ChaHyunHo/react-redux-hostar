# 리액트에서 리덕스 사용 및 애플리케이션 상태 관

~~~
모듈 추가
yarn add redux react-redux

src/components // 프레젠테이셔널 컴포넌트(상태 관리가 이루어지지 않고, 그저 props를 받아와 화면에 UI를 보여주기만 하는용도)
src/containers // 리덕스 연동 컨테이너 컴포넌트(리덕스로부터 상태를 받아 오기도 하고 리덕스 스토어에 액션을 디스패치하기도 한다.)

~~~

IMG_BE795EA82E0E-1.jpeg![IMG_BE795EA82E0E-1](https://user-images.githubusercontent.com/38008152/121191667-258ca500-c8a7-11eb-8460-34b2334e1460.jpeg)

### redux-actions
~~~
yarn add redux-actions
리듀서 작성시 switch/case 문이 아닌 handleActions라는 함수를 사용하여
각 액션마다 업데이트 함수를 설정하는 형식으로 작성 가능

모듈추가
yarn add redux-actions 
~~~