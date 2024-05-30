import {
  AspectRatio,
  Box,
  Button,
  Center,
  ChakraProvider,
  FormControl,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { Phone } from "lucide-react";
import React, { useEffect } from "react";
import { BASECOLOR } from "./color";

const LandingPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    onOpen();
  }, []);
  const dataProyek = [
    {
      title: "Type 36-90",
      desc: `- Luas 50 sqm
       - 3 kamar tidur 
       - 1 kamar mandi
       - 1 ruang tamu 
       - 1 dapur 
       - 1 garage 
       - Lokasi strategis di dekat tol Cikarang`,
      image: require("../src/assets/images/Ametys.jpg"),
      denah: require("../src/assets/images/amethys.png"),
    },
    {
      title: "Type 33-65",
      desc: `- Luas 50 sqm
       - 3 kamar tidur 
       - 1 kamar mandi
       - 1 ruang tamu 
       - 1 dapur 
       - 1 garage 
       - Lokasi strategis di dekat tol Cikarang`,
      image: require("../src/assets/images/Emerald.jpg"),
      denah: require("../src/assets/images/emerald.png"),
    },
    {
      title: "Type 30-60",
      desc: `- Luas 50 sqm
       - 3 kamar tidur 
       - 1 kamar mandi
       - 1 ruang tamu 
       - 1 dapur 
       - 1 garage 
       - Lokasi strategis di dekat tol Cikarang`,
      image: require("../src/assets/images/new.jpeg"),
      denah: require("../src/assets/images/subsidiDenah.png"),
    },
  ];
  return (
    <ChakraProvider>
      <Box
        alignItems={"center"}
        justifyContent={"center"}
        py={5}
        bgGradient={`linear(to-l, ${BASECOLOR.green},${BASECOLOR.blue})`}
      >
        <Button
          zIndex={10}
          rounded={"full"}
          bg={BASECOLOR.yellow}
          position={"fixed"}
          bottom={5}
          right={5}
          h={12}
          colorScheme="primary"
          onClick={() => {
            window.open("https://linktr.ee/karanganyarresidence.id", "_blank");
          }}
        >
          <Icon as={Phone} />
        </Button>
        <Center flex={1}>
          <VStack justifyContent={"center"} alignItems={"center"}>
            <Image
              w={"50vw"}
              src={require("../src/assets/images/logoWhite.png")}
              alt="Dan Abramov"
            />
            <Text
              mt={5}
              color={"white"}
              textAlign={"center"}
              fontSize={"3xl"}
              fontWeight={"bold"}
            >
              {`Dari pada ngontrak lebih baik cicil rumah`.toUpperCase()}
            </Text>
            <Text
              color={"white"}
              textAlign={"center"}
              fontSize={"3xl"}
              fontWeight={"bold"}
            >
              {`DP 0% Cicilan 1Jt`.toUpperCase()}
            </Text>
            <Box mt={5}>
              <Box
                w={"400px"}
                p={5}
                bg={"rgba(255, 255, 255, 0.2)"}
                rounded={"md"}
                shadow={"md"}
              >
                <FormControl mb={5} id="name" isRequired>
                  <Input
                    h={12}
                    placeholder="Nama Lengkap"
                    bg={"white"}
                    type="text"
                    name="name"
                  />
                </FormControl>
                <FormControl mb={5} id="email" isRequired>
                  <Input
                    h={12}
                    placeholder="No Whatsapp"
                    bg={"white"}
                    type="number"
                    name="email"
                  />
                </FormControl>
                <FormControl mb={5} id="message" isRequired>
                  <Input
                    h={12}
                    placeholder="Email"
                    type="email"
                    bg={"white"}
                    name="message"
                  />
                </FormControl>
                <FormControl mb={5} id="message" isRequired>
                  <Input
                    h={12}
                    placeholder="Kota Domisili"
                    bg={"white"}
                    name="message"
                  />
                </FormControl>
                <Button
                  h={14}
                  bg={BASECOLOR.yellow}
                  w={"100%"}
                  type="submit"
                  onClick={() => {
                    const url = `https://api.whatsapp.com/send?phone=6282210551138&text=Hai saya %20${
                      document.getElementById("name").value
                    }%20${
                      document.getElementById("message").value
                    }%20dan%20saya%20tertarik%20menghubungi%20kamu%20untuk%20bertanyakan%20seputar%20rumah%20di%20Karanganyar%20Residence`;

                    window.open(url, "_blank");
                  }}
                >
                  <Text color={"white"}>Dapatkan Penawaran</Text>
                </Button>
              </Box>
            </Box>
          </VStack>
        </Center>
      </Box>
      <Center py={5}>
        <VStack>
          <Image
            borderRadius={"lg"}
            w={"90vw"}
            src={require("../src/assets/images/image3.jpeg")}
          />
          <Text textAlign={"center"} fontSize={"2xl"} fontWeight={"bold"}>
            Keunggulan Beli Rumah Subsidi Di Karang Anyar Residence
          </Text>
          <Image
            borderRadius={"lg"}
            w={"90vw"}
            src={require("../src/assets/images/areaSekitar.png")}
          />
          <VStack mt={5}>
            <Box
              w={"90vw"}
              p={5}
              bg={"white"}
              borderRadius={"lg"}
              boxShadow={"md"}
            >
              <Heading fontSize={"lg"} fontWeight={"semibold"} mb={3}>
                Fasilitas di Karang Anyar Residence
              </Heading>
              <List spacing={3}>
                <ListItem>
                  <Text>2 Masjid</Text>
                </ListItem>
                <ListItem>
                  <Text>2 Lapangan Futsal</Text>
                </ListItem>
                <ListItem>
                  <Text>Waterpond</Text>
                </ListItem>
                <ListItem>
                  <Text>Taman bermain</Text>
                </ListItem>
                <ListItem>
                  <Text>(Upcoming) Sport Club House</Text>
                </ListItem>
                <ListItem>
                  <Text>(Upcoming) Sekolah SDN</Text>
                </ListItem>
                <ListItem>
                  <Text>(Upcoming) Food Night Market</Text>
                </ListItem>
              </List>
            </Box>
          </VStack>
        </VStack>
      </Center>
      <Box w={"100%"} my={5} px={5} bg={"rgba(255,255,255,0.2)"} rounded={"md"}>
        <Box
          mb={5}
          borderRadius={"xl"}
          bgGradient={
            "linear(to-r, " + BASECOLOR.blue + ", " + BASECOLOR.green + ")"
          }
        >
          <Text
            textAlign={"center"}
            py={5}
            fontSize={"2xl"}
            fontWeight={"bold"}
            size="md"
            color="white"
          >
            Spesial Offer
          </Text>
        </Box>
        <VStack spacing={5}>
          {dataProyek.map((item, index) => (
            <VStack
              shadow={"md"}
              w={"full"}
              h={"auto"}
              bg={"rgba(255,255,255,0)"}
              rounded={"md"}
            >
              <HStack flex={1}>
                {/* <Image
                  aspectRatio={"1 / 1.2"}
                  objectFit={"cover"}
                  w={"50%"}
                  h="100%"
                  src={item.image}
                /> */}
                <Image src={item.denah} />
              </HStack>

              <HStack
                borderBottomRightRadius={"xl"}
                borderTopLeftRadius={"md"}
                alignItems={"flex-start"}
                justifyContent={"flex-start"}
                alignSelf={"flex-start"}
                bg={BASECOLOR.green}
                position={"absolute"}
                px={5}
                pt={2}
                pb={5}
              >
                <Text
                  color={"white"}
                  textAlign={"flex-start"}
                  fontWeight={"bold"}
                >
                  {item.title}
                </Text>
              </HStack>
            </VStack>
          ))}
        </VStack>
        <AspectRatio my={5} maxW="560px" w={"full"} ratio={1}>
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/WeOB4zI-b10?si=TkPwAkqyGaE0LIvT"
            allowFullScreen
          />
        </AspectRatio>
      </Box>
      <Box
        bottom={0}
        w={"full"}
        bgGradient={`linear(to-b, ${BASECOLOR.green},${BASECOLOR.blue})`}
        color={"white"}
        p={5}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Image src={require("../src/assets/images/logoWhite.png")} h={10} />
        <Text fontSize={12} mt={5}>
          Copyright 2024 @Karang Anyar Residence
        </Text>
      </Box>

      <Modal size="md" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody bg={"rgba(255,255,255,0)"}>
            <Box w="full" h="full" bg="rgba(255, 255, 255, 0)" rounded="md">
              <Image
                src={require("../src/assets/images/promo.png")}
                w="full"
                h="full"
                objectFit="contain"
              />
            </Box>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="green"
              bg={BASECOLOR.green}
              variant="solid"
              onClick={onClose}
            >
              <Text>Tutup</Text>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

export default LandingPage;
