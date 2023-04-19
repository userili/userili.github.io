import React from 'react';
import Primary from '../button/Primary';
import Secondary from '../button/Seconday';

export default function Main() {

    return (
        <>
            <br />
            <br />
            <br />

            <Primary title='Primary' disabled />
            <br />
            <br />
            <Secondary title='Secondary' disabled={true} />
        </>
    )
}