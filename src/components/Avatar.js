import React from 'react';
import '../styles/Avatar.css';

/**
 * Con destructuracion
 */
export const Avatar = ({ name, src }) => {
    return (
        <div className="avatar">
            <picture>
                <img src={src} className="avatar"/>
            </picture>
            <h3>{name}</h3>
        </div>
    )
}