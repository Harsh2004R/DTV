import React from 'react';
import { Box, Avatar, Text, Image, Divider } from '@chakra-ui/react';
const Comments = ({ onClose }) => {
    const handleClose = () => {
        onClose();
    }
    return (
        <>
            <Box
                // border={"1px solid red"}
                w="100%" height="90vh" bg="rgba(0, 0, 0, 0.2)" top="0px" position="absolute"
            >

                <svg onClick={handleClose} style={{ margin: '10px 10px 0px auto' }} color='#fff' aria-label="Close" className="x1lliihq x1n2onr6 x9bdzbf" fill="currentColor" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Close</title><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>

                {/* Comment section parent box starting from here------------->>>>>>>>>>>>>>----------------->>>>>>>>>>>>>>>>>>>>---------------------->>>>>>>>>>>>>>>>------------Comment section parent box starting from here----------------------------------------------------------------Comment section parent box starting from here----------------------------------------------------------------Comment section parent box starting from here----------------------------------------------------------------Comment section parent box starting from here---------------------------------------------------------------- */}

                <Box
                    border={"1px solid "}
                    position="absolute"
                    bg="rgba(0, 0, 0, 0.7)"
                    w={{ base: "95%", md: "60%" }} height={{ base: "80vh", md: "85vh" }}
                    top={{ base: "6.5%", md: "5%" }} left={{ base: "2.5%", md: "20%" }}
                >
                    {/* Comment Box Two Parts starting from here ----->>>>>>>>>>>>>>>>>>>>>>>----------->>>>>>>>>>>>>>>>>>>--------->>>>>>>>>>>>--Comment Box Two Parts starting from here -----------------------------------------------------------Comment Box Two Parts starting from here -----------------------------------------------------------Comment Box Two Parts starting from here -----------------------------------------------------------Comment Box Two Parts starting from here ----------------------------------------------------------- */}

                    <Box
                        // border={"1px solid red"}
                        w="100%" h="100%"
                        display={"flex"}
                    >

                        {/* Content Box here------>>>>>>>>>>>>>>>--------------->>>>>>>>>>>>>>>>>>>----------------->>>>>>>>>>>> */}
                        <Box
                            // border={"1px solid blue"}
                            w={{ base: "0%", md: "50%" }} h="100%">



                            <Image w={{ base: "0%", md: "100%" }} m="auto" borderRadius={"0px"} h="100%" src="https://images.pexels.com/photos/15509517/pexels-photo-15509517/free-photo-of-skyscraper-towering-over-crowd-on-street-in-downtown.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="media image broke" />
                        </Box>


                        {/* comment Box Starting from here------------->>>>>>>>>>>>>----------->>>>>>>>>>>>>---------------->>>>>>>>>>>>>> */}
                        <Box
                            // border={"1px solid yellow"}
                            w={{ base: "100%", md: "50%" }} h="10%"
                            display={"flex"}
                        >
                            <Box
                                // border={"1px solid yellow"}
                                w={{ base: "15%", md: "10%" }} display={"flex"} justifyContent={"center"}
                                alignItems={"center"} alignContent={"center"} h="100%">
                                <Avatar src={
                                    'https://img.freepik.com/free-photo/view-3d-man-taking-selfie_23-2150709936.jpg?size=626&ext=jpg&ga=GA1.1.1559264531.1691417508&semt=ais'
                                } alt="" />
                            </Box>
                            <Box
                                // border={"1px solid yellow"}
                                ml="10px"
                                w={{ base: "77%", md: "85%" }} display={"flex"}
                                alignItems={"center"} alignContent={"center"} h="100%">
                                <Text fontWeight={"bold"} fontFamily={"caslon-antique"} color={"#fff"}>User Name</Text>
                            </Box>
                            <Box
                                //  border={"1px solid green"}
                                w={{ base: "7%", md: "5%" }} h="100%"
                                display={"flex"} justifyContent={"center"}
                                alignItems={"center"} alignContent={"center"}
                            >
                                <svg color='#fff' aria-label="More options" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>More options</title><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                            </Box>


                        </Box>


                    </Box>




                    {/* Comment Box Two Parts ending from here -----------------------------------------------------------Comment Box Two Parts ending from here -----------------------------------------------------------Comment Box Two Parts ending from here -----------------------------------------------------------Comment Box Two Parts ending from here -----------------------------------------------------------Comment Box Two Parts ending from here ----------------------------------------------------------- */}

                </Box>


            </Box>

        </>
    )
}

export default Comments
