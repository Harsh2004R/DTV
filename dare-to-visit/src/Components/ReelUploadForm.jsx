import React, { useState } from "react";
import axios from "axios";
import {
    Box,
    Input,
    Button,
    Text,
    VStack,
    useToast,
    Heading,
    Icon,
    Center,
    Spinner,
} from "@chakra-ui/react";
import { FaSkull, FaCloudUploadAlt } from "react-icons/fa";
import { BE_URL } from "../URL.js";

const ReelUploadForm = () => {
    const [videoFile, setVideoFile] = useState(null);
    const [previewURL, setPreviewURL] = useState("");
    const [caption, setCaption] = useState("");
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);

    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const userId = localStorage.getItem("userID");

        if (!videoFile || !caption || !userId) {
            setLoading(false);
            return toast({
                title: "Incomplete Ritual",
                description: "Both a video and a caption are required...",
                status: "warning",
                duration: 3300,
                isClosable: true,
            });
        }

        const formData = new FormData();
        formData.append("file", videoFile);
        formData.append("caption", caption);
        formData.append("userId", userId);

        try {
            const res = await axios.post(`${BE_URL}api/video/upload`, formData, {
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setProgress(percentCompleted);
                },
            });
            toast({
                title: "Blood Offering Accepted",
                description: "The entity is pleased with your sacrifice.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
            setCaption("");
            setVideoFile(null);
            setPreviewURL("");
        } catch (err) {
            toast({
                title: "Ritual Failed 😑",
                description: `API error or ${err}...`,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } finally {
            setLoading(false);
            setProgress(0);
        }
    };

    const handleVideoUpload = (e) => {
        const file = e.target.files[0];
        const maxSize = 30 * 1024 * 1024; // 30 MB

        if (file && file.size > maxSize) {
            toast({
                title: "Forbidden Offering",
                description: "Video must be less than 30 MB.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        setVideoFile(file);
        if (file) {
            setPreviewURL(URL.createObjectURL(file));
        } else {
            setPreviewURL("");
        }
    };

    if (loading)
        return (
            <Center flexDir="column" bg="#000" w="100%" h="100vh">
                <Text
                    fontFamily="bebas_neue"
                    color="#ddd"
                    fontSize={{ base: "20px", md: "25px", lg: "30px" }}
                    fontWeight="500"
                    mb={3}
                >
                    Uploading your video... {progress}%
                </Text>
                <Box w="80%" maxW="400px" mb={4}>
                    <Box bg="gray.700" h="6px" borderRadius="md" overflow="hidden">
                        <Box bg="blue.400" w={`${progress}%`} h="6px" />
                    </Box>
                </Box>
                <Spinner
                    size={{ base: "sm", md: "lg", lg: "lg" }}
                    color="blue.400"
                    speed="0.6s"
                    thickness="4px"
                    emptyColor="gray.200"
                    boxShadow="0 0 10px rgba(66, 153, 225, 0.6)"
                />
            </Center>
        );

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
                    border="2px solid blue"
                    rounded="xl"
                    boxShadow="0 0 30px #2196F3"
                    w={["100%", "100%", "400px"]}
                    maxW="400px"
                    textAlign="center"
                    color="red.200"
                >
                    <Heading
                        fontFamily="my"
                        size="lg"
                        mb={4}
                        color="#2196F3"
                    >
                        Upload Reels
                    </Heading>

                    <VStack spacing={4} as="form" onSubmit={handleSubmit}>
                        {previewURL ? (
                            <video
                                src={previewURL}
                                controls
                                style={{
                                    borderRadius: "8px",
                                    border: "2px solid rgb(15, 118, 253)",
                                    boxShadow: "0 0 20px crimson",
                                    width: "100%",
                                    maxHeight: "300px",
                                }}
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
                                onClick={() => document.getElementById("video-input").click()}
                                _hover={{
                                    bg: "rgba(255, 0, 0, 0.05)",
                                    borderRadius: "100%",
                                    border: "2px dashed rgb(65, 71, 72)"
                                }}
                            >
                                <VStack spacing={2}>
                                    <Icon as={FaCloudUploadAlt} boxSize={10} color="#fff" />
                                    <Text fontSize="md" color="#fff">
                                        Click to select your video
                                    </Text>
                                </VStack>
                            </Box>
                        )}

                        <Input
                            type="file"
                            id="video-input"
                            hidden
                            accept="video/*"
                            onChange={handleVideoUpload}
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
                            bg="blue.500"
                            letterSpacing={{ base: "2.5px", md: "3px", lg: "3px" }}
                            _hover={{
                                bg: "blue.400",
                                boxShadow: "0 0 20px rgb(105, 157, 224)",
                            }}
                        >
                            Sacrifice
                        </Button>
                    </VStack>
                </Box>
            </Box>
        </>
    );
};

export default ReelUploadForm;
