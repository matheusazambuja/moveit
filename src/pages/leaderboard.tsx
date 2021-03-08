import Head from 'next/head'
import React from 'react'
import SideNavBar from '../components/SideNavBar'

import { Box, Text } from '@chakra-ui/layout'

export default function Leaderboard() {
  return (
    <div>
      <Head>
        <title>Leaderboard | move.it</title>
      </Head>
      <Box as="div" display="flex" height="100vh">
        <SideNavBar />
        <Text as="h1"
          display="flex"
          alignItems="center"
          textAlign="center"
        >
          Leaderboard
        </Text>
      </Box>
    </div>
  )
}