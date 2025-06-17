
import React from 'react';
import { Box, Text, Button, keyframes } from '@chakra-ui/react';
import { Link } from "react-router-dom";
const AnnaBG = "https://github.com/Harsh2004R/full-stack-wev-project/raw/main/src/Photo/AnnaBG.jpg"
const glowAnimation = keyframes`
  0% { box-shadow: 0 0 0px #FF0000; }
  50% { box-shadow: 0 0 10px 5px #FF0000; }
  100% { box-shadow: 0 0 0px #FF0000; }
`;
function Welcome() {



  return (
    <>
      <Box
        w="100%"
        h="100vh"
        // border="2px solid red"
        backgroundImage={`url(${AnnaBG})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        width="100%"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"

      >
        <Box
          // border="1px solid cyan"
          position="absolute"
          top={0}
          left={0}
          right={0}
          p={4}
          textAlign="center"
          zIndex={1}
        // border="2px solid #fff"
        >
          <Text
            fontFamily="sectar"
            color="#FFFFFF"
            fontSize={{ base: "2rem", md: "5rem" }}
            m="auto"
            pt="10px"

          >
            Dare To Visit
          </Text>
        </Box>
        <Box w={{ base: "100%", md: "60%" }}
        //  border="1px solid cyan"


        >

          <Box
            p={35}
            // border="1px solid cyan" 
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Link to="/signup"><Button
              w={{ base: "80px", md: "100px" }}
              h="40px"
              bg="transparent"
              color="#FF0000"
              fontFamily="caslon-antique"
              _hover={{ boxShadow: '0 0 10px 5px #FF0000' }}
              animation={`${glowAnimation} 1s infinite`}
              _active={{ transform: 'scale(1.5)' }}
              textAlign={"center"}
              fontSize={{ base: "lg", md: "lg", lg: "2xl" }}
              m="auto">
              E n t e r
            </Button>
            </Link>
          </Box>

          <Text
            // border="1px solid #FF0000"
            borderRadius={"md"}
            textAlign={{base:"justify",md:"center",lg:"center"}}
            // animation={`${glowAnimation} 1s infinite`}
            _active={{ transform: 'scale(0.95)' }}
            display="block" textShadow="2px 2px 12px rgb(255, 255, 255)"
            color="#FF0000"
            mt="50px"
            p={{ base: "2", md: "4", lg: "5px" }}
            fontFamily="sans" fontWeight={"800"}
            fontSize={{ base: "16px", md: "30px" }}>
            <span style={{ color: "white", display: "inline" }}>Warning:</span>{' '}
            The deeper you scroll, the louder the whispers get {' '}
            <br />
            You came for thrills — but what you’ll find is terror.{' '}
            <br />
            <br />
            <span style={{ color: "#FF0000" }}>
              
            </span>

          </Text>

        </Box>

      </Box>
    </>
  );
}

export default Welcome;