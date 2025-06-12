// import React, { useState } from "react";
// import axios from "axios";
// import {
//     Box,
//     Input,
//     Button,
//     Text,
//     VStack,
//     Image,
//     useToast,
//     Heading,
//     Icon,
// } from "@chakra-ui/react";
// import { FaUpload } from "react-icons/fa";
// import { BE_URL } from "../URL.js";
// import Topper from "../Components/Topper.jsx"

// const UploadForm = () => {
//     const [file, setFile] = useState(null);
//     const [previewURL, setPreviewURL] = useState("");
//     const [caption, setCaption] = useState("");
//     const toast = useToast();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!file || !caption) {
//             return toast({
//                 title: "Missing fields",
//                 description: "Please provide both an image and a caption.",
//                 status: "warning",
//                 duration: 3000,
//                 isClosable: true,
//             });
//         }

//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("caption", caption);

//         try {
//             const res = await axios.post(`${BE_URL}api/post/upload`, formData);
//             toast({
//                 title: "Success!",
//                 description: "Your post was uploaded successfully.",
//                 status: "success",
//                 duration: 3000,
//                 isClosable: true,
//             });
//             setCaption("");
//             setFile(null);
//             setPreviewURL("");
//         } catch (err) {
//             toast({
//                 title: "Upload Failed",
//                 description: "There was a problem uploading your post.",
//                 status: "error",
//                 duration: 3000,
//                 isClosable: true,
//             });
//             console.error(err);
//         }
//     };

//     const handleFileChange = (e) => {
//         const selected = e.target.files[0];
//         setFile(selected);
//         if (selected) {
//             setPreviewURL(URL.createObjectURL(selected));
//         } else {
//             setPreviewURL("");
//         }
//     };

//     return (
//         <>
//             <Topper />
//             <Box
//                 bg="gray.100"
//                 minH="100vh"
//                 display="flex"
//                 alignItems="center"
//                 justifyContent="center"
//                 px={4}
//             >
//                 <Box
//                     bg="white"
//                     p={6}
//                     rounded="xl"
//                     boxShadow="lg"
//                     w={["100%", "100%", "400px"]}
//                     maxW="400px"
//                     textAlign="center"
//                 >
//                     <Heading size="md" mb={4}>
//                         Create a new Post
//                     </Heading>

//                     <VStack spacing={4} as="form" onSubmit={handleSubmit}>
//                         {previewURL ? (
//                             <Image
//                                 src={previewURL}
//                                 alt="Preview"
//                                 borderRadius="md"
//                                 boxSize="300px"
//                                 objectFit="cover"
//                             />
//                         ) : (
//                             <Box
//                                 border="2px dashed #CBD5E0"
//                                 borderRadius="md"
//                                 w="100%"
//                                 h="300px"
//                                 display="flex"
//                                 alignItems="center"
//                                 justifyContent="center"
//                                 cursor="pointer"
//                                 _hover={{ borderColor: "blue.400" }}
//                                 onClick={() => document.getElementById("file-input").click()}
//                             >
//                                 <VStack spacing={2}>
//                                     <Icon as={FaUpload} boxSize={8} color="gray.400" />
//                                     <Text fontSize="sm" color="gray.500">
//                                         Click to select an image
//                                     </Text>
//                                 </VStack>
//                             </Box>
//                         )}

//                         <Input
//                             type="file"
//                             id="file-input"
//                             hidden
//                             accept="image/*"
//                             onChange={handleFileChange}
//                         />

//                         <Input
//                             placeholder="Write a caption..."
//                             value={caption}
//                             onChange={(e) => setCaption(e.target.value)}
//                             focusBorderColor="blue.400"
//                         />

//                         <Button
//                             colorScheme="blue"
//                             type="submit"
//                             width="100%"
//                             leftIcon={<FaUpload />}
//                             isDisabled={!file || !caption}
//                         >
//                             Upload
//                         </Button>
//                     </VStack>
//                 </Box>
//             </Box>
//         </>
//     );
// };

// export default UploadForm;















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
    chakra,
} from "@chakra-ui/react";
import { FaSkull, FaCloudUploadAlt } from "react-icons/fa";
import { BE_URL } from "../URL";
import Topper from "../Components/Topper.jsx"

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [previewURL, setPreviewURL] = useState("");
    const [caption, setCaption] = useState("");
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file || !caption) {
            return toast({
                title: "Incomplete Ritual",
                description: "The ancient gods demand both a file and a caption.",
                status: "warning",
                duration: 3000,
                isClosable: true,
            });
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("caption", caption);

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
            setPreviewURL("");
        } catch (err) {
            toast({
                title: "Ritual Failed",
                description: "A dark force blocked the upload...",
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

    return (
        <> <Topper />
            <Box
                bgGradient="linear(to-b, black, #1a0000)"
                minH="100vh"
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
                    <Heading fontFamily={"my"} size="lg" mb={4} color="red.400" textShadow="0 0 5px red">
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
                                border="2px dashed crimson"
                                borderRadius="md"
                                w="100%"
                                h="300px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                cursor="pointer"
                                onClick={() => document.getElementById("file-input").click()}
                                _hover={{ bg: "rgba(255, 0, 0, 0.05)", borderColor: "red.500" }}
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

export default UploadForm;















