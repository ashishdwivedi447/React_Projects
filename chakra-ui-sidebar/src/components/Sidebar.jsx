import React from "react";
import { Image, Box, Text } from "@chakra-ui/react";
import {
  SunIcon,
  TriangleUpIcon,
  SearchIcon,
  StarIcon,
  SettingsIcon,
} from "@chakra-ui/icons";

// The default icon size is 1em (16px)

const Sidebar = () => {
  return (
    <div>
      <div id="side">
        <Box boxSize="sm">
          <Image
            width={`30%`}
            height={`40px`}
            top={`10%`}
            position={`absolute`}
            left={`25%`}
            src="https://www.kindpng.com/picc/m/79-792429_clip-art-nike-check-nike-logo-2018-png.png"
            alt="Dan Abramov"
          />
        </Box>

        <div id="naves">
          <Text
            fontSize="md"
            fontWeight={`bold`}
            color={`white`}
            width={`100%`}
          >
            <SunIcon />
            Home
          </Text>
          <Text
            fontSize="md"
            fontWeight={`bold`}
            color={`white`}
            width={`100%`}
          >
            <TriangleUpIcon />
            Trending
          </Text>
          <Text
            fontSize="md"
            fontWeight={`bold`}
            color={`white`}
            width={`100%`}
          >
            <SearchIcon />
            Explore
          </Text>
          <Text
            fontSize="md"
            fontWeight={`bold`}
            color={`white`}
            width={`100%`}
          >
            <StarIcon />
            Favourites
          </Text>
          <Text
            fontSize="md"
            fontWeight={`bold`}
            color={`white`}
            width={`100%`}
          >
            <SettingsIcon />
            Settings
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
