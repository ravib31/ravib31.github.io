import React from "react";
import {
  Heading,
  Text,
  Image,
  Box,
  SimpleGrid,
  ChakraBaseProvider,
} from "@chakra-ui/react";

const Skills_data = [
  {
    id: 1,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMGsYGEmdr1fQr4k4rJ5s3wJ0jgbxZnw6c2Q&usqp=CAU",
    title: "Github",
  },
  {
    id: 2,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxjZGICAMl3pdiqh43mQjzHiChRgLdxxWsg&usqp=CAU",
    title: "Netlify",
  },
  {
    id: 3,
    logo: "https://cdn.sanity.io/images/897el8p6/production/a804a741fb26f6c236c73086a87cfc9f64106401-480x480.png",
    title: "Git",
  },

  {
    id: 4,
    logo: "data:image/png;base64,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",
    title: "Postman",
  },
  {
    id: 5,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMdYGzeQqSW5fcbollGfBqCjs5o0IJ0MIYyg&usqp=CAU",
    title: "VS Code",
  },
  {
    id: 6,
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1BLa_d1SN9EELEOi0Zy_S6MZbmRtqZpknxA&usqp=CAU",
    title: "Vercel",
  },
  {
    id: 7,
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAArlBMVEXMAAH////MAAD//P/6//ywAADrxMb9/vz6//3+//vrqan8//n///7qy8uzAAC9AADHAwDKXl//7fHWcHD/9fOpAAD5//H/9v/ry8X//fL0///KAgTTAgzaAA7BBQPRAAHdhYXrxMvbmaDUABTjraDu//vpzcrprKPy/+3tqKj+9/T//O3/9Or/9ff/7erJbm7Tc2/YamzjlZ6hAADOXWHDX1zNXVjefn7RTU7wvL6qMayJAAAEyElEQVR4nO2dC3ObRhRG94HEIjC7fugFCsRNE8eq4qZt6rb//48VHMejMevXElZ30XdGnvGMZMTR5btrS+O7jIERIO6/RvsNAAFAJC3IIQCjhkg/QKcBRw2RtCCHAIwaIv0AnQYcNUTSghwCMGqI9AN0GnDUEEkLcgjAqCHSD9BpwFFDJC3IIQCjhkg/QKcBRw2RtCCH/hEPL5SPJ2tvXguy2WzeMSNMOfxTlboq63qz8fFcewgzmcznOtf5ZHByrfP5fKKN+9myN8dXbPL30+nJ1AurVXO7/GXy4Xsw/HQasZnPJOfNzQuSK345/+AziEJMfl0rKdNUxYOTJjL6qD7Na6+dRuRXaymTxedIRQOjopQnKV/ltfvZsrfnsNTXcrnkaRoNX0OlZMblpXY7VdcXxeir9ZYXRSyHR31MFymf5pXr2TrRGsaqkMtk6Is0ipeqNTzJtVdDNpnJJhyKZ8N30ljGUcxPJn5X/B+G8fCCWSKbMDaG7ifrFN8DGJZ+/7Y4jKFP/BqqfldpKIbuNQwgh2r0ORz5VRr1vkrpG2Y918MQDNWoV/w9w5F2mv41hGH4hsihlaBq6NEwe+4P5vZOywOCMowW7RuDhUy6bzfJZbFYb3nyW0cxKEOeSBmnEV9375FLFW1lUaSde4LqNDJSfLu7udhddFh/2a5vlkWhnjUk32maX6Hl5e/n51/PO3z9o7n9eSa3Q9TQnyGPCj77K9cWjKh0fnuzDjyH6aLgV7mpu+/PCyGM0ae7dDGEobccZs1PPGHIWFUa8+2L7H6cFVIOs7Q1nOe2jzrrsjmbbxcvGPrE6SpNMslnuWaWGoqKGXO7s3wkGZYhjxvDqrQZlqzJ4VncPWBghuolw2QIQ38r/p7h4wO+zpB6pzlYDX0avpjDwA3bR9sNBRtHDvcMHx3wlYbkc3ioGsIQhvQN0WmsBFVDEoZY8ZFD5BCGMCRuiE5jJagakjDEio8cIocwhCFxQ3QaK0HVkIQhVnzkEDmEIQyJG6LTWAmqhiQMseIjh8ghDGFI3BCdxkpQNSRhiBUfOUQOYQhD4oboNFaCqiEJQ6z4yCFySN4wlPk0robhzBhyM+w/J4p6pwlp1le/GgZ+lT6z4oc0zcy5hj3nJgaQw2BmXz5dQ/YKQ/eT7WP4thm03w2N9SptZxOfnmVdwwPNoHWbIxzH7cSBStj+D7iuhT5tZyqoew47R9hxFnSaFupK22p4d9Dq7516GD+U/cRZ0A7xdZznnaxVcV2ZkonuAcuyFre7JImTew47z9ttJrvKsqKYmbLqPrEoK1PXtzsllXp0mf6Emewugm5z9bks1HVVVtZeamrRzjZpShbf+T381EHm6rvujZDw5Lrtpd0a1nU7geemWRvu2W/SffdGcMmh4/4Wq9X0H90mrnPAumaV/ve/kxWR/S3c9ihpNxvJm1ZaWkbwmJqZd7W2Ha//HiUuuO0zY0yjV5Wl5ZVtDHXbg6p2ZNQdP+450D4zjLnsFfTyg596hGDM815BYeEW34C+ASAAiKQFOQRg1BDpB+g04KghkhbkEIBRQ6QfoNOAo4ZIWpBDAEYNkX6ATgOOGiJpQQ4BGDVE+gE6DThqiKQFOQRg1BDpB+g04KghkhbkEDzF/zwn5FlQCmWVAAAAAElFTkSuQmCC",
    title: "NPM",
  },
  {
    id: 8,
    logo: "https://imgs.search.brave.com/oqH5mkxgfqhA6KT2y_VddIyfy1NFwAtYHkmssdWp0JI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9waWMu/dnNpeGh1Yi5jb20v/ZjUvOTQvMmZkNTYy/MDctNzhlZi00OWQ0/LTk1ZDItOWI4MDFl/ZWU0ZGJmLWxvZ28u/d2VicA",
    title: "Thunder Client",
  },
];

const Tools = () => {
  return (
    <ChakraBaseProvider>
      <Box
        id="tools"
        h={{ base: "auto", md: "80vh" }}
        mt={180}
        marginTop="50px"
      >
        <Heading
          textAlign="center"
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
        >
          <Text as={"span"}>Tools</Text>
        </Heading>
        <Box width={"70%"} margin="auto" mt="30px" pl="7%">
          <SimpleGrid
            columns={{ base: 2, sm: 2, md: 4 }}
            spacing={{ base: 12, sm: 8, md: 10 }}
          >
            {Skills_data.map((skill) => (
              <Box
                key={skill.id}
                mt={{ base: "10px" }}
                width={{ base: "80px", sm: "80px", lg: "100px" }}
                p={1}
                h={{ base: "80px", sm: "80px", lg: "100px" }}
                border=".3px solid yellow"
                align="center"
              >
                <Image src={skill.logo} objectFit="cover" alt="logo" />
                <Text mt="5px" color="gray.400">
                  {skill.title}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </ChakraBaseProvider>
  );
};

export default Tools;
