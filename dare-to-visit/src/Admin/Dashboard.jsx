import React, { useState } from 'react'
import {
    Box, Center, Divider, Flex, List, Text, Heading,
    Icon,
    VStack,
    Button,
    useColorModeValue
} from "@chakra-ui/react"
import {  useNavigate } from 'react-router';
import Users from "../Admin/AdminComponents/Users.jsx";
import BlackList from "./AdminComponents/BlackList.jsx"
import { FaSkull } from 'react-icons/fa';


const Dashboard = () => {
    const [activeComponent, setActiveComponent] = useState("users");
    const bg = useColorModeValue('blackAlpha.900', 'black');
    const textColor = useColorModeValue('red.600', 'red.400');
    const navigate = useNavigate()
    const handleHome = () => {
        navigate(`/`)
    }
    const renderComponent = () => {
        switch (activeComponent) {
            case "Active Users": return <Users />;
            case "Black List": return <BlackList />;
            default:
                return <Box
                    height="100vh"
                    bgImage="url('https://images.unsplash.com/photo-1580894894513-9981cf0b4f88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')"
                    bgSize="cover"
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    position="relative"
                    color={textColor}
                >
                    <Box
                        bg="blackAlpha.800"
                        position="absolute"
                        top="0"
                        left="0"
                        width="100%"
                        height="100%"
                        zIndex="1"
                    />
                    <VStack
                        position="relative"
                        zIndex="2"
                        spacing={5}
                        justify="center"
                        align="center"
                        height="100%"
                        px={6}
                    >
                        <Icon as={FaSkull} boxSize={20} color="red.600" />
                        <Heading
                            fontSize="5xl"
                            fontFamily="Creepster, cursive"
                            className="flicker"
                            textAlign="center"
                        >
                            Welcome Back, Admin...
                        </Heading>
                        <Text fontSize="xl" fontStyle="italic" textAlign="center">
                            The shadows have missed you...
                        </Text>
                        <Button
                            colorScheme="red"
                            variant="outline"
                            _hover={{ bg: 'red.600', color: 'black' }}
                            fontWeight="bold"
                            fontSize="lg"
                            onClick={handleHome}
                        >
                            Back to Home
                        </Button>
                    </VStack>

                    {/* Horror Flicker Animation */}
                    <style>
                        {`
          @import url('https://fonts.googleapis.com/css2?family=Creepster&display=swap');

          .flicker {
            animation: flicker 3s infinite;
          }

          @keyframes flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
              opacity: 1;
            }
            20%, 24%, 55% {
              opacity: 0.4;
            }
          }
        `}
                    </style>
                </Box>
        }
    }


    return (
        <Flex w="100%" bg="#eee" h="100vh"
        // border="1px solid red"
        >
            <Box w={{ base: "30%", md: "25%", lg: "20%" }} h="100%" bg="#fff" borderTopRightRadius={"20px"} borderBottomRightRadius={"20px"}
            // border="2px solid red"
            >
                {/* Options list goes here... */}
                <List w="100%" _hover={{ cursor: "pointer" }}>
                    <Center onClick={() => setActiveComponent("Active Users")} w="100%" pt="10px" pb="10px" fontSize={{ base: "12px", md: "14px", lg: "14px" }}>
                        Active Users</Center><Divider borderColor="#aaa" />
                    <Center onClick={() => setActiveComponent("Home Data")} w="100%" pt="10px" pb="10px" fontSize={{ base: "12px", md: "14px", lg: "14px" }}>
                        Home Data</Center><Divider borderColor="#aaa" />
                    <Center onClick={() => setActiveComponent("Dark Web Videos")} w="100%" pt="10px" pb="10px" fontSize={{ base: "12px", md: "14px", lg: "14px" }}>
                        Dark Web Videos</Center><Divider borderColor="#aaa" />
                    <Center onClick={() => setActiveComponent("Premium Content")} w="100%" pt="10px" pb="10px" fontSize={{ base: "12px", md: "14px", lg: "14px" }} >
                        Premium Content</Center><Divider borderColor="#aaa" />
                    <Center onClick={() => setActiveComponent("Social Media")} w="100%" pt="10px" pb="10px" fontSize={{ base: "12px", md: "14px", lg: "14px" }} >
                        Social Media</Center><Divider borderColor="#aaa" />
                    <Center onClick={() => setActiveComponent("Posted Content")} w="100%" pt="10px" pb="10px" fontSize={{ base: "12px", md: "14px", lg: "14px" }} >
                        Posted Content</Center><Divider borderColor="#aaa" />
                    <Center onClick={() => setActiveComponent(" Generated Revenue")} w="100%" pt="10px" pb="10px" fontSize={{ base: "12px", md: "14px", lg: "14px" }} >
                        Generated Revenue</Center><Divider borderColor="#aaa" />
                    <Center onClick={() => setActiveComponent("Video URL's")} w="100%" pt="10px" pb="10px" fontSize={{ base: "12px", md: "14px", lg: "14px" }} >
                        Video URL's</Center><Divider borderColor="#aaa" />
                    <Center onClick={() => setActiveComponent("Podcast URL's")} w="100%" pt="10px" pb="10px" fontSize={{ base: "12px", md: "14px", lg: "14px" }} >
                        Podcast URL's</Center><Divider borderColor="#aaa" />
                    <Center onClick={() => setActiveComponent("Black List")} w="100%" pt="10px" pb="10px" fontSize={{ base: "12px", md: "14px", lg: "14px" }} >
                        Black List</Center><Divider borderColor="#aaa" />
                    {/* <Center w="100%" pt="10px" pb="10px" fontSize={{base:"12px",md:"14px",lg:"14px"}}></Center><Divider borderColor="#aaa"/> */}

                </List>


            </Box>
            <Box flex="1" h="100%" overflowX={"auto"}
            //  border="2px solid blue"
            >
                <Box w="auto" h="100%" >
                    {/* main containt or inputs goes here.... */}
                    {renderComponent()}


                </Box>
            </Box>


        </Flex>
    )
}

export default Dashboard
