import { goToLoginPage } from '../../routes/coordinator';
  
  import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate()


  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient='linear(90deg, #FF6489 50%, #F9B24E 100%)'
        backgroundClip="text">
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2} color={"#FF6489"}>
        Page Not Found
      </Text>
      <Text color={"#F9B24E"} mb={6}>
        The page you're looking for does not seem to exist
      </Text>

      <Button
        colorScheme="orange"
        bgGradient='linear(90deg, #FF6489 50%, #F9B24E 100%)'
        color="white"
        variant="solid" onClick={() => goToLoginPage(navigate)}>
        Go to Home
      </Button>
    </Box>
  );
}



