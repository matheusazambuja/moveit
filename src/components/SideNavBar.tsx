import React from 'react'
import { signOut } from 'next-auth/client'

import { Box, Flex, Img, Link, useColorModeValue } from '@chakra-ui/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function SideNavBar() {

  const iconLogoutMode = useColorModeValue('Dark', 'Light')

  return (
    <Flex as="nav" direction="column"
      alignItems="center"
      justifyContent="space-between"
      // background=
      boxShadow="0 0 60px rbga(0, 0, 0, 0.05)"
      padding="0 1rem"
    >
      <Box as="div"
        marginTop="2rem"
      >
        <Img src={`/icons/logo.svg`} alt="Logo" />
      </Box>
      <Flex as="nav"
        direction="column"
      >
        <Link href="/"
          fontSize="2rem"
          margin="0.7rem 0"

          cursor="pointer"

          transition="color 200ms"
          _hover={{
            color: "blue.600"
          }}
        >
           <FontAwesomeIcon icon="home" />
        </Link>
        <Link href="/leaderboard"
          fontSize="2rem"
          margin="0.7rem 0"
          
          cursor="pointer"

          transition="color 200ms"
          _hover={{
            color: "blue.600"
          }}
        >
           <FontAwesomeIcon icon="medal" />
        </Link>
      </Flex>
      <Link onClick={() => signOut()}
        margin="0.7rem 0"
        marginBottom="2rem"

        fontSize="2rem"

        transition="color 200ms"
        _hover={{
          filter: "brightness(0.5)",
        }}>
          <img src={`/icons/logout${iconLogoutMode}.svg`} />
      </Link>
    </Flex>
  )
}