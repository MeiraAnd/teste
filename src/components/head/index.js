import React, { Fragment} from 'react';

import { Header } from './styles';

const Head = ({ score }) => (
    <Fragment>
        <Header>
            <h1>{score.Title}</h1>
            <h2>80% indicado / {score.Genres.map(genre => <span key={genre.ID}> {genre.Title }</span>)} / {score.Year} / eua / 14</h2>
        </Header>
    </Fragment>
);

export default Head;