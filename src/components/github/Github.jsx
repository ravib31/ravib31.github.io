import { Box, ChakraProvider, Image } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from 'react-github-calendar'
import { Heading, Text} from "@chakra-ui/react";


function Github() {

    const selectLastHalfYear = contributions => {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const shownMonths = 8;
      
        return contributions.filter(day => {
          const date = new Date(day.date);
          const monthOfDay = date.getMonth();
      
          return (
            date.getFullYear() === currentYear &&
            monthOfDay > currentMonth - shownMonths &&
            monthOfDay <= currentMonth
          );
        });
      };

      return (
        <ChakraProvider>
          <Box mt="50px"  textAlign="center">
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
            >
              <Text as={'span'}>Github Status</Text>
            </Heading>
            <Box pt={5} pb={5} ></Box>
            <Box
  class="react-activity-calendar"
  width={{ base: "90%", md: "70%" }}
  border="1px solid yellow"
  marginX="auto"
  p={5}
  borderRadius='10px'
  mt={{ base: "2rem", md: "0" }} // Adjusted margin for different screens
  display="flex"
  justifyContent="center"
  alignItems="center"
>
  <GitHubCalendar username="ravib31" color="#4299E1" />
</Box>

            <Box
              display="flex"
              justifyContent={"center"}
              flexWrap={{ base: 'wrap', md: 'nowrap' }} // Adjusted flex-wrap for different screens
              gap={3}
              mt="2rem"
            >
              <Image
                width={{ base: "90%", md: "40%" }}
                border="1px solid yellow"
                borderRadius={"5px"}
                id="github-streak-stats"
                src="https://github-readme-streak-stats.herokuapp.com?user=ravib31&theme=prussian"
                alt=""
              />
              <Image
                width={{ base: "90%", md: "40%" }}
                border="1px solid yellow"
                borderRadius={"5px"}
                id="github-stats-card"
                src="https://github-readme-stats.vercel.app/api?username=ravib31&show_icons=true&locale=en&theme=prussian"
                alt=""
              />
            </Box>
            <Box
              display="flex"
              margin="auto"
              justifyContent={"center"}
              mt="2rem"
            >
              <Image
                width={{ base: "90%", md: "40%" }}
                border="1px solid yellow"
                borderRadius={"5px"}
                id="github-top-langs"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=ravib31&layout=compact"
                alt=""
              />
            </Box>
          </Box>
        </ChakraProvider>
      );
    }


export default Github;
