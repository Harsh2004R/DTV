import { Box, Heading, Text, VStack, Button, Center } from "@chakra-ui/react";

const PremiumTour = () => {
    return (
        <Box
            position="relative"
            width="100vw"
            height="100vh"
            overflow="hidden"
            bg="black"
        >
            {/* Embedded Tour */}
            <iframe
                src="https://maps.gstatic.com/m/streetview/?q=hashima+island&hl=en&ll=32.628266,129.738056&spn=0.000745,0.002516&sll=53.806002,-1.535732&sspn=0.295189,0.644073&t=h&hnear=Hashima+Island&z=19&layer=c&cbll=32.628267,129.738055&panoid=JdEfaAv9DRoAAAQIt4-aBw&cbp=11,218.29,,0,10.36"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: "0" }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
            ></iframe>

            {/* Overlay Info Card */}
            <Center
            border={"2px solid black"}
                w="90%"
                h="90vh"

                position="absolute"
                top="10%"
                left="0%"
                bg="rgba(255, 255, 255, 0.1)"
                backdropFilter="blur(10px)"
                borderRadius="2xl"
                padding="6"
                maxW="sm"
                color="white"
                boxShadow="2xl"
            >
                <VStack align="start" spacing={3}>
                    <Heading fontSize="2xl">⛰ Hashima Island Tour</Heading>
                    <Text fontSize="md">
                        Welcome to the mysterious and abandoned Hashima Island — once a coal mining town,
                        now a haunted beauty. Explore virtually in high detail!
                    </Text>
                    <Button colorScheme="teal" size="sm">
                        Enjoy Premium Access
                    </Button>
                </VStack>
            </Center>
        </Box>
    );
};

export default PremiumTour;



{/* <Box
    position="absolute"
    top="10%"
    left="5%"
    bg="rgba(255, 255, 255, 0.1)"
    backdropFilter="blur(10px)"
    borderRadius="2xl"
    padding="6"
    maxW="sm"
    color="white"
    boxShadow="2xl"
>
    <VStack align="start" spacing={3}>
        <Heading fontSize="2xl">⛰ Hashima Island Tour</Heading>
        <Text fontSize="md">
            Welcome to the mysterious and abandoned Hashima Island — once a coal mining town,
            now a haunted beauty. Explore virtually in high detail!
        </Text>
        <Button colorScheme="teal" size="sm">
            Enjoy Premium Access
        </Button>
    </VStack>
</Box> */}