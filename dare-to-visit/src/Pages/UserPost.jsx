import React, { useEffect, useState } from "react";
import {
    Box,
    SimpleGrid,
    Spinner,
    Text,
    Heading,
    VStack,
    Avatar,
    Flex,
    IconButton,
    Image,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Heading as CardHeading,
} from "@chakra-ui/react";
import Topper from "../Components/Topper.jsx"
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from "axios";
import { BE_URL } from "../URL.js";

const UserPost = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data } = await axios.get(`${BE_URL}api/uploaded-post/get`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                });
                setPosts(data.data);
            } catch (err) {
                console.error("Error fetching posts:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return (
        <>
            <Topper />

            <Box p="4" pt="60px" bg="#000" minH={"100vh"}>

                <Heading color="grey" fontSize="2xl" mb={6} textAlign="center">
                    Your Posts
                </Heading>

                {loading ? (
                    <VStack mt={10}>
                        <Spinner size="xl" />
                        <Text>Loading your posts...</Text>
                    </VStack>
                ) : posts.length === 0 ? (
                    <Text  color="#fff" letterSpacing={"1px"} fontFamily={"caslon-antique"} textAlign="center" fontSize="lg">
                        No posts to show yet.
                    </Text>
                ) : (
                    <SimpleGrid
                        columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
                        {posts.map((post) => (
                            <Card
                                key={post._id}
                                // border={"2px solid blue"}
                                transition="1.3s ease"
                                maxW="md"
                                h={{ base: "auto", md: "auto", lg: "auto" }}
                                borderRadius={{ base: "0px", md: "md" }}
                                _hover={{ boxShadow: "0 0 30px #32434a" }}
                                // bg="#000"
                            >
                                <CardHeader  >
                                    <Flex spacing="4">
                                        <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                                            <Avatar
                                                name={post.uploadedBy.name}
                                                src={post.uploadedBy.profile_picture}
                                            />
                                            <Box>
                                                <CardHeading
                                                    size="sm"
                                                    fontSize={{ base: "16px", md: "20px" }}
                                                >
                                                    {post.uploadedBy.name}
                                                </CardHeading>
                                                <Text fontSize={{ base: "12px", md: "15px" }} color="#03A9F4">
                                                    Uploaded: {new Date(post.createdAt).toLocaleDateString()}
                                                </Text>
                                            </Box>
                                        </Flex>
                                        <IconButton
                                            variant="ghost"
                                            colorScheme="gray"
                                            aria-label="See menu"
                                            icon={<BsThreeDotsVertical />}
                                        />
                                    </Flex>
                                </CardHeader>

                                {post.url.endsWith(".mp4") ? (
                                    <video
                                        src={post.url}
                                        controls
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            objectFit: "cover",
                                            borderBottom: "1px solid #e2e8f0",
                                        }}
                                    />
                                ) : (
                                    <Box
                                        w={{ base: "auto", md: "auto", lg: "auto" }}
                                        minH={{ base: "200px", md: "220px", lg: "250px" }}
                                        bg="gray.100"
                                        overflow="hidden"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                    // border={"1px solid cyan"}
                                    >
                                        <Image
                                            src={post.url}
                                            alt="User Upload"
                                            objectFit="contain"
                                            h={{ base: "200px", md: "220px", lg: "250px" }}
                                        />
                                    </Box>

                                )}
                                <CardBody
                                    // border="1px solid yellow" 
                                    h="auto">
                                    {post.caption && (
                                        <Text fontWeight="bold" fontSize={{ base: "16px", md: "20px", lg: "25px" }} color="#E91E63">
                                            {post.caption}

                                        </Text>
                                    )}
                                    <Text fontFamily="my" fontSize={{ base: "12px", md: "16px" }}>
                                        {post.comments?.[0]?.text || "Thanks for sharing we us..."}
                                    </Text>
                                </CardBody>
                                <CardFooter
                                    justify="space-between"
                                    flexWrap="wrap"
                                    sx={{
                                        "& > button": {
                                            minW: "80px",
                                        },
                                    }}
                                    bg="#000"
                                    border="1px solid #9B9F93"
                                >
                                    <Button border={"none"} flex="1" variant="ghost" _hover={{ backgroundColor: "#000", border: "0.2px solid rgb(57, 99, 132)" }}>
                                        <svg color='#fff' aria-label="Like" className="x1lliihq x1n2onr6 xyb1xck" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Like</title><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                                        <Text ml="5px" fontSize={{ base: "xs" }} color="#fff">{post.likes || 0}</Text>

                                    </Button>
                                    <Button border={"none"} flex="1" variant="ghost" _hover={{ backgroundColor: "#000", border: "0.2px solid rgb(57, 99, 132)" }}>
                                        <svg color='#fff' aria-label="Comment" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Comment</title><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>



                                        <Text ml="5px" fontSize={{ base: "xs" }} color="#fff">{post.comments.length || "No"}</Text>
                                    </Button>
                                    <Button border={"none"} flex="1" variant="ghost" _hover={{ backgroundColor: "#000", border: "0.2px solid rgb(57, 99, 132)" }}>
                                        <svg color='#fff' aria-label="Share Post" className="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Share Post</title><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                                        <Text ml="5px" fontSize={{ base: "xs" }} color="#fff">Share</Text>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </SimpleGrid>
                )}
            </Box >
        </>
    );
};

export default UserPost;
