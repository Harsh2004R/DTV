import React, { useState } from 'react'
import { Box, Image, Text, Button, HStack, VStack } from "@chakra-ui/react";
import { FaArrowAltCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import PhotosPost from '../Components/PhotosPost';
import Reels from '../Components/Reels';



const LinkItems = [

    { name: 'Home', icon: <svg aria-label="Home" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Home</title><path d="M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z"></path></svg>, nav: "/" },
    { name: 'Post', icon: <svg color='#fff' aria-label="Posts" className="x1lliihq x1n2onr6 x1roi4f4" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Posts</title><rect fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>, nav: "/social" },
    { name: 'Reels', icon: <svg aria-label="Reels" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Reels</title><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="2.049" x2="21.95" y1="7.002" y2="7.002"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="13.504" x2="16.362" y1="2.001" y2="7.002"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line><path d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z" fillRule="evenodd"></path></svg>, nav: "" },
    { name: 'Message', icon: <svg aria-label="Messenger" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Messenger</title><path d="M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.739"></path><path d="M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z" fillRule="evenodd"></path></svg>, nav: "/soon" },
    { name: 'Like', icon: <svg aria-label="Notifications" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Notifications</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>, nav: "/soon" },
    { name: ' Add Post', icon: <svg color='#fff' aria-label="New post" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>New post</title><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>, nav: "/upload" },
    // { name: 'Neost', icon: "", nav: "" },


];





const SocialMedia = () => {
    const [showHiddenBox, setShowHiddenBox] = useState(false);
    const [activeTab, setActiveTab] = useState('photos');

    const toggleTab = (tab) => {
        setActiveTab(tab);
    };
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
                    <Box display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"} mt="10px" mb="10px" w="35%" h={{ base: "35px", md: "35px" }} onClick={() => toggleTab('photos')}
                        style={{ cursor: 'pointer' }} borderTop="0.5px dashed #FD7E14" borderBottom="0.5px dashed #fff" borderTopLeftRadius={{ base: "90px", md: "50px" }} borderBottomRightRadius={{ base: "90px", md: "50px" }}>
                        <svg color='#fff' aria-label="Posts" className="x1lliihq x1n2onr6 x1roi4f4" fill="currentColor" height="18" role="img" viewBox="0 0 24 24" width="24"><title>Posts</title><rect fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.015" x2="9.015" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.985" x2="14.985" y1="3" y2="21"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="9.015" y2="9.015"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="14.985" y2="14.985"></line></svg>
                        <Text bgGradient="linear(to-t, #FD7E14,#9c27b0)" bgClip="text" fontFamily={"bebas_neue"} fontSize={{ base: "15px", md: "20px" }}>Photos</Text>

                    </Box>
                    <Box display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"} mt="10px" mb="10px" w="35%" h={{ base: "35px", md: "35px" }} onClick={() => toggleTab('videos')}
                        style={{ cursor: 'pointer' }} borderTop="0.5px dashed #FD7E14" borderBottom="0.5px dashed #fff" borderTopRightRadius={{ base: "90px", md: "50px" }} borderBottomLeftRadius={{ base: "90px", md: "50px" }}>
                        <svg color='#fff' aria-label="Reels" className="x1lliihq x1n2onr6 x1roi4f4" fill="currentColor" height="18" role="img" viewBox="0 0 24 24" width="24"><title>Reels</title><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="2.049" x2="21.95" y1="7.002" y2="7.002"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="13.504" x2="16.362" y1="2.001" y2="7.002"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line><path d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M9.763 17.664a.908.908 0 0 1-.454-.787V11.63a.909.909 0 0 1 1.364-.788l4.545 2.624a.909.909 0 0 1 0 1.575l-4.545 2.624a.91.91 0 0 1-.91 0Z" fillRule="evenodd"></path></svg>
                        <Text bgGradient="linear(to-t, #FD7E14,#9c27b0)" bgClip="text" fontFamily={"bebas_neue"} fontSize={{ base: "15px", md: "20px" }} >Videos</Text>
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
                            p={{ base: "0px", md: "4" }}
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


                            <Box m="auto" w={{ base: "100%", md: "100%" }} h="auto"
                            // border="2px solid red"
                            >

                                <Box
                                    // border={"1px solid red"}
                                    w="100%"
                                    h="auto"

                                >



                                    {activeTab === 'photos' && <PhotosPost />}  
                                    {/* Render PhotosPost if activeTab is 'photos' */}
                                    {activeTab === 'videos' && <Reels />} {/* Render Reels if activeTab is 'videos' */}



                                </Box>



                                <Box
                                    bgColor={"#000000"}
                                    // border="2px solid red" 
                                    display={"flex"} justifyContent={"center"} alignItems={"center"}>

                                    {/* <FaPlus border="1px solid red"/> */}
                                    {/* <svg color='#fff' aria-label="New post" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>New post</title><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg> */}


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
                            <VStack>
                                <Box mt="10px" w="100%" h={{ base: "50px", md: "60px" }} >
                                    <Text display={"flex"} alignContent={"center"} alignItems={"center"} justifyContent={"center"} bgGradient="linear(to-t, #FD7E14,#9c27b0)" bgClip="text" fontSize={{ base: "35px", md: "35px" }} fontFamily={{ base: "cenobyte", md: "deadbitch" }} >Dare To Visit</Text>
                                </Box>
                                <Box w="100%" h={{ base: "15px", md: "20px" }}></Box>

                                <Box
                                    // border={"1px solid #fff"}
                                    w="100%" h={{ base: "auto", md: "auto" }} >
                                    {LinkItems.map((link, index) => (
                                        <React.Fragment key={index}>

                                            <ChakraLink
                                                as={Link}
                                                to={link.nav}
                                                style={{ textDecoration: 'none', color: 'white' }}
                                                _hover={{ bg:"rgba(0, 0, 0, 0.2)" }}
                                                display="flex"
                                                alignItems="center"
                                                // border="1px solid red"
                                                paddingBottom="15px"
                                                paddingTop="15px"
                                                color="#FFFFFF"
                                                w="100%" h="30px"
                                                p={{ base: "30px", md: "30px" }}
                                            >
                                                <VStack style={{ marginRight: '10px' }}>{link.icon}</VStack>
                                                <div>{link.name}</div>
                                            </ChakraLink>


                                        </React.Fragment>
                                    ))}
                                </Box>



                            </VStack>

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
                            <FaArrowCircleLeft color='#fff' />
                        ) : (
                            <FaArrowAltCircleRight color='#fff' />
                        )}
                    </Box>

                </Box>

            </Box>
            {/* Container Box end -------------------------------------------------------Container Box end --------------------------------------------------------Container Box end --------------------------------------------------------Container Box end ---------------------------------------------------------*/}






        </>
    )
}

export default SocialMedia;

