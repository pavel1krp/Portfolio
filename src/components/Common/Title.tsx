import React from 'react';

type PropsType ={
    title:string
}

export const Title = (props:PropsType) => {
    return (
        <div>
            <h2>{props.title}</h2>
        </div>
    );
};

