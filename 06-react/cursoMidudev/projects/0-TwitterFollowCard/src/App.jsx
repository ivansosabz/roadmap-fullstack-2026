import React from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard userName="ivansosabz" initialIsFollowing={true}>
                Iván Sosa
            </TwitterFollowCard>
            <TwitterFollowCard userName="midudev">
                Miguel Ángel Durán
            </TwitterFollowCard>
            <TwitterFollowCard userName="daniloka21" initialIsFollowing={true}>
                Daniela González
            </TwitterFollowCard>
        </section>
    )
}