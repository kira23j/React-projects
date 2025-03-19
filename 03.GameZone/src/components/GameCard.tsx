import React  from "react";
import {Game} from '../hooks/useGames';
import { Card, CardBody, Heading,Image } from "@chakra-ui/react";

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
        </CardBody>
       </Card>
    )
}

export default GameCard;