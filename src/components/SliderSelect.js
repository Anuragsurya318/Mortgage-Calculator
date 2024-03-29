import React, { Fragment } from "react";
import SliderComponent from "./common/SliderComponent";

const SliderSelect = ({ data, setData }) => {
  console.log(data);
  const bank_limit = 10000;
  return (
    <Fragment>
      <SliderComponent
        label="Home Value"
        min={1000}
        max={bank_limit}
        defaultValue={data.homeValue}
        value={data.homeValue}
        step={10}
        onChange={(e, value) => {
          setData({ ...data, downPayment: value * 0.2, loanAmount: value * 0.8, homeValue: value });
        }}
        unit="$"
        amount={data.homeValue}
      />
      <SliderComponent
        label="Down Payment"
        min={100}
        max={data.homeValue}
        defaultValue={data.downPayment}
        value={data.downPayment}
        step={5}
        onChange={(e, value) => {
          setData({ ...data, loanAmount: data.homeValue - value, downPayment: value }); //If you are confused where this ...data came from watch joy's tutorial from 02:00:00
        }}
        unit="$"
        amount={data.downPayment}
      />
      <SliderComponent
        label="Loan Amount"
        min={0}
        max={data.homeValue}
        defaultValue={data.loanAmount}
        value={data.loanAmount}
        step={10}
        onChange={(e, value) => {
          setData({ ...data, downPayment: data.homeValue - value, loanAmount: value });
        }}
        unit="$"
        amount={data.loanAmount}
      />
      <SliderComponent
        label="Interest Rate"
        min={2}
        max={18}
        defaultValue={data.interestRate}
        value={data.interestRate}
        step={1}
        onChange={(e, value) => {
          setData({ ...data, interestRate: value });
        }}
        unit="%"
        amount={data.interestRate}
      />
    </Fragment>
  );
};

export default SliderSelect;
