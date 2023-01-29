import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate"
import StreamDelete from "./streams/StreamDelete"
import StreamEdit from "./streams/StreamEdit"
import StreamList from "./streams/StreamList"
import StreamShow from "./streams/StreamShow"
import Header from "./Header";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div>
      <Header />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" exact component={StreamCreate} />
        <Route path="/streams/edit" exact component={StreamEdit} />
        <Route path="/streams/delete" exact component={StreamDelete} />
        <Route path="/streams/show" exact component={StreamShow} />
      </div>
      </BrowserRouter>
    </div>
  );
};

export default App;

// 440724525062-d0n3u0nuluhuld5e6tq8u5e9ql3mt0h7.apps.googleusercontent.com
// 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