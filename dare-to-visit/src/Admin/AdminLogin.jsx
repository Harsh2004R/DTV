import React, { useEffect, useContext } from 'react';
import {
    Box, Input, Text, Button, FormControl, keyframes,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';

const backgroundAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 4px #FF1744; }
  50% { box-shadow: 0 0 18px #F50057; }
  100% { box-shadow: 0 0 4px #FF1744; }
`;

const AdminLogin = () => {
    const { isAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuth) navigate('/');
    }, [isAuth]);



    return (
        <>

            <Box
                w="100%"
                h="100vh"
                bgGradient="linear(to-r, #0f0f0f, #1a1a1a, #000000)"
                backgroundSize="400% 400%"
                animation={`${backgroundAnimation} 15s ease infinite`}
                display="flex"
                alignItems="center"
                justifyContent="center"
                overflow="hidden"
            >
                <Box
                    bg="rgba(255,255,255,0.05)"
                    backdropFilter="blur(8px)"
                    border="1px solid rgba(255,255,255,0.1)"
                    borderRadius="lg"
                    p={8}
                    w={{ base: "90%", md: "400px" }}
                    boxShadow="0 0 20px rgba(255,0,0,0.3)"
                >
                    <Text
                        fontSize="2xl"
                        color="red.400"
                        fontWeight="bold"
                        textAlign="center"
                        mb={6}
                        fontFamily="monospace"
                        letterSpacing="2px"
                    >
                        Admin Login
                    </Text>

                    <form >
                        <FormControl mb={4}>
                            <Input
                                placeholder="Admin Email"
                                type="email"
                                textAlign="center"
                                variant="flushed"
                                color="gray.200"
                                _placeholder={{ color: 'gray.400' }}
                            />
                        </FormControl>
                        <FormControl mb={6}>
                            <Input
                                placeholder="Password"
                                type="password"
                                textAlign="center"
                                variant="flushed"
                                color="gray.200"
                                _placeholder={{ color: 'gray.400' }}
                            />
                        </FormControl>
                        <Button
                            type="submit"
                            w="100%"
                            animation={`${glowAnimation} 2s infinite`}
                            bg="transparent"
                            border="1px solid #F50057"
                            color="#F50057"
                            _hover={{ bg: "#F50057", color: "#000" }}
                        >
                            Enter Admin
                        </Button>
                    </form>

                    <Link to="/signup">
                        <Text mt={4} fontSize="sm" color="gray.500" textAlign="center">
                            Not registered yet? <span style={{ color: '#FF4081' }}>Signup</span>
                        </Text>
                    </Link>
                    <Text fontSize="xs" color="gray.500" mt={2} textAlign="center">
                        © {new Date().getFullYear()} DTV Admin. All rights reserved.
                    </Text>
                </Box>
            </Box>

        </>
    );
};

export default AdminLogin;

