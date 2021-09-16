import React from "react";
import { Route, Switch,BrowserRouter as Router } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import Posts from "./posts/Posts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShowPost from "./posts/ShowPost";
import AboutPage from "./about/AboutPage";

function App(): JSX.Element {
  return (
    <div className="container-fluid">
      <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/posts" component={Posts} />
        <Route path="/about" component={AboutPage} />
        <Route path="/post/:postId" component={ShowPost} />
        <Route component={PageNotFound} />
      </Switch>
      </Router>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div >
  );
}

export default App;
