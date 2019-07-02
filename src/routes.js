import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Post from './components/Post';
import Posts from './components/Posts';
import Users from './components/Users';
import NotFound from './components/NotFound';
import Pets from './components/Pets';
import Pet from './components/Pet';

function RouteOne() {
  return <div>One!</div>;
}

function RouteTwo() {
  return <div>Two!</div>;
}

export default (
  <Switch>
    <Route path="/one" exact component={RouteOne} />
    <Route path="/two" component={RouteTwo} />
    {/* Do this before switch and explain that we can keep using exact or use the switch component */}
    {/* <Route path="/posts" component={Posts} />
        <Route path="/posts/:id" component={Post} /> */}
    {/* Have the posts path be first to show how it only picks one, then move the path with id up above */}
    <Route path="/posts/:id" component={Post} />
    <Route path="/posts" component={Posts} />
    <Route path="/users" component={Users} />
    <Route
      path="/pets"
      render={props => {
        return (
          <Pets>
            <h1>Pets!</h1>
            <Route path={`${props.match.path}/:id`} component={Pet} />
          </Pets>
        );
      }}
    />
    <Route component={NotFound} />
  </Switch>
);
