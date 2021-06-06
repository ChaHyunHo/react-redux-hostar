import React from "react";
import Counter from "../components/Counter";
import { bindActionCreators } from "redux";
import { increase, decrease } from "../modules/counter";
import { connect } from "react-redux";
import { bindReporter } from "web-vitals/dist/modules/lib/bindReporter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// const mapDispatchToProps = (dispatch) => ({
//   //임시 함수
//   increase: () => dispatch(increase()),
//   decrease: () => dispatch(decrease()),
// });

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  (dispatch) =>
    bindActionCreators(
      {
        increase,
        decrease,
      },
      dispatch
    )
)(CounterContainer);
