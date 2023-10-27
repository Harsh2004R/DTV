import React, { useState } from 'react'
import { Box, Image, Text, Button, HStack } from "@chakra-ui/react";
import { FaArrowAltCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import ScareOnCard from '../Components/ScareOnCard';
const SocialMedia = () => {
    const [showHiddenBox, setShowHiddenBox] = useState(false);

    const toggleHiddenBox = () => {
        setShowHiddenBox(!showHiddenBox);
    };
    return (
        <>

            {/* Container Box here -------------------------------------------------------Container Box here --------------------------------------------------------Container Box here --------------------------------------------------------Container Box here ---------------------------------------------------------*/}
            <Box w="100%" h="100vh" bg="#222222"
            // display={"flex"} border="1px solid red"
            >
                <HStack w={{ base: "80%", md: "60%" }} m="auto" display={"flex"} justifyContent={"center"} alignContent={"center"}>
                    <Box display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"} mt="10px" mb="10px" w="35%" h={{ base: "35px", md: "35px" }} borderTop="0.5px dashed #FD7E14" borderBottom="0.5px dashed #fff" borderTopLeftRadius={{ base: "90px", md: "50px" }} borderBottomRightRadius={{ base: "90px", md: "50px" }}>
                        <Text bgGradient="linear(to-t, #FD7E14,#9c27b0)" bgClip="text" fontFamily={"quantify"} fontSize={"20px"}>Photos</Text>
                    </Box>
                    <Box display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"} mt="10px" mb="10px" w="35%" h={{ base: "35px", md: "35px" }} borderTop="0.5px dashed #FD7E14" borderBottom="0.5px dashed #fff" borderTopRightRadius={{ base: "90px", md: "50px" }} borderBottomLeftRadius={{ base: "90px", md: "50px" }}>
                        <Text bgGradient="linear(to-t, #FD7E14,#9c27b0)" bgClip="text" fontFamily={"quantify"} fontSize={"20px"} >Videos</Text>
                    </Box>
                </HStack>

                <Box bg="#000000" w="100%" h="91vh"
                    mt="5px"
                >
                    <Box
                        w="100%" h="90vh"
                        border={"1px solid #666666"}
                        position={"absolute"} bg="#000000"

                    >

                        {/* Main Content will be displayed here */}

                        <Box
                            // border={"1px solid cyan"}
                            transition="transform 1s"
                            _hover={{

                                cursor: 'pointer'
                            }}
                            w={{ base: "100%", md: "100%" }}

                            h={{ base: "90vh", md: "90vh" }}
                            overflow="auto"
                            p="4"
                            bgColor={"#000000"}
                            borderRadius="none"
                            css={{
                                "&::-webkit-scrollbar": {
                                    width: "5px", // Adjust the width as per your preference
                                },
                                "&::-webkit-scrollbar-thumb": {
                                    backgroundColor: "#F44336", // Customize the scrollbar thumb color
                                    borderRadius: "10px", // Adjust the scrollbar thumb border-radius
                                },
                                "&::-webkit-scrollbar-track": {
                                    backgroundColor: "#B0BEC5", // Customize the scrollbar track color
                                    borderRadius: "10px", // Adjust the scrollbar track border-radius
                                },
                            }}
                        >



                            {/* content starts here*/}


                            <Box m="auto" w={{ base: "100%", md: "99%" }} h="auto"
                                border="2px solid red"
                            >
                                <Text textAlign={"left"} mt="10px" mb="10px" color="#1976D2" fontFamily={"dogica-lite"} fontSize={{ base: "0.8rem", md: "1.4rem" }}>Hot Post's here...</Text>


                                <Box
                                    // border={"1px solid red"}
                                    w="100%"
                                    h="auto"

                                >




                                    {/* <ScareOnCard />
                                    <ScareOnCard />
                                    <ScareOnCard />
                                    <ScareOnCard /> */}



                                </Box>



                                <Box
                                    bgColor={"#000000"}
                                    // border="2px solid red" 
                                    display={"flex"} justifyContent={"center"} alignItems={"center"}>
                                    <Button
                                        color="#FFFFFF"
                                        w={{ base: "160px", md: "180px" }}
                                        h={{ base: "30px", md: "40px" }}
                                        bg={`linear-gradient(to right, #000000, #1976D2, #000000)`}
                                        fontSize={{ base: "13px", md: "16px" }}
                                        fontFamily={"just-die-already"}
                                        mb={{ base: "30px", md: "50px" }}
                                        mt={{ base: "30px", md: "50px" }}
                                        _hover={{ bg: `linear-gradient(to right, #1976D2, #000000, #1976D2)`, boxShadow: '0 0 8px 5px #F5F5F5' }}
                                        _focus={{ outline: 'none' }}
                                        boxShadow='0 0 8px 5px #90A4AE'
                                        _active={{ transform: 'scale(1.5)' }}
                                        borderRadius={"none"}

                                    >Add post</Button>
                                </Box>

                            </Box>

                        </Box>

                    </Box>

                    {showHiddenBox && (

                        <Box
                            position={"relative"}
                            w={{ base: "45%", md: "16%" }}
                            h="100%" borderTop={"1px solid #666666"}
                            borderRight={"1px solid #666666"} bg="#222222"

                        >

                            {/* Side bar content will be displayed here */}


                        </Box>

                    )}
                    <Box position="fixed"
                        left="10px"
                        bottom="50%"
                        zIndex="1"
                        onClick={toggleHiddenBox}
                        bg={"transparent"}
                    >
                        {showHiddenBox ? (
                            <FaArrowCircleLeft

                                color='#fff'
                            />
                        ) : (
                            <FaArrowAltCircleRight

                                color='#fff'
                            />
                        )}
                    </Box>

                </Box>

            </Box>
            {/* Container Box end -------------------------------------------------------Container Box end --------------------------------------------------------Container Box end --------------------------------------------------------Container Box end ---------------------------------------------------------*/}






        </>
    )
}

export default SocialMedia;

