import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';
import './ListItems.css';

const Items = (props) => {
    const style = {
        textDecoration: 'line-through'
    }
    const listItems = props.items.map(item => {
        return (
            <div className="list" key={item.key}>
                <p ><span className="checkbox" onChange={() => props.checkItem(item.key)}><input type="checkbox" /></span>
                    <input type="text" value={item.text} style={(item.isDone) ? style : null}
                        onChange={(e) => props.updateItem(e.target.value, item.key)} />
                    <span className="trashicon">
                        <FontAwesomeIcon
                            onClick={() => props.deleteItem(item.key)}
                            className="faicons" icon="trash" /></span>
                </p>
            </div>
        )
    })
    return (
        <Fragment>
            <FlipMove duration={450} easing="ease-in-out">
                {(listItems.length !== 0) ? listItems : <p className="noitem">No items!!</p>}
            </FlipMove>
        </Fragment>
    )
}

export default Items;