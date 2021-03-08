import Head from 'next/head'
import React from 'react'
import SideNavBar from '../components/SideNavBar'

export default function Leaderboard() {
  return (
    <div>
      <Head>
        <title>Leaderboard | move.it</title>
      </Head>
      <SideNavBar />
      <h1>Leaderboard</h1>
    </div>
  )
}