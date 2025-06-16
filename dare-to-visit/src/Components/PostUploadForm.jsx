import React, { useState } from "react";
import axios from "axios";
import {
    Box,
    Input,
    Button,
    Text,
    VStack,
    Image,
    useToast,
    Heading,
    Icon,
    Center,
    Spinner,
} from "@chakra-ui/react";
import { FaSkull, FaCloudUploadAlt } from "react-icons/fa";
import { BE_URL } from "../URL.js";
import Topper from "./Topper.jsx"

const PostUploadForm = () => {
    const [file, setFile] = useState(null);
    const [previewURL, setPreviewURL] = useState("");
    const [caption, setCaption] = useState("");
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const userId = localStorage.getItem("userID");
        if (!file || !caption || !userId) {
            setLoading(false)
            return toast({
                title: "Incomplete Ritual",
                description: "Both a file and a caption required...",
                status: "warning",
                duration: 3300,
                isClosable: true,
            });

        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("caption", caption);
        formData.append("userId", userId);

        try {

            const res = await axios.post(`${BE_URL}api/post/upload`, formData);
            toast({
                title: "Blood Offering Accepted",
                description: "The entity is pleased with your sacrifice.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            setCaption("");
            setFile(null);
            setLoading(false)
            setPreviewURL("");
        } catch (err) {
            setLoading(false);
            toast({
                title: "Ritual Failed 😑",
                description: `API error or ${err}...`,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    const handleFileChange = (e) => {
        const selected = e.target.files[0];
        setFile(selected);
        if (selected) {
            setPreviewURL(URL.createObjectURL(selected));
        } else {
            setPreviewURL("");
        }
    };
    if (loading) return <Center bg="#000" w="100%" h="100vh">
        <Text fontFamily={"bebas_neue"} color="#ddd" fontSize={{ base: "20px", md: "25px", lg: "30px" }} fontWeight={"500"}>
            Uploading your post...
        </Text>
        <Spinner
            ml={{ base: "10px", md: "20px", lg: "20px" }}
            size={{ base: "sm", md: "lg", lg: "lg" }}
            color="blue.400"
            speed="0.6s"
            thickness="4px"
            emptyColor="gray.200"
            boxShadow="0 0 10px rgba(66, 153, 225, 0.6)" // blue glow
        />
    </Center>
    return (
        <>
            <Box
                bgGradient="linear(to-b, black, #1a0000)"
                minH="auto"
                display="flex"
                alignItems="center"
                justifyContent="center"
                px={4}
                fontFamily="bebas_neue"
            >
                <Box
                    bg="rgba(0, 0, 0, 0.85)"
                    p={6}
                    border="2px solid red"
                    rounded="xl"
                    boxShadow="0 0 30px red"
                    w={["100%", "100%", "400px"]}
                    maxW="400px"
                    textAlign="center"
                    color="red.200"
                >
                    <Heading fontFamily={"my"} size="lg" mb={4} color="red.500" >
                        BLOOD OFFERING PORTAL
                    </Heading>

                    <VStack spacing={4} as="form" onSubmit={handleSubmit}>
                        {previewURL ? (
                            <Image
                                src={previewURL}
                                alt="Preview"
                                borderRadius="md"
                                boxSize="300px"
                                objectFit="cover"
                                border="2px solid #ff0000"
                                boxShadow="0 0 20px crimson"
                            />
                        ) : (
                            <Box

                                transition={"1.8s ease"}
                                w={{ base: "280px", md: "350px", lg: "350px" }}
                                h={{ base: "280px", md: "350px", lg: "350px" }}
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                cursor="pointer"
                                onClick={() => document.getElementById("file-input").click()}
                                _hover={{
                                    bg: "rgba(255, 0, 0, 0.05)",
                                    borderRadius: "100%",
                                    border: "2px dashed rgb(65, 71, 72)"
                                }}
                            >
                                <VStack spacing={2}>
                                    <Icon as={FaCloudUploadAlt} boxSize={10} color="red.500" />
                                    <Text fontSize="md" color="#fff">
                                        Click to select your offering (post)
                                    </Text>
                                </VStack>
                            </Box>
                        )}

                        <Input
                            type="file"
                            id="file-input"
                            hidden
                            accept="image/*"
                            onChange={handleFileChange}
                        />

                        <Input
                            placeholder="Etch your final words..."
                            letterSpacing={{ base: "2.5px", md: "4px", lg: "5px" }}
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                            focusBorderColor="#999"
                            bg="blackAlpha.500"
                            color="grey"
                            _placeholder={{ color: "grey" }}
                        />

                        <Button
                            colorScheme="red"
                            type="submit"
                            width="100%"
                            leftIcon={<FaSkull />}
                            bg="red.700"
                            letterSpacing={{ base: "2.5px", md: "3px", lg: "3px" }}
                            _hover={{
                                bg: "red.900",
                                boxShadow: "0 0 20px crimson",
                            }}
                        // fontWeight="bold"
                        >
                            Sacrifice
                        </Button>
                    </VStack>
                </Box>
            </Box>
        </>
    );
};

export default PostUploadForm;















