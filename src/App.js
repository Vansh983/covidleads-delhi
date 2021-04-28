import React, { useState } from "react";

import { Cards, Chart, CountryPicker, ItemCard } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import MenuBar from "./components/MenuBar/MenuBar";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({
      data: fetchedData,
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        {/*<Cards data={data} />*/}
        <MenuBar />
      </div>
    );
  }
}

export default App;
