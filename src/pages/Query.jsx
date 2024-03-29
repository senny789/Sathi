import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Progress,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React, { useState } from "react";

import HomeGreen from "../assets/HomeGreen.svg";
import { UserSignup } from "../components/UserSignup";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import therapistQuery from "../data/therapistQ.json";
export const symptomDiscriptor = [
  {
    key: "behaviour",
    question:
      "Are you experiencing any changes in mood or behavior:( feeling sad, anxious, irritable, or easily agitated; withdrawing from social situations or losing interest in activities you once enjoyed; feeling excessively worried or nervous; feeling excessively happy or excited for no apparent reason?",
  },
  {
    key: "sleep",
    question:
      "Are you experiencing any Sleep problems:( difficulty falling or staying asleep; waking up frequently during the night; sleeping too much or too little.?",
  },
  {
    key: "apetite",
    question:
      "Are you experiencing any Appetite changes: (experiencing a significant increase or decrease in your appetite; sudden weight loss or gain.?",
  },
  {
    key: "concentration",
    question:
      "Are you experiencing any Difficulty concentrating or making decisions: (having trouble concentrating, making decisions, or remembering things; feeling forgetful or disorganized.?",
  },
  {
    key: "physical",
    question:
      "Are you experiencing any Physical symptoms: (experiencing physical symptoms that may be related to your mental health, such as headaches, stomach problems, or fatigue; experiencing unexplained aches and pains.?",
  },
  {
    key: "substanceUse",
    question:
      "Are you experiencing any Substance use:( using drugs or alcohol to cope with your emotions; experiencing increased use of these substances.?",
  },
  {
    key: "suicidal",
    question:
      "Are you experiencing any Suicidal thoughts or behaviors:(experiencing thoughts of suicide or self-harm; engaging in behaviors that could be harmful to yourself or others.?",
  },
  {
    key: "hallucinations",
    question:
      "Are you experiencing any Delusions or hallucinations: (experiencing false beliefs or perceptions that are not based in reality; hearing or seeing things that are not there.?",
  },
  {
    key: "anxiety",
    question:
      "Are you experiencing any Anxiety disorders:(experiencing excessive worry or fear about a variety of situations; experiencing panic attacks.?",
  },
  {
    key: "ocd",
    question:
      "Are you experiencing any Obsessive-compulsive disorder OCD: (experiencing intrusive thoughts or images that cause anxiety; performing repetitive behaviors or mental acts to reduce anxiety.?",
  },
  {
    key: "ptsd",
    question:
      "Are you experiencing any Post-traumatic stress disorder PTSD:(experiencing flashbacks or nightmares related to a traumatic event; avoiding situations or stimuli that trigger memories of the trauma.?",
  },
  {
    key: "eatingDisorder",
    question:
      "Are you experiencing any Eating disorders: (experiencing significant changes in eating habits or weight; experiencing an intense fear of gaining weight or becoming overweight.?",
  },
  {
    key: "personalityDisorder",
    question:
      "Are you experiencing any Personality disorders:(experiencing difficulty regulating emotions or behavior; having a distorted sense of self or others.?",
  },
  {
    key: "psychoticDisorder",
    question:
      "Are you experiencing any Psychotic disorders: (experiencing a loss of touch with reality; experiencing delusions or hallucinations.?",
  },
  {
    key: "sexualDisorder",
    question:
      "Are you experiencing any Sexual disorders: (experiencing difficulties related to sexual functioning or desire.?",
  },
];
const QueryButton = ({ onClick, children, selected }) => (
  <Button
    variant={"outline"}
    padding={["1rem", "2rem 3rem"]}
    fontSize={["1rem", "", "1.2rem", "2rem"]}
    minW={["80%", "350px"]}
    borderRadius={"2rem"}
    border={"2px solid black"}
    color={selected ? "white" : ""}
    backgroundColor={selected ? "#9ffaab" : ""}
    onClick={onClick}
  >
    {children}
  </Button>
);
export const Query = () => {
  const [query, setQuery] = useState({
    symptomQuery: 0,
    query1: 0,
  });
  const progress =
    ((query.symptomQuery + query.query1) /
      (therapistQuery.length + symptomDiscriptor.length)) *
    100;

  const [userDetails] = useState([]);
  const [therapistDetails, setTherapistdetails] = useState([]);
  const [symptoms, setSymptoms] = useState({
    behaviour: 0,
    sleep: 0,
    apetite: 0,
    concentration: 0,
    physical: 0,
    substanceUse: 0,
    suicidal: 0,
    hallucinations: 0,
    anxiety: 0,
    ocd: 0,
    ptsd: 0,
    eatingDisorder: 0,
    personalityDisorder: 0,
    psychoticDisorder: 0,
    sexualDisorder: 0,
  });
  const [selected, setSelected] = useState(null);

  const RenderSymptomQuery = () => {
    const handleChange = (key, val, select) => {
      setSelected(select);
      // setQuery({ ...query, symptomQuery: query.symptomQuery + 1 });
      setSymptoms({ ...symptoms, [key]: val });
    };
    return symptomDiscriptor.map((discriptor, index) => {
      return (
        <Flex key={discriptor} direction="column" gap="1rem" w="100%" h="100%">
          <Flex alignSelf={"start"} flexDirection={["column", "row"]}>
            {query.symptomQuery > 0 && (
              <Button
                alignSelf={"center"}
                background={"transparent"}
                padding={"2rem"}
                flexShrink={0}
                onClick={() => {
                  setQuery({ ...query, symptomQuery: query.symptomQuery - 1 });
                  setSelected(null);
                }}
              >
                <AiOutlineArrowLeft size={"1rem"} />
                Prev
              </Button>
            )}
            <Box>
              <Heading fontSize={["1rem", "1.5rem"]}>
                {" "}
                {discriptor.question.split("(")[0]}
              </Heading>
              <Text fontSize={["1rem", "1.2rem"]}>
                {discriptor.question.split("(")[1]}
              </Text>
            </Box>
          </Flex>

          <Flex
            alignSelf={"center"}
            gap={"1rem"}
            h="100%"
            flexDirection={["column", "row"]}
          >
            <Flex direction="column" gap={"1rem"} h="100%">
              <QueryButton
                selected={selected === 1}
                onClick={() => handleChange(discriptor.key, 0, 1)}
              >
                1.Not at all
              </QueryButton>

              <QueryButton
                selected={selected === 2}
                onClick={() => handleChange(discriptor.key, 0.25, 2)}
              >
                2.Maybe a little{" "}
              </QueryButton>

              <QueryButton
                selected={selected === 3}
                onClick={() => handleChange(discriptor.key, 0.5, 3)}
              >
                3.Often{" "}
              </QueryButton>
              <QueryButton
                selected={selected === 4}
                onClick={() => handleChange(discriptor.key, 0.75, 4)}
              >
                4.More than often{" "}
              </QueryButton>
              <QueryButton
                selected={selected === 5}
                onClick={() => handleChange(discriptor.key, 1, 5)}
              >
                5.All the time
              </QueryButton>
            </Flex>

            <Button
              alignSelf={"center"}
              background={"transparent"}
              padding={"2rem"}
              disabled={selected === null}
              minH={"70%"}
              onClick={() => {
                setQuery({ ...query, symptomQuery: query.symptomQuery + 1 });
                setSelected(null);
              }}
            >
              Proceed
              <AiOutlineArrowRight />
            </Button>
          </Flex>
        </Flex>
      );
    })[query.symptomQuery];
  };
  console.log(therapistDetails);

  const renderQuestion = () => {
    return (
      <>
        <Flex
          direction="column"
          gap="1rem"
          alignItems={"center"}
          paddingTop="2rem"
          w="100%"
          height={"100%"}
        >
          <Flex w="100%" flexDirection={["column", "row"]}>
            {query.symptomQuery >= Object.keys(symptoms).length &&
            !(query.query1 > 0) ? (
              <Button
                alignSelf={"center"}
                background={"transparent"}
                padding={"2rem"}
                flexShrink={0}
                onClick={() => {
                  setQuery({ ...query, symptomQuery: query.symptomQuery - 1 });
                  setSelected(null);
                }}
              >
                <AiOutlineArrowLeft size={"1rem"} />
                Prev
              </Button>
            ) : (
              <Button
                alignSelf={"center"}
                background={"transparent"}
                padding={"2rem"}
                flexShrink={0}
                onClick={() => {
                  setQuery({ ...query, query1: query.query1 - 1 });
                  setSelected(null);
                }}
              >
                <AiOutlineArrowLeft size={"1rem"} />
                Prev
              </Button>
            )}
            <Heading fontSize={["1rem", "1.5rem"]}>
              {therapistQuery[query.query1].title}
            </Heading>
          </Flex>
          <Flex
            alignSelf={"center"}
            gap={"3rem"}
            height={"100%"}
            flexDirection={["column", "row"]}
          >
            <Flex direction={"column"} gap="1rem">
              {therapistQuery[query.query1].options.map((option, index) => {
                return (
                  <QueryButton
                    selected={index === selected}
                    key={therapistQuery[query.query1].title + option}
                    onClick={() => {
                      setSelected(index);
                      setTherapistdetails([
                        ...therapistDetails.filter((details) => {
                          return (
                            Object.keys(details)[0] !==
                            therapistQuery[query.query1].title
                          );
                        }),
                        { [therapistQuery[query.query1].title]: option },
                      ]);

                      // setQuery({
                      //   ...query,
                      //   query1: query.query1 + 1,
                      // });
                    }}
                  >
                    {index + 1}) {option}
                  </QueryButton>
                );
              })}
            </Flex>

            <Button
              alignSelf={"center"}
              background={"transparent"}
              padding={
                // query.query1 === therapistQuery.length - 1
                //   ? "45rem 3rem 45rem 3rem"
                //   : "2rem"
                "2rem"
              }
              maxH={query.query1 === therapistQuery.length - 1 && "100%"}
              disabled={selected === null}
              onClick={() => {
                setQuery({
                  ...query,
                  query1: query.query1 + 1,
                });
                setSelected(null);
              }}
            >
              Proceed
              <AiOutlineArrowRight />
            </Button>
          </Flex>
        </Flex>
      </>
    );
  };

  return (
    <Box
      display={"flex"}
      marginTop={"3rem"}
      gap="1rem"
      minH="100vh"
      bgImage={HomeGreen}
      justifyContent={"center"}
      w="100%"
      bgPos={"center 300px "}
      bgSize="cover"
      bgRepeat={"no-repeat"}
    >
      <motion.div
        initial={{ opacity: 0.5, y: "10%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px "}
          bg={"white"}
          minW={"80%"}
          maxW="80%"
          margin="auto"
          maxHeight={"80vh"}
          overflowY="scroll"
          borderRadius={"1rem"}
          padding="2rem"
        >
          {query.query1 < therapistQuery.length ? (
            <>
              <Heading fontSize={["1rem", "1.5rem"]}>
                Find the right therapist for you
              </Heading>
              <Text fontSize={["1rem", "1.5rem"]}>
                Fill this short questionnare so we can help you find the right
                therapist for you
              </Text>
              <Progress
                colorScheme="green"
                height="1rem"
                borderRadius="50px"
                value={progress}
              />
              {query.symptomQuery + query.query1} out of{" "}
              {therapistQuery.length + symptomDiscriptor.length}
              <Divider marginTop={"1rem"} />
              {query.symptomQuery < Object.keys(symptoms).length
                ? RenderSymptomQuery()
                : renderQuestion()}
            </>
          ) : (
            <>
              <Button
                alignSelf={"center"}
                background={"transparent"}
                padding={"1rem"}
                flexShrink={0}
                onClick={() => {
                  setQuery({ ...query, symptomQuery: query.symptomQuery - 1 });
                  setSelected(null);
                }}
              >
                <AiOutlineArrowLeft size={"1rem"} />
                Back
              </Button>
              <Heading fontSize={["1rem", "1.5rem"]}>
                Thank You for taking your time to fill this questionare.
              </Heading>
              <Text fontSize={["1rem", "1.5rem"]}>
                Before we reccomend your therapist we would like you to signup
                such that we can provide you a better experience.
              </Text>
              <Box marginTop={"3rem"}>
                <UserSignup
                  data={{
                    user: userDetails,
                    symptoms: symptoms,
                    therapist: therapistDetails,
                  }}
                />
              </Box>
            </>
          )}
        </Box>
      </motion.div>
    </Box>
  );
};
