import React, { useCallback } from "react";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";
import { connect, useDispatch, useSelector } from "react-redux";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// const mapDispatchToProps = (dispatch) => ({
//   //임시 함수
//   increase: () => dispatch(increase()),
//   decrease: () => dispatch(decrease()),
// });

// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   { // bindActionCreator 생략
//     increase,
//     decrease,
//   },
// )(CounterContainer);
