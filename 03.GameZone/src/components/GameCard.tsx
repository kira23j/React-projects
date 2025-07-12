import React  from "react";
import {Game} from '../hooks/useGames';
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props{
    game:Game
}
const GameCard=({game}:Props)=>{
    return (
       <Card borderRadius={10} overflow="hidden" boxShadow="md" cursor="pointer" transition="transform 0.2s" _hover={{transform:"scale(1.05)"}}>
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize={'2xl'}>
            {game.name}
          </Heading>
          {game.parent_platforms.map(({platform}) => <Text key={platform.id}>{platform.name}</Text>)}
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
        </CardBody>
       </Card>
    )
}

export default GameCard;