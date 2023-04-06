
import { Flex, Box, Stack, Button, Heading, Text, useColorModeValue, Divider, Image, Spinner, } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import Vector1 from "../../assets/Vector1.svg"
import Vector2 from "../../assets/Vector2.svg"
import Vector3 from "../../assets/Vector3.svg"
import Vector4 from "../../assets/Vector4.svg"
import { useForm } from '../../hooks/use-form';
import { validateEmail, validatePassword } from '../../constants/url';
import { EmailInput } from '../../inputs/email';
import { PasswordInput } from '../../inputs/password';
import { useNavigate } from 'react-router-dom';
import { goToSignupPage, goToFeedPage } from '../../routes/coordinator';
import { Login } from '../../constants/url';
import { GlobalContext } from '../../contexts/GlobalContext';


export default function LoginPage() {

  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isPasswordValid, setPasswordValid] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const context = useContext(GlobalContext)
  const [form, onChangeInputs, clearInputs] = useForm({
    email: "",
    password: ""
  })


  useEffect(() => {
    if (context.isAuth) {
      goToFeedPage(navigate)
    }
  })

  
  const onSubmit = async (e) => {
    e.preventDefault()
    console.log(form)
    setIsEmailValid(validateEmail(form.email))
    setPasswordValid(validatePassword(form.password))
    goToFeedPage(navigate)
    try {
      setIsLoading(true)
      const { token } = isEmailValid && isPasswordValid && await Login({
        email: form.email,
        password: form.password
      })
      localStorage.setItem("labeddit.token", token);
      setIsLoading(false)
      context.setIsAuth(true)
      goToFeedPage(navigate)

    } catch (error) {
      alert(error.response.data)
      setIsLoading(false)
    }
  }


  return (

    <Box
      spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}
      align={'center'}
      rounded={'lg'}
      bg={useColorModeValue('white', 'gray.700')}
      p={8}>
      <Flex justifyContent={'center'} marginTop={"100px"}>
        <Image src={Vector1} />
        <Image src={Vector2} />
      </Flex>
      <Flex justifyContent={'center'} >
        <Image src={Vector3} />
        <Image src={Vector4} />
      </Flex>
      <Heading fontSize={'4xl'}>LabEddit
      </Heading>
      <Text fontSize={'16px'} color={'gray.600'}>
        O projeto de rede social da Labenu ✌️
      </Text>
      <Box marginTop={"150px"}>

        <Stack spacing={1} >

          <form onSubmit={onSubmit}>

            <EmailInput isValid={isEmailValid} value={form.email} onChange={onChangeInputs} />

            <PasswordInput isValid={isPasswordValid} value={form.password} onChange={onChangeInputs} />
            <br />
            <Button
              margin={"10px"}
              type="submit"
              variant="form"
              bgGradient='linear(90deg, #FF6489 0%, #F9B24E 100%)'
              borderRadius={"27px"}
              color={'white'}
              _hover={{
                bgGradient: 'linear(90deg, #FF6489 50%, #F9B24E 100%)',
              }} width={"100%"}> {isLoading ? <Spinner /> : "Continuar"}   </Button>


            <Divider borderColor={'#FE7E02'} margin={"10px"} />

            <Button margin={"10px"} colorScheme={'#FE7E02'} variant='outline' borderRadius={"27px"} color={'#FE7E02'}
              _hover={{
                bgGradient: 'linear(90deg, #FF6489 50%, #F9B24E 100%)',
                color: ' white '
              }}
              onClick={() => goToSignupPage(navigate)}
              width={"100%"} >Crie uma conta!   </Button>

          </form>

        </Stack>
      </Box>
    </Box>

  );
}