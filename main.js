import React from 'react';
  
class main extends React.component{

    render() {
        return (
            <div class="card" id="post1">
                <h2> My first React js Application </h2>
                <h5> Nov 22, 2018 </h5>
                <p> React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.

Declarative views make your code more predictable and easier to debug. </p>
            </div>
            <div class="card" id="post2">
                <h2> It is component based  </h2>
                <h5> Nov 23, 2018 </h5>
                <p> Build encapsulated components that manage their own state, then compose them to make complex UIs.

Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM. </p>
            </div>
	    <div class="card" id="post3">
                <h2> It is called learn once write anywhere </h2>
                <h5> Nov 24, 2018 </h5>
                <p> We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

React can also render on the server using Node and power mobile apps using React Native. </p>
            </div>
        )
    }
}

export default main;

