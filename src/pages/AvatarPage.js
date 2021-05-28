import React from 'react'
import { Avatar } from '../components/Avatar'
import '../styles/Avatar.css';


export default function AvatarPage() {
    return (
        <div >
            <h1>Pair Programming</h1>
            <h2>Developers</h2>
            <Avatar name="Tatiana Garcia Loaiza" src='https://randomuser.me/api/portraits/women/2.jpg'></Avatar>
            <Avatar name="Cristian Alejandro Zuluaga" src="https://randomuser.me/api/portraits/women/2.jpg"></Avatar>
        </div>
    )
}
