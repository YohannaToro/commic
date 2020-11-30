import React from 'react';
import './score.scss'
import Rating from '@material-ui/lab/Rating';

const ScoreComponent = () => {
    return (
        <div className="score">
            <Rating name="size-large" defaultValue={2} size="large" />
        </div>
    );
};

export default ScoreComponent;