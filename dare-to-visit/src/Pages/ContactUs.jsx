import { useState } from 'react';
import {
    Box,
    Input,
    Textarea,
    Button,
    Text,
    Heading,
    useMediaQuery,
} from '@chakra-ui/react';



const ContactUs = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

    return (
        <Box bg="#444442" pt="85px" minH="100vh" p={isLargerThan768 ? '10' : '0'} px={isLargerThan768 ? '4' : '0'}>
            <Box className="container" color="white">
                <Box textAlign="center" mb={4}>
                    <Heading fontFamily="Poppins, sans-serif, arial" fontSize="72px" fontWeight="600">
                        contact us
                    </Heading>
                </Box>

                <Box textAlign="center" mb={6}>
                    <Text fontFamily="Roboto, sans-serif, arial" fontSize="20px" color="#9b9b9b">
                        We'd love to hear from you!
                    </Text>
                </Box>

                <Box
                    className="input-container"
                    mx="auto"
                    maxW="650px"
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="space-between"
                >
                    {/* Name Field */}
                    <Box w="100%" mb={4} position="relative">
                        <Input
                            type="text"
                            required
                            p="30px"
                            bg="#2d2d2d"
                            color="white"
                            borderRadius="4px"
                            _focus={{ outline: 'none' }}
                        />
                        <Text
                            as="label"
                            position="absolute"
                            top="10px"
                            left="30px"
                            color="#999"
                            fontSize="1rem"
                            pointerEvents="none"
                        >
                            Name
                        </Text>
                    </Box>

                    {/* Email */}
                    <Box w={isLargerThan768 ? '48%' : '100%'} mb={4} position="relative">
                        <Input
                            type="text"
                            required
                            p="30px"
                            bg="#2d2d2d"
                            color="white"
                            borderRadius="4px"
                            _focus={{ outline: 'none' }}
                        />
                        <Text
                            as="label"
                            position="absolute"
                            top="10px"
                            left="30px"
                            color="#999"
                            fontSize="1rem"
                            pointerEvents="none"
                        >
                            Email
                        </Text>
                    </Box>

                    {/* Phone Number */}
                    <Box w={isLargerThan768 ? '48%' : '100%'} mb={4} position="relative">
                        <Input
                            type="text"
                            required
                            p="30px"
                            bg="#2d2d2d"
                            color="white"
                            borderRadius="4px"
                            _focus={{ outline: 'none' }}
                        />
                        <Text
                            as="label"
                            position="absolute"
                            top="10px"
                            left="30px"
                            color="#999"
                            fontSize="1rem"
                            pointerEvents="none"
                        >
                            Phone Number
                        </Text>
                    </Box>

                    {/* Message */}
                    <Box w="100%" mb={4} position="relative">
                        <Textarea
                            required
                            p="30px"
                            minH="15em"
                            bg="#2d2d2d"
                            color="white"
                            borderRadius="4px"
                            _focus={{ outline: 'none' }}
                        />
                        <Text
                            as="label"
                            position="absolute"
                            top="10px"
                            left="30px"
                            color="#999"
                            fontSize="1rem"
                            pointerEvents="none"
                        >
                            Message
                        </Text>
                    </Box>

                    {/* Submit Button */}
                    <Box w="100%" textAlign={isLargerThan768 ? 'right' : 'center'}>
                        <Button
                            borderRadius="60px"
                            bg="#4b8cfb"
                            color="white"
                            px="35px"
                            py="7px"
                            fontSize="18px"
                            boxShadow="0 2px 5px rgba(0,0,0,0.06), 0 2px 10px rgba(0,0,0,0.07)"
                            transition="all 300ms ease"
                            _hover={{
                                transform: 'translateY(1px)',
                                boxShadow: '0 1px 1px rgba(0,0,0,0.10), 0 1px 1px rgba(0,0,0,0.09)',
                            }}
                        >
                            Send Message
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default ContactUs;
