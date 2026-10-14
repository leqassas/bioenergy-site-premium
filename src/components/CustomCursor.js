import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

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
      opacity={isVisible ? 1 : 0}
      animate={{
        x: mousePosition.x - 10,
        y: mousePosition.y - 10,
        opacity: isVisible ? 1 : 0,
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
