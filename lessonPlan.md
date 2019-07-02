# Beginning of class

1. Start out with diagram on board
2. Explain the exact difference between the two 

# Lecture 

1. Jump the react router library and what benefits it brings

2. Show HashRouter in App.js

3. Create a functional componjent just displaying some text inside of app js and create a Route that will display it. Then navigate to it in the url without use of link.

4. Now create a second functional component in App.js and then a second route. Render it out down below. 

5. Show how when you have a route that matches part of a url, it will load in as well as any other matching routes. Show how exact can solve this issue

6. Add a few Link components to the HashRouter in App.js and show how to nagivate to the different urls shown. After create NavBar component and move the links into that file.

7. Next, create a post component bringing in an array of posts. console.log props.match.params to show them how to access the value. Now, go to a specific post url and show how to dynamically render a specific post.

8. Show how to create a posts component that gets rendered out with buttons that have links to specific posts. Then link to posts in the navbar.

9. Now introduce the Switch component in App.js. Have three routes, one being posts, then post with an id and then a 404 not found route. Explain that switch is similar to rendering out multiple route components, except only one route in a switch component will ever be rendered out. Move Switch up to encompass all routes to not show not found all the time.

10. Create users.js file with an array of users in root. Then create Users.js component that Has some jsx about our users. Create User component that will do the same thing as posts. Then set up a switch that will render out a User by id or a not found if route matches but not exactly.

11. Show the render props style of rendering out a route. Do this with a new pets array.

12. Lastly, move all the routes into a routes.js file and render the out in app.js

# Mini

1. If there is time, move on to the mini after break