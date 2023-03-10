import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  Grid,
  Heading,
  Input,
  List,
  ListItem,
  OrderedList,
  Select,
  Text,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { post } from "../services/middleware";

export const TherapistSignup = () => {
  const [therapistDetails, setTherapistDetails] = useState({
    speciality: "",
    medium: "",
  });
  const [terms, setTerms] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (values) => {
    console.log(values);
    if (terms) {
      const res = await post("http://localhost:5000/user/", {
        ...values,
        therapistDetails: therapistDetails,
        role: "therapist",
      });
      if (res) {
        navigate("/login");
      }
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box w={"100%"}>
        <Flex marginTop={"2rem"}>
          <Box w={"25%"} borderEnd="1px solid black">
            <Heading fontSize={"1.5rem"}>Terms & Condition</Heading>
            <OrderedList spacing={"1rem"}>
              <ListItem>
                .sjdahkjsdhakjsdhakjhdkajsdhkajsdhaksj akjshdjakshd jkahsdjk
                hasjk hdsjka hjkashkjahskj hjk h ahsjkd hakjsdh akjsjk hasd
              </ListItem>
              <ListItem>
                .sjdahkjsdhakjsdhakjhdkajsdhkajsdhaksj akjshdjakshd jkahsdjk
                hasjk hdsjka hjkashkjahskj hjk h ahsjkd hakjsdh akjsjk hasd
              </ListItem>
              <ListItem>
                .sjdahkjsdhakjsdhakjhdkajsdhkajsdhaksj akjshdjakshd jkahsdjk
                hasjk hdsjka hjkashkjahskj hjk h ahsjkd hakjsdh akjsjk hasd
              </ListItem>
              <ListItem>
                .sjdahkjsdhakjsdhakjhdkajsdhkajsdhaksj akjshdjakshd jkahsdjk
                hasjk hdsjka hjkashkjahskj hjk h ahsjkd hakjsdh akjsjk hasd
              </ListItem>
              <ListItem>
                .sjdahkjsdhakjsdhakjhdkajsdhkajsdhaksj akjshdjakshd jkahsdjk
                hasjk hdsjka hjkashkjahskj hjk h ahsjkd hakjsdh akjsjk hasd
              </ListItem>
            </OrderedList>
          </Box>
          <Box w="75%">
            <Box
              border="1px solid black"
              borderRadius="1.5rem"
              w="80%"
              margin={"auto"}
              marginBottom={"1rem"}
              padding="0.3em 2em 0.5em 0.5em"
            >
              <Text fontSize="1rem">What is your field of Speciality?</Text>
              <Select
                padding="0"
                fontSize="0.9rem"
                focusBorderColor="transparent"
                border="none"
                onChange={(e) => {
                  setTherapistDetails({
                    ...therapistDetails,
                    speciality: e.target.value,
                  });
                }}
              >
                <option value={""}>Select Speciality</option>

                <option value={"Family"}>Family</option>
                <option value={"Addiction"}>Addiction</option>
                <option value={"Behaviour"}>Behaviour</option>
                <option value={"Divorce"}>Divorce</option>
                <option value={"Child"}>Child</option>
                <option value={"Clinical"}>Clinical</option>
                <option value={"Cognitive"}>Cognitive</option>
                <option value={"Cognitive-Behavioral"}>
                  Cognitive-Behavioral
                </option>
                <option value={"Eating-Disorder"}>Eating-Disorder</option>
                <option value={"Exercise"}>Exercise</option>
                <option value={"Youth"}>Youth</option>
                <option value={"SocialWork"}>SocialWork</option>
                <option value={"School"}>School</option>
                <option value={"Trauma"}>Trauma</option>
                <option value={"Nutritional"}>Nutritional</option>
                <option value={"Social"}>Social</option>
                <option value={"Dialect-Bheaviour"}>Dialect-Bheaviour</option>
                <option value={"Psychodynamic"}>Psychodynamic</option>
              </Select>
            </Box>

            <Box
              border="1px solid black"
              borderRadius="1.5rem"
              w="80%"
              margin={"auto"}
              marginBottom={"1rem"}
              padding="0.3em 2em 0.5em 0.5em"
            >
              <Text fontSize="1rem">
                What Communication Medium are you comfortable dealing with your
                patients?
              </Text>
              <Select
                padding="0"
                fontSize="0.9rem"
                focusBorderColor="transparent"
                border="none"
                onChange={(e) => {
                  setTherapistDetails({
                    ...therapistDetails,
                    medium: e.target.value,
                  });
                }}
              >
                <option value={""}>Select medium</option>

                <option value={"Physical"}>Physical</option>
                <option value={"Virtual"}>Virtual</option>
                <option value={"Any"}>Any</option>
              </Select>
            </Box>
            <Grid
              templateColumns={"1fr 1fr"}
              w="90%"
              margin={"auto"}
              gap="1rem"
            >
              <Box
                border="1px solid black"
                borderRadius="1.5rem"
                w="90%"
                margin={"auto"}
                padding="0.3em 2em 0.5em 0.5em"
              >
                <Text fontSize="1rem">Full Name</Text>
                <Input
                  padding="0"
                  fontSize="0.9rem"
                  placeholder="Enter Full Name"
                  focusBorderColor="transparent"
                  border="none"
                  {...register("fullName")}
                ></Input>
              </Box>
              <Box
                border="1px solid black"
                borderRadius="1.5rem"
                w="90%"
                margin={"auto"}
                padding="0.3em 2em 0.5em 0.5em"
              >
                <Text fontSize="1rem">Username</Text>
                <Input
                  padding="0"
                  fontSize="0.9rem"
                  placeholder="Enter Username"
                  focusBorderColor="transparent"
                  border="none"
                  {...register("username")}
                ></Input>
              </Box>
              <Box
                border="1px solid black"
                borderRadius="1.5rem"
                w="90%"
                margin={"auto"}
                padding="0.2em 2em 0.5em 0.5em"
              >
                <Text fontSize="1rem">Password</Text>
                <Input
                  padding="0"
                  fontSize="0.9rem"
                  placeholder="Enter Password"
                  border="none"
                  focusBorderColor="transparent"
                  type="password"
                  {...register("password")}
                ></Input>
              </Box>

              <Flex w="90%" margin={"auto"}>
                <Box
                  border="1px solid black"
                  borderRadius="1.5rem"
                  w="40%"
                  margin={"auto"}
                  padding="0.3em 2em 0.5em 0.5em"
                >
                  <Text fontSize="1rem">Age</Text>
                  <Input
                    padding="0"
                    fontSize="0.9rem"
                    placeholder="Enter Age"
                    focusBorderColor="transparent"
                    border="none"
                    type={"number"}
                    {...register("age")}
                  ></Input>
                </Box>
                <Box
                  border="1px solid black"
                  borderRadius="1.5rem"
                  w="50%"
                  margin={"auto"}
                  padding="0.3em 2em 0.5em 0.5em"
                >
                  <Text fontSize="1rem">Gender</Text>
                  <Select
                    padding="0"
                    fontSize="0.9rem"
                    focusBorderColor="transparent"
                    border="none"
                    {...register("gender")}
                  >
                    <option value={""}>Select Gender</option>
                    <option value={"male"}>Male</option>
                    <option value={"female"}>Female</option>
                    <option value={"other"}>Other</option>
                  </Select>
                </Box>
              </Flex>
              <Box
                border="1px solid black"
                borderRadius="1.5rem"
                w="90%"
                margin={"auto"}
                padding="0.3em 2em 0.5em 0.5em"
              >
                <Text fontSize="1rem">Email</Text>
                <Input
                  padding="0"
                  fontSize="0.9rem"
                  placeholder="Enter Email"
                  focusBorderColor="transparent"
                  border="none"
                  type={"email"}
                  {...register("email")}
                ></Input>
              </Box>
              <Box
                border="1px solid black"
                borderRadius="1.5rem"
                w="90%"
                margin={"auto"}
                padding="0.3em 2em 0.5em 0.5em"
              >
                <Text fontSize="1rem">Address</Text>
                <Input
                  padding="0"
                  fontSize="0.9rem"
                  placeholder="Enter Address"
                  focusBorderColor="transparent"
                  border="none"
                  {...register("address")}
                ></Input>
              </Box>

              <Box
                border="1px solid black"
                borderRadius="1.5rem"
                w="90%"
                margin={"auto"}
                padding="0.3em 2em 0.5em 0.5em"
              >
                <Text fontSize="1rem">Phone No</Text>
                <Input
                  padding="0"
                  fontSize="0.9rem"
                  placeholder="Enter Phone Number"
                  focusBorderColor="transparent"
                  border="none"
                  type={"number"}
                  {...register("phoneno")}
                ></Input>
              </Box>
            </Grid>
            <FormControl marginTop="2rem" marginLeft={"2rem"}>
              <Checkbox
                colorScheme="green"
                isChecked={terms}
                onChange={(e) => {
                  setTerms(!terms);
                }}
              >
                I have read the terms and conditions and agree them.
              </Checkbox>
            </FormControl>
          </Box>
        </Flex>

        <Button
          padding={"1.5rem 2rem"}
          marginTop={"2rem"}
          marginLeft="45%"
          marginBottom={"3rem"}
          borderRadius="1.5em"
          bgColor={"#9fe7ab"}
          fontSize={"1.5rem"}
          color="white"
          type="submit"
        >
          Sign up
        </Button>
      </Box>
    </form>
  );
};
