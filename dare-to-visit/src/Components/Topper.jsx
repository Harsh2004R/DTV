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
    Stack,
    Center,
    Image,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { HiOutlineLogin, HiOutlineLogout } from "react-icons/hi";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { MdWorkspacePremium } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import AuthContext from '../Context/AuthContext';
const Links = [
    { name: 'Profile', to: '/profile' },
    { name: 'Videos', to: '/videos' },
    { name: 'Podcast', to: '/podcast' },
    { name: 'Reels', to: '/social' },
    { name: 'Dark-web', to: '/darkweb' },
    { name: '3D Tour', to: '/tour' },
    { name: 'Death-Date', to: '/deathdate' },
    { name: 'About us', to: '/about' },
    { name: 'Contact', to: '/contact' },
];
const NavLink = ({ to, children }) => {
    return (
        <Link to={to}>
            <Box
                px={3.5}
                py={1}
                rounded="md"
                _hover={{
                    textDecoration: 'none',
                    textColor: "#448AFF",
                    boxShadow: "#aaa 0px 0.3px 0.2px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
                }}
                transition={"0.6s ease"}
            >
                {children}
            </Box>
        </Link>
    );
}

export default function Simple() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { logout, isAuth, navTologin } = useContext(AuthContext);
    console.log("navbar", isAuth)
    return (
        <>
            <Box bg="#000000" px={2} w="100%" zIndex={"10000"} position={"fixed"}>
                <Flex h={16} alignItems="center" justifyContent="space-between">
                    <IconButton
                        size="md"
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label="Open Menu"
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} w="100%" alignItems="center">
                        < HStack ml="100px" as="nav" spacing={4} >
                            <Text fontSize={"17px"} mr="10px" ml="10px" color="#aaa" display={{ base: 'none', md: 'flex' }} _hover={{
                            }}>{Links.map((link, idx) => (
                                <NavLink key={idx} to={link.to}>{link.name}</NavLink>
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
                                zIndex={"999"}
                                borderBottom="2px solid #FF0000"
                                w={{ base: "100px", md: "120px", lg: "150px" }} h={{ base: "100px", md: "120px", lg: "150px" }} mt={{ base: "50px", md: "100px", lg: "100px" }}
                                transition={"0.9s ease"}
                                minW={"35px"} minH="35px"
                            >
                                <Image objectFit={"cover"} rounded="full" w={{ base: "100px", md: "120px", lg: "150px" }} h={{ base: "100px", md: "120px", lg: "150px" }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiZqwruSkr4ONamw9vTNbQc3hoaOcm04bONA&s" />
                            </MenuButton>
                            <MenuList>
                                <Link to="/profile"><Flex w="80%">
                                    <MenuItem fontWeight={"bold"} flex={1}>Profile</MenuItem>
                                    <Center>
                                        <FaUserEdit size="20px" />
                                    </Center>

                                </Flex></Link>
                                <Flex
                                    onClick={() => isAuth === true ? logout() : navTologin("/otp")}
                                    w="80%">
                                    <MenuItem fontWeight={"bold"} flex={1}> {isAuth === true ? "Log out" : "Log In"}</MenuItem>
                                    <Center>
                                        {isAuth === true ? <HiOutlineLogout color='red' size="20px" /> : <HiOutlineLogin color='green' size="20px" />}
                                    </Center>

                                </Flex>
                                <MenuDivider />
                                <Link to="/pay"> <Flex w="80%">
                                    <MenuItem fontWeight={"bold"} flex={1}>Premium</MenuItem>

                                    <Center>
                                        <MdWorkspacePremium size="20px" color='blue' />

                                    </Center>

                                </Flex></Link>

                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen && (
                    <Box pb={4} display={{ md: 'none', lg: "none" }}>
                        <Stack color="#aaa" pt="20px" pb="25px" mt="20px" mb="20px" borderRadius={"lg"} border={".5px solid #443"} as="nav" spacing={4}>
                            {Links.map((link) => (
                                <NavLink key={link.name} to={link.to}>{link.name}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                )}
            </Box >

            {/* <Box p={4}>Main Content Here</Box> */}
        </>
    )
}
