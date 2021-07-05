import React from "react";
import ReactDOM from "react-dom";
import { observer, Provider } from "mobx-react";
import { Router } from "react-router";
import { renderRoutes, RouteConfig } from "react-router-config";
import { createBrowserHistory } from "history";
import { observable } from "mobx";
import { EditableList } from "components/pages/EditableList/EditableList";
import { PresentList } from "components/pages/PresentList/PresentList";
import { Link } from "react-router-dom";
import listStore from './stores/ListStore';

@observer
export class RootPage extends React.Component {

  render() {
    return (
        <>
            <ul>
                <li><Link to="/editablelist">View EditableList</Link></li>
                <li><Link to="/presentlist">View PresentList</Link></li>
            </ul>
            <div>Total: 0</div>
        </>
    );
  }
}

export const routes: RouteConfig[] = [
  {
    path: "/",
    component: RootPage,
    exact: true
  },
    {
        path: "/editablelist",
        component: () => <EditableList List={listStore}/>,
        exact: true
    },
    {
        path: "/presentlist",
        component: () => <PresentList/>,
        exact: true
    }
];

function init() {
  try {
    ReactDOM.render(
    <Provider>
        <Router history={createBrowserHistory()}>{renderRoutes(routes)}</Router>
      </Provider>,
      document.getElementById("root")
    );
  } catch (e) {
    console.log(e);
  }
}

init();
