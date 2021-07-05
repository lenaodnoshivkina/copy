import React from "react";

interface Props {
    item: string;
}


export default class Item extends React.Component<Props>{
    render(): React.ReactChild {
const {item} = this.props;
        return(
            <>
            <div>{item}</div>
                <button onClick={() => {}}>
                    Edit
                </button>
                <button >
                    Delete
                </button>
            </>
        )
    }
}