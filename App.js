import React, { Component } from "react";
import { Drawer } from "./src/navigation";


type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Drawer/>
    );
  }
}

