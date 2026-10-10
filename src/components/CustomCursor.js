import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <Box
      as={motion.div}
      position="fixed"
      top={0}
      left={0}
      w="20px"
      h="20px"
      borderRadius="full"
      border="2px solid var(--chakra-colors-prim2)"
      pointerEvents="none"
      zIndex="9999"
      animate={{
        x: mousePosition.x - 10,
        y: mousePosition.y - 10,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
      display={["none", "none", "block"]}
    />
  );
}
