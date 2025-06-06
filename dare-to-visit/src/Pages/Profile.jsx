import React, { useEffect, useState } from 'react';
import {
    IconButton,
    Avatar,
    Box,
    CloseButton,
    Flex,
    HStack,
    VStack,
    Icon,
    useColorModeValue,
    Text,
    Drawer,
    DrawerContent,
    useDisclosure,
    Divider,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Heading,
    FormControl,
    FormLabel,
    Input,
    Button,
    Spinner,
    Center
}
    from '@chakra-ui/react';
import Navbar2 from "../Components/Navbar2";
import { Link, useParams } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import { FiMenu, FiChevronDown, } from 'react-icons/fi';
import { FaBell, FaCamera, FaShare, FaSignOutAlt, FaUsers, FaVideo } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { BE_URL } from "../URL.js"
import axios from "axios"



const LinkItems = [
    { name: '', icon: "", },
    { name: 'Post', icon: <FaCamera />, nav: "/ScareOnAdmin" },
    { name: 'Premium', icon: <FaVideo />, nav: "" },
    { name: 'Share', icon: <FaShare />, nav: "" },
    { name: 'SignOut', icon: <FaSignOutAlt />, nav: "" },
];

const SidebarContent = ({ onClose, ...rest }) => {




    return (


        <>



            <Navbar2 />


            <Box
                transition="3s ease"
                bg={useColorModeValue('#212121', 'white.900')}
                borderRight="1px"
                borderRightColor={useColorModeValue('#999', '#999')}
                w={{ base: 'full', md: 60 }}
                pos="fixed"
                h="full"
                // border="1px solid red"
                {...rest}
            >
                <Flex h="20" alignItems="center" mx="8px" justifyContent="space-between">
                    <Box mt="20px" w="220px" borderRadius={"2xl"}
                        h="80px" backgroundColor={"#eee"} display={"flex"}
                        alignItems={"center"}
                    >

                        <Box w="50px" h="50px" ml={"10px"} >
                            <Avatar
                                border="2px solid lime"
                                w="100%" h="100%"
                                src={
                                    // 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRerEshbyy1TbPEN4QnULeyJYba7IZfxS5GJH6x17XGh8DyLmjO'
                                    "https://img.freepik.com/premium-photo/creepy-looking-man-with-creepy-face_846204-1055.jpg?ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740"
                                }
                            />
                        </Box>
                        <Box w="auto" h="50px" color={"#000000"} fontFamily={"caslon-antique"} display={"flex"}
                            alignItems={"center"} ml={"10px"} fontWeight={"bold"}>Jaydon Frankie</Box>

                    </Box>
                    <CloseButton border="2px solid #FFFFFF" color={"#FFFFFF"} bgColor={"#6b947f"} display={{ base: 'flex', md: 'none' }} onClick={onClose} />
                </Flex>
                {LinkItems.map((link, index) => (
                    <React.Fragment key={link.name}>

                        <ChakraLink
                            as={Link}
                            to={link.nav}
                            style={{ textDecoration: 'none', color: 'white' }}
                            _hover={{ bgColor: "rgba(0, 82, 73, 1)" }}
                            display="flex"
                            alignItems="center"
                            // border="1px solid red"
                            paddingBottom="15px"
                            paddingTop="15px"
                            color="#FFFFFF"
                            ml="10px"
                            mr="10px"
                        >
                            <div style={{ marginRight: '10px' }}>{link.icon}</div>
                            <div>{link.name}</div>
                        </ChakraLink>

                        {index < LinkItems.length - 1 && <Divider borderColor={"#6b947f"} />}
                    </React.Fragment>
                ))}

                <Divider borderColor={"#6b947f"} />

            </Box>


        </>
    );
};

const NavItem = ({ icon, children, ...rest }) => {
    return (
        <Box
            //  border={"1px solid yellow"}
            as="a"
            href="#"
            style={{ textDecoration: 'none' }}
            _focus={{ boxShadow: 'none' }}
        >
            <Flex
                align="center"
                p="3.5"
                mx="2"
                borderRadius="none"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: '#6b947f',
                    color: 'white',
                }}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Box>
    );
};

const MobileNav = ({ onOpen, ...rest }) => {
    return (
        <Flex
            zIndex={"1000"}
            // border={"1px solid yellow"}
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            w={{ base: "100%", md: "85%" }}
            position="fixed"
            top="0"
            left="0"
            alignItems="center"
            bg={useColorModeValue('#212121', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}

        >
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                border="2px solid #FFFFFF"
                bgColor={"#6b947f"}
                color="#FFFFFF"
                icon={<FiMenu />}
            />
            <HStack spacing={{ base: '0', md: '4' }}>
                <IconButton _hover={{ color: "#999" }} borderRadius={"50%"} size="md" variant="unstyled" color={{ base: "#6b947f", md: "#FFFFFF" }} aria-label="open menu" icon={<FaBell />} />
                <IconButton _hover={{ color: "#999" }} borderRadius={"50%"} size="md" variant="unstyled" color={{ base: "#6b947f", md: "#FFFFFF" }} aria-label="open menu" icon={<FaUsers />} />

                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton color="#fff" py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                            <HStack>
                                <Avatar
                                    size={{ base: "sm", md: "md" }}
                                    src={
                                        "https://img.freepik.com/premium-photo/creepy-looking-man-with-creepy-face_846204-1055.jpg?ga=GA1.1.1559264531.1691417508&semt=ais_items_boosted&w=740"
                                    }
                                />
                                <VStack
                                    display={{ base: 'none', md: 'flex' }}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2"
                                >
                                    <Text color="#FFFFFF" fontSize="sm">Justina Clark</Text>
                                    <Text color="#6b947f" fontSize="xs" >
                                        user name
                                    </Text>
                                </VStack>
                                <Box display={{ base: 'none', md: 'flex' }}>
                                    <FiChevronDown />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
                            h={{ base: "auto", md: "auto" }}
                            bgColor={useColorModeValue('#212121')}
                            borderColor={useColorModeValue('gray.200', 'gray.700')}

                        >
                            <MenuItem m="3px" color="#fff" _hover={{ bg: `linear-gradient(to right, #000000, #FF0000, #000000)`, boxShadow: '0 0 2px 3px #F5F5F5' }} bgColor='#212121'>Profile</MenuItem>
                            <MenuItem m="3px" color="#fff" _hover={{ bg: `linear-gradient(to right, #000000, #FF0000, #000000)`, boxShadow: '0 0 2px 3px #F5F5F5' }} bgColor='#212121'>Settings</MenuItem>
                            <MenuItem m="3px" color="#fff" _hover={{ bg: `linear-gradient(to right, #000000, #FF0000, #000000)`, boxShadow: '0 0 2px 3px #F5F5F5' }} bgColor='#212121'>Premimum Zone</MenuItem>
                            <MenuDivider />
                            <MenuItem m="3px" color="#fff" _hover={{ bg: `linear-gradient(to right, #000000, #FF0000, #000000)`, boxShadow: '0 0 2px 3px #F5F5F5' }} bgColor='#212121'>Sign out</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};

const Profile = () => {
    const { id } = useParams();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [loading, setLoading] = useState(true);
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const [usersData, setUsersData] = useState({})
    useEffect(() => {
        fetchUsersData();
    }, []);

    const fetchUsersData = async () => {
        try {
            const res = await axios.get(`${BE_URL}api/user/get/${id}`);
            setUsersData(res.data?.data || {});
            // console.log(usersData)
            const data = res.data?.data || {};
            reset(data)
            setLoading(false)
        } catch (error) {
            console.error("Error fetching user data:", error);
            setLoading(true)
        }
    };


    const onSubmit = async (data) => {
        try {
            const res = await axios.patch(`${BE_URL}api/user/edit/${id}`, data);
            setLoading(true);
            // console.log("Updated successfully:", res.data);
            fetchUsersData();
            reset();
        } catch (error) {
            setLoading(false);
            console.error("Error updating user:", error.message);
        }
    };


    if (loading) return <Center h='100vh' w="100%" bg="#222">
        <Spinner color="skyblue" size="lg" />
    </Center>

    return (
        <>
            <Box minH="100vh">
                <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
                <Drawer
                    isOpen={isOpen}
                    placement="left"
                    onClose={onClose}
                    returnFocusOnClose={false}
                    onOverlayClick={onClose}
                    size="full"
                >
                    <DrawerContent>
                        <SidebarContent onClose={onClose} />
                    </DrawerContent>
                </Drawer>
                {/* mobilenav */}
                <MobileNav onOpen={onOpen} />
                <Box ml={{ base: 0, md: 60 }} bg="#000000" p="7" h="auto"
                // border="1px solid red"
                >
                    <Box
                        w="100%" mt="50px" h="auto"
                    // border="1px solid cyan"
                    >
                        {/* Profile image Section here-------------------------------------------------Profile image Section here-----------------------------------------------------------------------Profile image Section here */}
                        <Heading color={"#FFFFFF"} mb="10px" fontFamily={"quantify"}>Profile</Heading>
                        <Box
                            backgroundColor="rgba(0, 82, 73, 1)" w="100%" h={{ base: "25vh", md: "35vh" }} borderRadius={"xl"} position="relative">
                            <Box backgroundColor="#fff" w="100%" h={{ base: "5vh", md: "8vh" }} position="absolute" bottom="0" borderBottomLeftRadius="xl" borderBottomRightRadius="xl"></Box>
                            <Box display={"flex"} flexDirection={{ base: "column", md: "row" }} w={{ base: "120px", md: "380px" }} h={{ base: "120px", md: "150px" }} bottom={{ base: "12", md: "7" }} left={{ base: "30%", md: "10" }}
                                // border={"1px solid red"}
                                position="absolute" zIndex={"0"}>

                                <Box
                                    // border={"1px solid cyan"}
                                    w={{ base: "80px", md: "120px" }} m={{ base: "auto", md: "3" }} borderRadius={"50%"} h={{ base: "80px", md: "120px" }} >

                                    <Avatar
                                        w="100%" h="100%"
                                        src={
                                            usersData.profile_picture
                                        }
                                    />
                                </Box>
                                <Box
                                    // border={"1px solid red"}
                                    w={{ base: "100%", md: "50%" }} m="auto" h="50%" ><Text textAlign={{ base: "center", md: "left" }} color={"#fff"} fontSize={{ base: "18px", md: "25px" }} fontFamily={"caslon-antique"}>{usersData.name}</Text></Box>

                            </Box>

                        </Box>
                        {/* Followers section here -----------------------------------------------------Followers section here -------------------------------------------------------------Followers section here ----------------------------------Followers section here*/}
                        <Box
                            w="100%"
                            h="auto"
                            // border={"1px solid red"}
                            mt={{ base: "25px", md: "35px" }}
                            display={"flex"} flexDir={{ base: "column", md: "row" }} justifyContent={"space-between"}>

                            <Box
                                w={{ base: "100%", md: "35%" }}
                                h={{ base: "auto", md: "auto" }}
                                borderRadius={"2xl"}
                                // border={"1px solid #999"}
                                display={"flex"} flexDir={{ base: "column", md: "column" }} justifyContent={"space-between"}
                            >


                                <Box w="100%" h={{ base: "100px", md: "120px" }}
                                    border={"1px solid #999"}
                                    borderRadius={"2xl"}>

                                    <HStack spacing={0} h="100%" >
                                        <Box display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} w={"50%"} h="100%" borderRadius={"2xl"}>
                                            <Text fontFamily={"quantify"} color={"#fff"} textAlign={"center"} fontSize={{ base: "22px", md: "25px" }}>
                                                {usersData.follower === "" ?
                                                    0 : usersData.follower}
                                            </Text>
                                            <Text fontFamily={"quantify"} color={"#fff"} textAlign={"center"}>Follower</Text>
                                        </Box>
                                        <Divider orientation="vertical" borderColor="gray.500" borderWidth={0.5} h="80%" />
                                        <Box display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} w={"50%"} h="100%" borderRadius={"2xl"}>
                                            <Text fontFamily={"quantify"} color={"#fff"} textAlign={"center"} fontSize={{ base: "22px", md: "25px" }}> <Text fontFamily={"quantify"} color={"#fff"} textAlign={"center"} fontSize={{ base: "22px", md: "25px" }}>
                                                {usersData.following === "" ?
                                                    0 : usersData.following}
                                            </Text></Text>
                                            <Text fontFamily={"quantify"} color={"#fff"} textAlign={"center"}>Following</Text>
                                        </Box>
                                    </HStack>
                                </Box>


                                <Box w="100%" h="auto"
                                    border={"1px solid #999"}
                                    borderRadius={"2xl"} mt={5}
                                >

                                    <Text m={{ base: "2", md: "4" }} textAlign={"left"} color={"#fff"} fontSize={{ base: "md", md: "lg" }} fontWeight="bold" >About</Text>
                                    <Text m={{ base: "2", md: "4" }} fontSize="sm" textAlign={"justify"} color={"#999"}>
                                        {usersData.about}
                                    </Text>
                                    <Text m={{ base: "2", md: "4" }} color={"#fff"} fontSize={{ base: "md", md: "lg" }} fontWeight="bold">Profession :</Text>
                                    <Text m={{ base: "2", md: "4" }} color={"#999"}>{usersData.profession}</Text>
                                    <Text m={{ base: "2", md: "4" }} color={"#fff"} textAlign={"left"} fontSize={{ base: "md", md: "lg" }} fontWeight="bold">Intrest In :</Text>
                                    <Text m={{ base: "2", md: "4" }} color={"#999"} textAlign={"left"} fontSize="sm" >{usersData.intrest}</Text>
                                    <Text m={{ base: "2", md: "4" }} color={"#fff"} textAlign={"left"} fontSize={{ base: "md", md: "lg" }} fontWeight="bold">Phone no :</Text>
                                    <Text m={{ base: "2", md: "4" }} color={"#999"} textAlign={"left"} fontSize="sm" fontWeight="bold">{usersData.phone}</Text>
                                </Box>


                            </Box>
                            <Box
                                w={{ base: "100%", md: "63%" }}
                                h={{ base: "auto", md: "auto" }}
                                borderRadius={"2xl"}
                                border={"1px solid #999"}
                                mt={{ base: "20px", md: "0px" }}
                                display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}
                            >

                                <Box w={{ base: "90%", md: "60%" }} h="auto"
                                    display={"flex"} justifyContent={"center"} alignContent={"center"} alignItems={"center"}
                                >

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <FormControl mt={4} display={"flex"} alignItems={"center"}>
                                            <FormLabel color={"#fff"}>User name :</FormLabel>
                                            <Input
                                                {...register("name")}
                                                variant={"unstyled"} fontFamily={"caslon-antique"} color={"#29B6F6"} type="text" placeholder="Your name" w="50%" />
                                        </FormControl>

                                        <FormControl mt={4} display={"flex"} alignItems={"center"}>
                                            <FormLabel color={"#fff"}>Edit about :</FormLabel>
                                            <Input
                                                {...register("about")}
                                                variant={"unstyled"} fontFamily={"caslon-antique"} color={"#29B6F6"} type="text" placeholder="Share about yourself..." w="50%" />
                                        </FormControl>

                                        <FormControl mt={4} display={"flex"} alignItems={"center"}>
                                            <FormLabel color={"#fff"}>Profession:</FormLabel>
                                            <Input
                                                {...register("profession")}
                                                variant={"unstyled"} fontFamily={"caslon-antique"} color={"#29B6F6"} type="text" placeholder="Student | Empolyee" w="50%" />
                                        </FormControl>

                                        <FormControl mt={4} display={"flex"} alignItems={"center"}>
                                            <FormLabel color={"#fff"}>Interests :</FormLabel>
                                            <Input
                                                {...register("intrest")}
                                                variant={"unstyled"} fontFamily={"caslon-antique"} color={"#29B6F6"} type="text" placeholder="#Ghost, #Darkweb" w="50%" />
                                        </FormControl>
                                        <FormControl mt={4} display={"flex"} alignItems={"center"}>
                                            <FormLabel color={"#fff"}>Profile :</FormLabel>
                                            <Input
                                                {...register("profile_picture")}
                                                variant={"unstyled"} fontFamily={"caslon-antique"} color={"#29B6F6"} type="text" placeholder="Only link accepted" w="50%" />
                                        </FormControl>
                                        <Box display={"flex"} m="10px" justifyContent={"center"} alignContent={"center"} alignItems={"center"}>
                                            <Button _hover={{ bgColor: "#29B6F6" }} mt={4} height={"30px"} fontFamily={"caslon-antique"} bgColor={"rgba(0, 82, 73, 1)"} color={"#fff"} type="submit">
                                                Save
                                            </Button>
                                        </Box>

                                    </form>

                                </Box>
                            </Box>

                        </Box>





                    </Box>
                </Box>
            </Box>

        </>
    );
};

export default Profile;

