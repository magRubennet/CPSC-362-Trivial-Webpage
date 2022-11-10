import React from 'react'
import { useLocation } from 'react-router-dom';
import { Box, Center, Container, Heading} from '@chakra-ui/react';

export default function Game() {
    const { state: { score } = {} } = useLocation();

    return(
        <div>

            <Container 
            bg="#70A3DE" 
            maxW="full" 
            mt={0} 
            centerContent 
            overflow="hidden">
                <Box
                  bg="#A4DE70"
                  color="black"
                  borderRadius="lg"
                  m={{ sm: 4, md: 16, lg: 61 }}
                  p={{ sm: 5, md: 5, lg: 250 }}>
                     <Heading ><Center> 
                         {/* Congratulations. Your score is {score} */}
                    </Center></Heading>
                     Congratulations. Your score is {score}
                </Box>
            </Container> 
             {/* Congratulations. Your score is {score} */}
        </div>
    );
}