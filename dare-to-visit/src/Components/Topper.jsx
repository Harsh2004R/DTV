'use client'
import { useContext } from 'react';
import {
    Box,
    Flex,
    Avatar,
    HStack,
    Text,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Center,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { HiOutlineLogin, HiOutlineLogout } from "react-icons/hi";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { MdWorkspacePremium } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import AuthContext from '../Context/AuthContext';
const Links = ['Dashboard', 'Projects', 'Team']

const NavLink = ({ children }) => {
    return (
        <Box
            as="a"
            px={2}
            py={1}
            rounded="md"
            _hover={{
                textDecoration: 'none',
                textColor: "#fff",
                boxShadow: "#d347ec 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            }}
            href="#"
        >
            {children}
        </Box>
    )
}

export default function Simple() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { logout, isAuth } = useContext(AuthContext);
    console.log("navbar", isAuth)
    return (
        <>
            <Box bg="#000000" px={4}>
                <Flex h={16} alignItems="center" justifyContent="space-between">
                    <IconButton
                        size="md"
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label="Open Menu"
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} w="100%" alignItems="center">
                        {/* <Box>Logo</Box> */}
                        <HStack ml="100px" as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
                            <Text fontSize={"18px"} mr="10px" ml="10px" color="#aaa" _hover={{
                                textColor: "black"
                            }}>
                                {Links.map((link) => (
                                    <NavLink key={link}>{link}</NavLink>
                                ))}
                            </Text>

                        </HStack>
                    </HStack>
                    <Flex alignItems="center">
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded="full"
                                variant="link"
                                cursor="pointer"
                                _hover={{
                                    boxShadow: "#ccc 0px 26px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                                }}
                                transition={"0.9s ease"}
                                minW={0}
                            >
                                <Avatar
                                    size="35px"
                                    border="1px solid #FF0000"
                                    p="1px"
                                    mt="100px"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZqwruSkr4ONamw9vTNbQc3hoaOcm04bONA&s"
                                // src="data:image/jpeg;base64,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"
                                // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3sin68zzmEk5xy9rEuGWDfhyvT-07dKO5jw&s"
                                />
                            </MenuButton>
                            <MenuList>
                                <Flex w="80%">
                                    <MenuItem fontWeight={"bold"} flex={1}><Link to="/profile">Profile</Link></MenuItem>
                                    <Center>
                                        <FaUserEdit size="20px" />
                                    </Center>

                                </Flex>
                                <Flex w="80%">
                                    <MenuItem fontWeight={"bold"} onClick={logout} flex={1}> {isAuth === true ? "Log out" : "Log In"}</MenuItem>
                                    <Center>
                                        {isAuth === true ? <HiOutlineLogout color='red' size="30px" /> : <HiOutlineLogin color='green' size="20px" />}
                                    </Center>

                                </Flex>
                                <MenuDivider />
                                <Flex w="80%">
                                    <MenuItem fontWeight={"bold"} flex={1}>Premium</MenuItem>

                                    <Center>
                                        <MdWorkspacePremium size="20px" color='blue' />

                                    </Center>

                                </Flex>

                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen && (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack color="#aaa" pt="20px" pb="25px" mt="20px" mb="20px" borderRadius={"lg"} border={".5px solid #443"} as="nav" spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                )}
            </Box>

            {/* <Box p={4}>Main Content Here</Box> */}
        </>
    )
}
