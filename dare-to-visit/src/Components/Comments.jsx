import React from 'react';
import { Box } from '@chakra-ui/react';
const Comments = ({ status}) => {
   const handleClose = ()=>{
    let status = ""
    status = true;
    // console.log(status)
   }
    return (
        <>
            <Box
                // border={"1px solid red"}
                w="100%" height="100vh" bg="rgba(0, 0, 0, 0.2)" position="absolute"
            >

                <svg onClick={handleClose} style={{ margin: '10px 10px 0px auto' }} color='#fff' aria-label="Close" className="x1lliihq x1n2onr6 x9bdzbf" fill="currentColor" height="18" role="img" viewBox="0 0 24 24" width="18"><title>Close</title><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>

                {/* Comment section parent box starting from here----------------------------------------------------------------Comment section parent box starting from here----------------------------------------------------------------Comment section parent box starting from here----------------------------------------------------------------Comment section parent box starting from here----------------------------------------------------------------Comment section parent box starting from here---------------------------------------------------------------- */}

                <Box border={"1px solid #fff"} position="absolute"
                    bg="#000"
                    w={{ base: "95%", md: "60%" }} height="90vh"
                    top={{ base: "6.5%", md: "5%" }} left={{ base: "2.5%", md: "20%" }}
                >

                </Box>

            </Box>

        </>
    )
}

export default Comments
