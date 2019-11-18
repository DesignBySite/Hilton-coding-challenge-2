import './room.scss';
import React from 'react';

const room = props => {
    return (
        <div className={props.checked === false ? 'room_container disabled' : 'room_container'}>
            <div className="room_title-area">
                {props.number === 0 ? null : <input
                    type="checkbox"
                    checked={props.checked}
                    onChange={props.handleChange}
                />}
                <p>Room {props.number + 1}</p>
            </div>
            <div className='room_inputs'>
                <div>
                    <label>Adults (18+)</label>
                    <select
                    disabled={props.checked === false ? true : false}
                    value={props.adults}
                    onChange={props.handleAdultValueChange}
                    >
                        <option>1</option>
                        <option>2</option>
                    </select>
                </div>
                <div>
                    <label>Children (0-17)</label>
                    <select
                    disabled={props.checked === false ? true : false}
                    value={props.children}
                    onChange={props.handleChildValueChange}
                    >
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default room;