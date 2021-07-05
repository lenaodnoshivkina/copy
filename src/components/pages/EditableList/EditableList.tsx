import React from "react";
import { Provider } from 'mobx-react';
import { RouteConfig } from "react-router-config";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import listStore from '../.././../stores/ListStore';
import ItemModel from '../../../models/ItemModel';
import Item from "../Item/Item"
import classNames from "classnames";
import "./EditableList.less";

@observer
export class EditableList extends React.Component<{  List: any }, {}> {

    render(): React.ReactChild {
        const {addItem, ListItems, deleteItem} = this.props.List

        return (
            <div className="pageContainer">
                <div>EditableList</div>
                <div>Total: {ListItems.length}</div>
                <button
                    onClick={() => addItem("value")}
                >
                    Create
                </button>
                <div>Elements:</div>
                <div>
                    {ListItems.map((item, index) => <Item key={index} item={item}/>)}
                </div>
                <Link to="/">Home</Link>
            </div>
        );
    }
}