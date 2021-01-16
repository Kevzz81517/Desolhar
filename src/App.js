import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { elements } from './data';
import MindMap from './MindMap';
import Topic from './Topic';
import { ReactFlowProvider } from 'react-flow-renderer';


function App(props) {

    return (
        <ReactFlowProvider>
        <Router forceRefresh={true}>
           <Switch>
           <Route exact path="/">
                <Redirect to="/topics" />
            </Route>
            <Route exact path="/topics">
                <Topic />
            </Route>
            <Route exact path="/topics/:topicUrlKey/mindmap">
                <MindMap />
            </Route>
        </Switch>
        </Router>
        </ReactFlowProvider>
    );
}

export default App;