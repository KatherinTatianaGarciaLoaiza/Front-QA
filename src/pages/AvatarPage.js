import React from 'react'
import { Avatar } from '../components/Avatar'
import '../styles/Avatar.css';
import alejo from '../images/alejo.jpg';
import tati from '../images/tati.jpg';


export default function AvatarPage() {
    return (
        <div >
            <h1>Pair Programming</h1>
            <h2>Developers</h2>
            <Avatar name="Tatiana Garcia Loaiza" src={tati}></Avatar>
            <Avatar name="Cristian Alejandro Vasquez Zuluaga" src={alejo}></Avatar>
        </div>
    )
}
