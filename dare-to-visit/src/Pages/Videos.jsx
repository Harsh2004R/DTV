import Navbar2 from "../Components/Navbar2";
import React, { useState, useEffect } from 'react';
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
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Center,
    Spinner,
    Button,
    Tooltip
} from '@chakra-ui/react';
import {
    FiVideo,
    FiMenu,
    FiBell,
    FiChevronDown,
} from 'react-icons/fi';
import axios from "axios";
import { BE_URL } from "../URL";
import { useNavigate } from "react-router";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

const LinkItems = [
    { name: 'Urban legends', icon: FiVideo, },
    { name: 'Black Magic', icon: FiVideo, },
    { name: 'cult', icon: FiVideo, },
    { name: 'disturbing', icon: FiVideo },
    { name: 'spooky', icon: FiVideo },
];

const SidebarContent = ({ onClose, setCategory, setPageno, ...rest }) => {


    const handleCategoryClick = (category) => {
        setCategory(category); // Call parent state setter
        setPageno(1)
    };


    return (
        <Box
            transition="3s ease"
            bg={useColorModeValue('#212121', 'white.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('#999', '#999')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}
        >
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text color="#6b947f" fontSize={{ base: "25px", md: "2xl", lg: "2xl" }} fontFamily="monospace" fontWeight="bold">
                    Sort & Filter
                </Text>
                <CloseButton border="2px solid #FFFFFF" color={"#FFFFFF"} bgColor={"#6b947f"} display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>

            {LinkItems.map((link, index) => (
                <React.Fragment key={link.name}>
                    <NavItem onClick={() => handleCategoryClick(link.name)} mt="3px" mb="5px" color="#FFFFFF" icon={link.icon}>
                        {link.name}
                    </NavItem>
                    {index < LinkItems.length - 1 && <Divider borderColor={"#6b947f"} />}
                </React.Fragment>
            ))}

            <Divider borderColor={"#6b947f"} />

        </Box>
    );
};


const NavItem = ({ icon, children, ...rest }) => {
    return (
        <Box
            //  border={"1px solid yellow"}
            as="a"
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
    const Navigate = useNavigate();
    const handlePremimumZone = () => {
        Navigate("/Device")
    }
    const handleSettings = () => {
        Navigate("/soon")
    }
    const handleProfilePage = () => {
        Navigate("/profile")
    }

    return (
        <Flex
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

            <Text
                display={{ base: 'flex', md: 'none' }}
                fontSize="2xl"
                fontFamily="monospace"
                fontWeight="bold"
            >
                Logo
            </Text>

            <HStack spacing={{ base: '0', md: '6' }}>
                <IconButton borderRadius={"50%"} size="xs" variant="ghost" m="8px" color={{ base: "#6b947f", md: "#FFFFFF" }} _focus={{ boxShadow: '#FFFFFF' }} border="1px solid #fff" aria-label="open menu" icon={<FiBell />} />
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton color="#fff" py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
                            <HStack>
                                <Avatar
                                    size={{ base: "sm", md: "md" }}
                                    src={
                                        'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
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
                            <MenuItem
                                onClick={handleProfilePage}
                                m="3px" color="#fff" _hover={{ bg: `linear-gradient(to right, #000000, #FF0000, #000000)`, boxShadow: '0 0 2px 3px #F5F5F5' }} bgColor='#212121'>Profile</MenuItem>
                            <MenuItem
                                onClick={handleSettings}
                                m="3px" color="#fff" _hover={{ bg: `linear-gradient(to right, #000000, #FF0000, #000000)`, boxShadow: '0 0 2px 3px #F5F5F5' }} bgColor='#212121'>Settings</MenuItem>
                            <MenuItem
                                onClick={handlePremimumZone}
                                m="3px" color="#fff" _hover={{ bg: `linear-gradient(to right, #000000, #FF0000, #000000)`, boxShadow: '0 0 2px 3px #F5F5F5' }} bgColor='#212121'>Premimum Zone</MenuItem>
                            <MenuDivider />
                            <MenuItem m="3px" color="#fff" _hover={{ bg: `linear-gradient(to right, #000000, #FF0000, #000000)`, boxShadow: '0 0 2px 3px #F5F5F5' }} bgColor='#212121'>Sign out</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};

const Videos = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [getVideos, setGetVideos] = useState([]);
    const [pageno, setPageno] = useState(1);
    const [limitno, setLimitTo] = useState(5);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // These are now shared states
    const [category, setCategory] = useState('');
    const [hasMoreData, setHasMoreData] = useState(true);
    const [totalPages, setTotalPages] = useState("")

    useEffect(() => {
        fetchVideos();
    }, [category, pageno]); // Refetch when these change

    const fetchVideos = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`${BE_URL}api/get/videos?page=${pageno}&limit=${limitno}&category=${category}`);
            setGetVideos(res.data.data);
            setHasMoreData(!res.data.isLastPage);
            setTotalPages(res.data.totalPages);
            // console.log(getVideos)
            setError(null);
        } catch (err) {
            const message =
                err?.response?.data?.message ||
                err?.message ||
                "Something went wrong";
            setHasMoreData(false);
            setError(message);
        }
        setLoading(false);
    };
    if (loading) {
        return <Center bg="#303030" w="100%" h="100vh">
            <Flex>
                <Text textAlign={"center"} color="#fff" fontWeight={"600"} fontSize={{ base: "22px", md: "25px", lg: "28px" }}>Loading...</Text>
                <Box w="25px">

                </Box>
                <Spinner color="#1E88E5" size="xl" />
            </Flex>
        </Center>
    }

    return (
        <>

            <SidebarContent
                onClose={onClose}
                setCategory={setCategory}
                setPageno={setPageno}
                display={{ base: 'none', md: 'block' }}
            />
            <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
                <DrawerContent>
                    <SidebarContent
                        onClose={onClose}
                        setCategory={setCategory}
                        setPageno={setPageno}
                    />
                </DrawerContent>
            </Drawer>

            <MobileNav onOpen={onOpen} />
            {error ? (
                <Center bg="#303030" w="100%" h="100vh">
                    <Text textAlign={"center"} color="#FF5722" fontSize={{ base: "14px", md: "15px", lg: "16px" }}>{error}</Text>
                </Center>
            ) :

                (<Box minH="100vh" bg="grey">


                    <Box ml={{ base: 0, md: 60 }} bg="#000000" p="4"
                        h="100vh" // set it to auto if video goes below black box
                        overflowY={"auto"} // remove it if video not scrolls 
                    // border="1px solid cyan"
                    >

                        <Box
                            w="100%" mt="50px" h="auto"
                        // border="1px solid cyan"
                        >

                            {/* Content */}


                            {
                                getVideos.length === 0 ?
                                    (
                                        <Center bg="#303030" w="100%" h="100vh">
                                            <Text textAlign={"center"} color="#fff" fontWeight={"600"} fontSize={{ base: "22px", md: "25px", lg: "28px" }}>No videos Found...</Text>
                                        </Center>
                                    )
                                    : (getVideos.map((el, i) => (
                                        <Box pb={{ base: "10px", md: "20px" }} display="flex" mt={{ base: "10px", md: "20px" }} flexDirection={{ base: "column", md: "row" }} justifyContent={"space-evenly"} w="100%" h={{ base: "45vh", md: "auto" }} key={i}>
                                            <Box border="2px solid red" mt={{ base: "10px", md: "20px" }} w={{ base: "100%", md: "50%" }} borderRadius={"8px"} h={{ base: "30vh", md: "48vh" }}>
                                                <iframe
                                                    width={"100%"}
                                                    height="100%"
                                                    borderradius="18px"
                                                    src={el.video_url}
                                                    frameBorder="0"
                                                    allowFullScreen
                                                    title={"hello"}
                                                ></iframe>
                                            </Box>
                                            <Box w={{ base: "100%", md: "40%" }} color="#FFFFFF">
                                                <Text
                                                    // fontFamily={"my"}
                                                    fontFamily="monospace" mt="12px"
                                                    fontSize={{ base: "16px", md: "28px" }}>{el.video_title}</Text>
                                                <Divider />
                                            </Box>
                                        </Box>
                                    )))
                            }

                            {/* pagination starts here -----------------------------------------agination starts here---------------------------------------------------------------------------agination starts here*/}
                            {getVideos.length !== 0 ?
                                (<Center w="100%">
                                    <Center p={1} flexDir={"column"} bottom={"0"} px={{ base: "20%", md: "25%", lg: "30%" }} bg="#212121" position={"fixed"}>
                                        <Center w={{ base: "220px", md: "300px", lg: "350px" }} justifyContent={"space-between"} h="40px" >
                                            <Tooltip label="Previous Page" hasArrow placement="top">
                                                <Button
                                                    borderRadius="full"
                                                    width="40px"
                                                    height="40px"
                                                    display="flex"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                    p={0} // removes extra padding
                                                    isDisabled={pageno === 1}
                                                    onClick={() => setPageno(prev => Math.max(prev - 1, 1))}
                                                >
                                                    <FcPrevious size={18} />
                                                </Button>
                                            </Tooltip>
                                            <Text fontFamily={"monospace"} fontSize={{ base: "xs", md: "sm", lg: "sm" }} color="#fff">Page {pageno}/{totalPages}</Text>
                                            <Tooltip label={hasMoreData ? "Next" : "Last Page 😪"} hasArrow placement="top">
                                                <Button
                                                    borderRadius="full"
                                                    width="40px"
                                                    height="40px"
                                                    display="flex"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                    p={0} // removes extra padding
                                                    isDisabled={!hasMoreData}
                                                    onClick={() => setPageno(prev => prev + 1)}
                                                >
                                                    <FcNext size={18} />
                                                </Button>
                                            </Tooltip>
                                        </Center>
                                    </Center>
                                </Center>) : (<></>)}

                            {/* // 28 may 2025... */}



                            {/* pagination ends here --------------------------------pagination ends here-----------------------------------------------------------pagination ends here- */}


                        </Box>

                    </Box>
                </Box>)}
        </>
    );
};

export default Videos;
