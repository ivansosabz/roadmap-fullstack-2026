import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard userName="ivansosabz" name="Iván Sosa" isFollowing={false}/>
            <TwitterFollowCard userName="midudev" name="Miguel Ángel Durán" isFollowing={true}/>
            <TwitterFollowCard userName="daniloka21" name="Daniela González" isFollowing={false}/>
        </section>
    )
}