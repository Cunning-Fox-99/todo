import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from "./components/todo-list";
import AppHeader from "./components/app-header";
import SearchPanel from "./components/search-panel";

const App = () => {

    const isLoggedIn = true;
    const loginBox = <span>Log in please</span>
    const welcomeBox = <span>Welcome Back</span>

    return (
        <div>
            <span> {isLoggedIn ? welcomeBox : loginBox}</span>
            <AppHeader />
            <SearchPanel />
            <TodoList />
        </div>
    )
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
)