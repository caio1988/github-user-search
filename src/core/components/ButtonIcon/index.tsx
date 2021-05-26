import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const ButtonIcon = ({text}: Props) => (
    <div className="d-flex">
        <button className="btn btn-primary search">
            <h5>{text}</h5>
        </button>
    </div>
);

export default ButtonIcon;