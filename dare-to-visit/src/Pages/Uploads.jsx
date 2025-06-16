import React, { useState } from 'react'
import PostUploadForm from "../Components/PostUploadForm.jsx"
import ReelUploadForm from '../Components/ReelUploadForm.jsx'
import Topper from "../Components/Topper.jsx"
import { Box, Button, Center } from "@chakra-ui/react"
import { MdAddAPhoto } from "react-icons/md";
const Uploads = () => {
    const [toggle, setToggle] = useState(false);
    const handleToggleOperation = () => {
        setToggle(prev => !prev)
    }
    return (
        <Box w="100%" minH="100vh" bg="#000">
            <Topper />

            <Center flexDirection={"column"} pt="80px"
            // border={"2px solid red"}
            >
                <Button fontFamily={"bebas_neue"}
                    letterSpacing={"2.5px"}
                    justifyContent={"space-between"} textDecor={"underline"}
                    _hover={{ bg: "#000" }} w="125px" bg="#000"
                    textColor={toggle ? "red.500" : "#03A9F4" } borderRadius={"none"}
                onClick={handleToggleOperation}
                mb="20px"
                >
                {toggle ? "Add Post" : "Add Reel"} <MdAddAPhoto color="#E0E0E0" size={"20px"}
                />
            </Button>
            {toggle ?
                <ReelUploadForm /> : <PostUploadForm />
            }

        </Center>
        </Box >
    )
}

export default Uploads
