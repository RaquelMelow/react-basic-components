import React, { useState } from "react";
import Panel from '../panel/Panel';

function Counter() {
    const [count, setCount] = useState(0);

    const handleCountUp = () => {
        setCount(count + 1);
    };

    const handleCountDown = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <Panel mode={count > 10 ? 'danger' : 'primary'}>
            <div className="d-flex flex-column">
                <div className={count > 10 ? 'text-danger' : 'text-primary'}>{count}</div>
                <div className="d-grid">
                    <button className="btn btn-secondary btn-sm" onClick={handleCountUp}>
                        <i className="fa fa-plus" aria-hidden="true" />
                    </button>
                    <button className="btn btn-secondary btn-sm" onClick={handleCountDown}>
                        <i className="fa fa-minus" aria-hidden="true" />
                    </button>

                </div>
            </div>
        </Panel>
    );
}

export default Counter;
