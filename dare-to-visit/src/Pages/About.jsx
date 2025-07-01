import { Box, Heading, Text, VStack, Image, Stack, useColorModeValue, Divider, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaSkull, FaUserSecret } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Topper from "../Components/Topper.jsx"
const MotionBox = motion(Box);

export default function About() {
    return (
        <>
            <Topper />

            <MotionBox
                px={{ base: 4, md: 16 }}
                py={{ base: "80px", md: 20 }}
                minH="100vh"
                bg="black"
                color="gray.200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                <VStack spacing={6} align="start" letterSpacing={{ base: "1px", md: "1.5px", lg: "1.5px" }} fontFamily={"quantify"}>
                    <Heading fontSize={{ base: "3xl", md: "5xl" }} color="red.500">
                        DTV – Dare To Visit
                    </Heading>

                    <Text fontSize={{ base: "md", md: "xl" }} maxW="4xl">
                        Welcome to DTV — a dimension beyond screens. A dark, psychological horror platform where fear isn't just told — it’s experienced.
                    </Text>

                    <Divider borderColor="gray.700" />

                    <VStack align="start" spacing={4}>
                        <Heading size="md" color="red.400">
                            🩸 What Is DTV?
                        </Heading>
                        <Text>
                            DTV is a horror universe like no other. We bring together:
                        </Text>
                        <Stack pl={4} spacing={2}>
                            <Text>• Terrifying horror stories</Text>
                            <Text>• Death-time prediction simulator</Text>
                            <Text>• Psychological fear games & virtual dares</Text>
                            <Text>• User-generated reels & creepy photos</Text>
                            <Text>• Exclusive access to dark web-like tours & banned content</Text>
                            <Text>• Podcasts that whisper, not talk</Text>
                        </Stack>
                    </VStack>

                    <VStack align="start" spacing={4} mt={10}>
                        <Heading size="md" color="red.400">
                            🧠 Why DTV Exists?
                        </Heading>
                        <Text maxW="4xl">
                            Most horror is predictable. DTV was born out of frustration with jump-scares and fake thrills. We wanted to build a place where fear feels **real**. Where you're not just a user — you're a **target**.
                        </Text>
                    </VStack>

                    <VStack align="start" spacing={4} mt={10}>
                        <Heading size="md" color="red.400">
                            🔒 What Awaits Behind Subscription?
                        </Heading>
                        <Stack pl={4} spacing={2}>
                            <Text>• Dark Web inspired content (onion links, movies)</Text>
                            <Text>• Private haunted virtual tours</Text>
                            <Text>• Hidden challenges that test your mind</Text>
                            <Text>• Secret podcast channels</Text>
                        </Stack>
                    </VStack>

                    <VStack align="start" spacing={4} mt={10}>
                        <Heading size="md" color="red.400">
                            🩶 Our Community
                        </Heading>
                        <Text maxW="4xl">
                            DTV lets you share your horror: post images, short reels, or mysterious footage. Our world grows with your darkness. Submit — and let others fear.
                        </Text>
                    </VStack>

                    <Divider borderColor="gray.700" my={10} />

                    {/* Creator Section */}
                    <VStack align="start" spacing={4}>
                        <Heading size="md" color="red.400">
                            <FaUserSecret /> About the Creator
                        </Heading>
                        <Stack direction={{ base: "column", md: "row" }} spacing={6} align="center">
                            <Image
                                src="https://github.com/Harsh2004R/full-stack-wev-project/blob/main/src/2025/myPIC.jpg?raw=true"
                                alt="Creator"
                                borderRadius="full"
                                boxSize="100px"
                                border="5px solid #DADADA"
                                objectFit="cover"
                            />
                            <Box maxW="3xl">
                                <Text>
                                    Built by <strong>Harsh Sharma</strong> — a full stack MERN developer, horror enthusiast, and psychological experience creator.
                                </Text>
                                <Text mt={2}>
                                    “DTV isn’t a website. It’s a game that plays with you. It’s a window into the version of you that sleeps with the lights off.”
                                </Text>
                                <Link to="https://github.com/Harsh2004R">
                                    <Flex > <Text mr="10px" textDecor={"underline"} fontWeight={"bold"} color="#03A9F4" fontSize={"12px"}>
                                        GutHub
                                    </Text>
                                        <FaGithub />
                                    </Flex>
                                </Link>
                            </Box>
                        </Stack>
                    </VStack>
                </VStack>
            </MotionBox>
        </>
    );
}
