import React, { useEffect, useState } from 'react';
import { Box, Avatar, Text, Image, Divider, HStack, Input, Flex, Spinner, Center, Button } from '@chakra-ui/react';
import { BE_URL } from "../URL.js";
import axios from "axios";
import { useForm } from 'react-hook-form';
import { showToast } from "../Utils/toast.js"


const Comments = ({ onClose, postId, userId, userName, postURL, userProfileUrl }) => {
    const [getComments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const { register, handleSubmit, reset } = useForm();



    useEffect(() => {
        // console.log(postId)
        fetchSignleComment()
    }, [])
    const fetchSignleComment = async () => {
        try {

            const res = await axios.get(`${BE_URL}api/comment/${postId}`);
            setComments(res.data.comments);

        } catch (error) {
            console.log("error in fetching comments for this reel", error)

        } finally {
            setLoading(false);
        }
    }


    const onSubmit = async (data) => {
        console.log("clicked")
        if (!data.comment?.trim()) return;

        try {
            const res = await axios.post(`${BE_URL}api/comment/${postId}`, {
                userId,
                comment: data.comment,
            });
            if (getComments.length===15) {
                showToast({
                    title: "Comment maximum limit reached...",
                    status: "warning",
                    description: "Your effort's were appreaciable but unfortunately we can't post your comment 😪",
                    position: "bottom",
                });
            }
            fetchSignleComment();
            setLoading(false);
            reset(); // Clear input
        } catch (error) {
            console.log("Error posting comment:", error);
        }
    };

    const handleClose = () => {
        onClose();
    }


    return (
        <>
            <Box
                // border={"1px solid red"}
                w="100%" height="90vh" bg={{ base: "rgba(0, 0, 0, 0.6)", md: "rgba(0, 0, 0, 0.6)" }} top="0px" zIndex="1" position="absolute"
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

                        {postURL?.match(/\.(jpeg|jpg|gif|png|webp|bmp|svg)$/i) && (
                            <Box w={{ base: "0%", md: "50%", lg: "50%" }}
                                h="100%">
                                <Image
                                    w={{ base: "0%", md: "100%" }}
                                    m="auto"
                                    borderRadius="0px"
                                    h="100%"
                                    src={postURL}
                                    alt={`${userName} broken image`}
                                />
                            </Box>
                        )}


                        {/* comment Box Starting from here------------->>>>>>>>>>>>>----------->>>>>>>>>>>>>---------------->>>>>>>>>>>>>> */}
                        <Box
                            // border={"1px solid white"}
                            w={{ base: "100%", md: "100%" }} h="100%" p="2">
                            <Box
                                // border={"1px solid yellow"}
                                w="100%" h="10%"
                                display={"flex"}
                            >
                                <Box
                                    border={"2px solid #ADADAD"}
                                    borderRadius={"100%"}
                                    w={{ base: "50px", md: "50px" }} display={"flex"} justifyContent={"center"}
                                    alignItems={"center"} alignContent={"center"} h="50px" >
                                    <Avatar w="100%" h="100%" size="30px" m="auto"
                                        src={userProfileUrl}
                                        alt={userName} />
                                </Box>
                                <Box
                                    // border={"1px solid yellow"}
                                    ml="10px"
                                    w={{ base: "77%", md: "85%" }} display={"flex"}
                                    alignItems={"center"} alignContent={"center"} h="100%">
                                    <Flex w="100%" direction={"column"} justifyContent="space-evenly">
                                        <Text letterSpacing={"1px"} fontSize={{ base: "20px", md: "22px", lg: "25px" }} fontFamily={"caslon-antique"} color={"#FFFFFF"}>{userName}</Text>
                                        <Text fontWeight={"bold"} fontSize={{ base: "12px", md: "14px", lg: "14px" }} fontFamily={"caslon-antique"} color={"#03A9F8"}>- Author</Text>
                                    </Flex>
                                </Box>




                            </Box>



                            <Box

                                borderTop={"1px solid #444"}
                                bg="#222223"
                                borderBottom={"1px solid #444"} overflowY="scroll"
                                w={{ base: "100%", md: "100%" }} h="81%">

                                {loading ? (
                                    <Center bg="#000" w="100%" h="auto">
                                        <Text fontFamily={"bebas_neue"} letterSpacing={"2.5px"} color="grey" fontSize={{ base: "14px", md: "15px", lg: "16px" }} fontWeight={"500"}>
                                            Loading comments please wait...
                                        </Text>
                                        <Spinner
                                            ml={{ base: "10px", md: "20px", lg: "20px" }}
                                            size={{ base: "xs", md: "xs", lg: "xs" }}
                                            color="blue.400"
                                            speed="0.6s"
                                            thickness="4px"
                                            emptyColor="gray.200"
                                            boxShadow="0 0 10px rgba(66, 153, 225, 0.6)"
                                        />
                                    </Center>
                                ) : (
                                    <> {getComments.map((el, idx) => (

                                        <Box w="100%" pt="2" pb="2" bg="#222223"
                                            //  border={"1px solid green"}
                                            key={idx}>

                                            <Flex>
                                                <Avatar size="sm" m="auto"
                                                    src={el.user.profile_picture}
                                                    alt={el.user.name} />
                                                <Text fontSize={{ base: "14px", md: "14px", lg: "15px" }} color="#fff">{el.user.name}</Text>
                                                <Box flex="0.95"></Box>
                                            </Flex>
                                            <Flex >
                                                <Box m="auto" boxSize="35px" />
                                                <Box borderRadius={"lg"} p="1" border={"0.5px solid rgb(66, 62, 62)"} flex="0.95">
                                                    <Text fontSize={{ base: "11px", md: "14px", lg: "15px" }} color={"#fff"}>
                                                        {el.comment}
                                                    </Text>
                                                </Box>
                                            </Flex>
                                        </Box>


                                    ))}
                                    </>
                                )}
                                <Text mt="20px" textAlign={"center"} fontFamily={"bebas_neue"} letterSpacing={"2.5px"} color="grey" fontSize={{ base: "9px", md: "9px", lg: "10px" }} fontWeight={"500"}>
                                    No more comments to show...
                                </Text>
                            </Box>



                            <Box
                                // border={"1px solid cyan"}
                                w="100%" h="8%"
                            >
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <HStack>
                                        <Box
                                            // border={"1px solid cyan"}
                                            h="auto" w="10%" display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
                                            <svg aria-label="Emoji" color='#fff' className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="40" role="img" viewBox="0 0 24 24" width="24"><title>Emoji</title><path d="M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z"></path></svg>
                                        </Box>
                                        <Box
                                            // border={"1px solid cyan"}
                                            h="auto" w="77%" display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
                                            <Input  {...register("comment")} fontFamily={"caslon-antique"} variant={"unstyled"} placeholder='Add a comment...' color={"#fff"} />
                                        </Box>
                                        <Button
                                            type="submit"
                                            style={{
                                                border: "0.5px solid #03A9F8",
                                                borderRadius: "20px",
                                                width: "13%",
                                                height: "auto",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                background: "transparent",
                                                cursor: "pointer"
                                            }}
                                        >
                                            <Text color={"#FFFFFF"} fontFamily={"caslon-antique"}>Post</Text>
                                        </Button>
                                    </HStack>
                                </form>

                            </Box>

                        </Box>


                    </Box>




                    {/* Comment Box Two Parts ending from here -----------------------------------------------------------Comment Box Two Parts ending from here -----------------------------------------------------------Comment Box Two Parts ending from here -----------------------------------------------------------Comment Box Two Parts ending from here -----------------------------------------------------------Comment Box Two Parts ending from here ----------------------------------------------------------- */}

                </Box>


            </Box >

        </>
    )
}

export default Comments
