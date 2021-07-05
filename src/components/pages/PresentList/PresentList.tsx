import React from "react";
import { RouteConfig } from "react-router-config";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

@observer
export class PresentList extends React.Component {
    render(): React.ReactChild {

        return (
            <>
                <div>PresentList</div>
                <Link to="/">Home</Link>
            </>
        );
    }
}