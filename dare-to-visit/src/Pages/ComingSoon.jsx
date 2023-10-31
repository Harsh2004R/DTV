import React from 'react';
import './ComingSoon.css'; // Import the CSS file
import { Box, Text } from '@chakra-ui/react';

const ComingSoon = () => {
  return (
    <>
      <div id="yazı" >
        <Box w="100%" h="100vh" display={"flex"} alignContent={"center"} justifyContent={"center"}>
          <Box w={{ base: "90%", md: "50%" }} h={{ base: "50vh", md: "50vh" }} m="auto">
            <Text textAlign={"center"} fontSize={{ base: "md", md: "2xl" }} >█ █ █ <span style={{ color: '#B0BEC5' }}>█ █ █ █ █ █ █ █ █ █ </span>31%
              <br />&gt; "Under Construction,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <br />&gt; This Feature is not included 
              <br/> so far
              <br />&gt; Coming Soon...." <span id="imleç">█</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Text>

            <Text mt="20px" textAlign={"center"} fontSize={"10px"} color="#fff">
              Server Responce by <span style={{color:"red"}}>#DareToVisit.</span>
            </Text>
          </Box>
        </Box>
      </div>

    </>
  );
};

export default ComingSoon;