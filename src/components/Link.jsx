import React from 'react';

export function Link(props) {
    return (
        <a className={`p-5 underline text-blue-600 hover:text-blue-800 ${props.className}`} href={props.href}>{props.name}</a>
    );
}