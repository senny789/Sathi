import { Box, Button, Grid, Heading, Select, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import { put } from "../../services/middleware";
import { useContext } from "react";
import { User } from "../../data/loggedin";

export const Rerecommend = (props) => {
  const [therapistDetails, setTherapistDetails] = useState({
    speciality: "",
    age: 0,
    gender: "",
    communicationType: "",
  });
  const { user, setUser } = useContext(User);
  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await Promise.all([
      put(`/user/${user.id}`, {
        therapistDetails: therapistDetails,
      }),
    ]);
    if (res) {
      setUser({
        ...user,
        therapistDetails: therapistDetails,
      });
      props.setRecommend(false);
    }
  };

  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      style={{
        padding: "1rem",
      }}
    >
      <Heading>
        Please select your preferences such that we can recommend you your{"  "}
        <Box as="span" color={"#7CC35B"}>
          Saathi
        </Box>
      </Heading>
      <Button
        marginTop={"0.5rem"}
        colorScheme="teal"
        onClick={() => props.setRecommend(false)}
      >
        Back
      </Button>
      <Box
        w="50%"
        padding={"2rem"}
        marginInline={"auto"}
        boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px "}
      >
        <Grid templateColumns={"1fr"} gap="1rem">
          <Box>
            <Text fontSize={"1.4rem"} fontWeight={"bold"}>
              Your previous preferences for a therapist were:{" "}
            </Text>

            <Text>Gender:{user.therapistDetails.gender}</Text>
            <Text>Age:{user.therapistDetails.age}</Text>
            <Text>Speciality:{user.therapistDetails.speciality}</Text>
            <Text>
              Communication Type:{user.therapistDetails.communicationType}
            </Text>
          </Box>
          <Box
            border="1px solid black"
            borderRadius="1.5rem"
            padding="0.3em 2em 0.5em 0.5em"
          >
            <Text fontSize="1rem">
              Select Preferred Speciality of your therapist
            </Text>
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

              <option value={"Any"}>Any</option>
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
            padding="0.3em 2em 0.5em 0.5em"
          >
            <Text fontSize="1rem">
              Select the Preferred Gender of your therapist
            </Text>
            <Select
              padding="0"
              fontSize="0.9rem"
              focusBorderColor="transparent"
              border="none"
              onChange={(e) => {
                setTherapistDetails({
                  ...therapistDetails,
                  gender: e.target.value,
                });
              }}
            >
              <option value={""}>Select Gender</option>
              <option value={"male"}>Male</option>
              <option value={"female"}>Female</option>
              <option value={"other"}>Other</option>
              <option value={"Any"}>Any</option>
            </Select>
          </Box>
          <Box
            border="1px solid black"
            borderRadius="1.5rem"
            padding="0.3em 2em 0.5em 0.5em"
          >
            <Text fontSize="1rem">
              Select the Preferred Mode of interaction with the therapist
            </Text>
            <Select
              padding="0"
              fontSize="0.9rem"
              focusBorderColor="transparent"
              border="none"
              onChange={(e) => {
                setTherapistDetails({
                  ...therapistDetails,
                  communicationType: e.target.value,
                });
              }}
            >
              <option value={""}>Select Mode</option>
              <option value={"Virtual"}>Virtual</option>
              <option value={"Physical"}>Physical</option>
              <option value={"Any"}>Any</option>
            </Select>
          </Box>
          <Box
            border="1px solid black"
            borderRadius="1.5rem"
            padding="0.3em 2em 0.5em 0.5em"
          >
            <Text fontSize="1rem">
              Select the preferred age group of your therapist
            </Text>
            <Select
              padding="0"
              fontSize="0.9rem"
              focusBorderColor="transparent"
              border="none"
              onChange={(e) => {
                setTherapistDetails({
                  ...therapistDetails,
                  age: e.target.value,
                });
              }}
            >
              <option value={""}>Select Age Group</option>
              <option value={"Old(Above 40)"}>Old(Above 40)</option>
              <option value={"Adult(Between 30-40)"}>
                Adult(Between 30-40)
              </option>
              <option value={"YoungAdult(Between 20-30)"}>
                YoungAdult(Between 20-30)
              </option>
              <option value={"Any"}>Any</option>
            </Select>
          </Box>
        </Grid>
        <Button
          padding={"1.5rem 2rem"}
          marginTop={"2rem"}
          marginBottom={"3rem"}
          borderRadius="1.5em"
          colorScheme="teal"
          fontSize={"1.5rem"}
          color="white"
          type="submit"
        >
          Re-recommend
        </Button>
      </Box>
    </form>
  );
};
