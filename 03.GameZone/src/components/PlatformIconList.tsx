import React from 'react'
import { Platform } from '../hooks/useGames'
import {FaWindows, Fa} from 'react-icons/fa'
import {Text} from '@chakra-ui/react'
interface Props{
    platforms:  Platform[]
}
function PlatformIconList({ platforms} : Props) {
  return (
    <>
      {platforms.map((platform) =><Text>{platform.name}</Text>)}
    </>
  )
}

export default PlatformIconList
