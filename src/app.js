import React from "react";
import { connect } from "react-redux";
import { Arr } from "./arr";
import { Form } from "./form";

const UserContext = React.createContext();
export const UserContextConsumer = UserContext.Consumer;

const user = [1, 2, 3];

const mapStateToProps = state => {
  return {
    arrayList: state.sample
  };
};

const submit = values => {
  console.log(values);
};

const AppSimple = ({ arrayList }) => (
  <UserContext.Provider
    value={{
      message: user
    }}
  >
    <Arr items={"test"} />
    <div>{arrayList}</div>
    <Form onSubmit={submit} />
  </UserContext.Provider>
);

export const App = connect(mapStateToProps)(AppSimple);
