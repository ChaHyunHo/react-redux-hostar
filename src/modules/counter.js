import {createAction, handleActions} from 'redux-actions'

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE"; // 모듈 이름 / 액션 이름

// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState = {
  number: 0,
};

// 예전방식
// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }

// redux-actions 적용

const counter = handleActions(
    {
        [INCREASE]: (state, action) => ({ number: state.number + 1}),
        [DECREASE]: (state, action) => ({ number: state.number - 1}),
    },
    initialState,
);

export default counter;
