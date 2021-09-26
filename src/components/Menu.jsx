// ** @jsx jsx *
import React from "react";
import { jsx, Box, Text } from "theme-ui";
const Menu = () => {
  return (
    <Box p={4} sx={{ backgroundColor: "primary" }}>
      <div
        sx={{
          color: "background",
        }}
      >
        <Text
          sx={{
            fontFamily: "body",
            fontWeight: "bold",
          }}
        >
          uwulove.com
        </Text>
      </div>
    </Box>
  );
};

export default Menu;
