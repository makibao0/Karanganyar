import {
  Box,
  Button,
  Center,
  ChakraProvider,
  Flex,
  FormControl,
  FormLabel,
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
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BASECOLOR } from "./color";
import { CircleX, XCircle } from "lucide-react";

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
        <Center flex={1}>
          <VStack justifyContent={"center"} alignItems={"center"}>
            <Image
              w={"50vw"}
              src={require("../src/assets/images/logoWhite.png")}
              alt="Dan Abramov"
            />
            <Text
              color={"white"}
              textAlign={"center"}
              fontSize={"2xl"}
              fontWeight={"bold"}
            >
              Dari pada ngontrak lebih baik cicil rumah
            </Text>
            <Text
              color={"white"}
              textAlign={"center"}
              fontSize={"2xl"}
              fontWeight={"bold"}
            >
              DP 0% Cicilan 1Jt
            </Text>
            <Box>
              <Box
                w={"400px"}
                p={5}
                bg={"rgba(255, 255, 255, 0.2)"}
                rounded={"md"}
                shadow={"md"}
              >
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    console.log(
                      formData.get("name"),
                      formData.get("email"),
                      formData.get("message")
                    );
                  }}
                >
                  <FormControl mb={5} id="name" isRequired>
                    <Input
                      h={20}
                      placeholder="Nama Lengkap"
                      bg={"white"}
                      type="text"
                      name="name"
                    />
                  </FormControl>
                  <FormControl mb={5} id="email" isRequired>
                    <Input
                      h={20}
                      placeholder="No Whatsapp"
                      bg={"white"}
                      type="number"
                      name="email"
                    />
                  </FormControl>
                  <FormControl mb={5} id="message" isRequired>
                    <Input
                      h={20}
                      placeholder="Email"
                      type="email"
                      bg={"white"}
                      name="message"
                    />
                  </FormControl>
                  <FormControl mb={5} id="message" isRequired>
                    <Input
                      h={20}
                      placeholder="Kota Domisili"
                      bg={"white"}
                      name="message"
                    />
                  </FormControl>
                  <Button h={20} bg={BASECOLOR.yellow} w={"100%"} type="submit">
                    <Text color={"white"}>Dapatkan Penawaran</Text>
                  </Button>
                </form>
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
              <Heading fontSize={"lg"} fontWeight={"semibold"} mb={3} mt={6}>
                Fasilitas sekitar Karang Anyar Residence
              </Heading>
              <List spacing={3}>
                <ListItem>
                  <Text>Angkutan Umum 24 jam (akses lgsg)</Text>
                </ListItem>
                <ListItem>
                  <Text>Stasiun Cikarang</Text>
                </ListItem>
                <ListItem>
                  <Text>Terminal Cikarang</Text>
                </ListItem>
                <ListItem>
                  <Text>RS Central Medika</Text>
                </ListItem>
                <ListItem>
                  <Text>Puskemas Cikarang</Text>
                </ListItem>
                <ListItem>
                  <Text>Polsek Sukatani</Text>
                </ListItem>
                <ListItem>
                  <Text>SMAN 1 Cikarang Utara</Text>
                </ListItem>
                <ListItem>
                  <Text>SMPN 1 Cikarang Utara</Text>
                </ListItem>
                <ListItem>
                  <Text>SGC Mall</Text>
                </ListItem>
                <ListItem>
                  <Text>Lotte Grosir Cikarang</Text>
                </ListItem>
                <ListItem>
                  <Text>
                    Kawasan Industri terbesar seasia tenggara (Jababeka, EJIP,
                    MM2100)
                  </Text>
                </ListItem>
                <ListItem>
                  <Text>
                    Akses pintu tol Cikarang Utara / Gabus / Telaga Asih
                    (estimasi 30 menit)
                  </Text>
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
              <Image src={item.image} />

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
        <Image src={require("../src/assets/images/logoWhite.png")} h={20} />
        <Text>Copyright 2024 @Karang Anyar Residence</Text>
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
