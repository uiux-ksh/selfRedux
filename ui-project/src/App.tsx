import React from 'react';
import Moment from "./components/Moment";
import Day from "./components/Day";
import Carousel from "./components/Carousel";
import Slider from "./components/Slider/Slider";
import Layout from "./components/Scroll/Layout";

function App() {
  return (
    <div className="App" >
        {/*<Moment />*/}
        {/*<Day />*/}
        {/*<Carousel />*/}
        <Slider />
        <Layout />
    </div>
  );
}

export default App;
