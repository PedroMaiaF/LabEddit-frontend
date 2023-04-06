import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Checkbox,
  Stack,
  Link,
  Spinner,
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { useForm } from '../../hooks/use-form';
import { validadenickName, validateEmail, validatePassword, Signup } from '../../constants/url';
import Header from '../../components/Header/Header';
import { EmailInput } from '../../inputs/email';
import { PasswordInput } from '../../inputs/password';
import { NickNameInput } from '../../inputs/nickName';
import { goToFeedPage } from '../../routes/coordinator';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../contexts/GlobalContext';


export default function SignupPage() {
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isPasswordValid, setPasswordValid] = useState(true)
  const [isnickNameValid, setnickNameValid] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const context = useContext(GlobalContext)
  const navigate = useNavigate()
  const [form, onChangeInputs, clearInputs] = useForm({
    nickName: "",
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
    setnickNameValid(validadenickName(form.nickName))
    try {
      setIsLoading(true)
      const { token } = isnickNameValid && isEmailValid && isPasswordValid && await Signup({
        nickName: form.nickName,
        email: form.email,
        password: form.password
      })
      localStorage.setItem("labeddit.token", token);
      goToFeedPage(navigate)
      setIsLoading(false)
      context.setIsAuth(true)
    } catch (error) {
      alert(error.response.data)
      setIsLoading(false)
    }
  }


  return (
    <div>
      <Header isOnSignupPage={true} />
      <Box
        spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}
        align={'center'}
        rounded={'lg'}
        bg={useColorModeValue('white', 'gray.700')}
        // boxShadow={'lg'}
        p={8}
      >
        <Heading fontSize={'33px'}>Olá, boas vindas ao LabEddit!
        </Heading>
        <Box marginTop={"245px"}>
          <Stack spacing={4}>

            <form onSubmit={onSubmit}>

              <NickNameInput isValid={isnickNameValid} value={form.nickName} onChange={onChangeInputs} />

              <EmailInput isValid={isEmailValid} value={form.email} onChange={onChangeInputs} />

              <PasswordInput isValid={isPasswordValid} value={form.password} onChange={onChangeInputs} />

              <Stack spacing={10}>
                <Stack
                  display={"flex"}

                  justify={'space-between'}>
                  <Box>
                    <Text fontSize={"14px"} textAlign={"left"}>
                      Ao continuar, você concorda com o nosso
                      <Link color={'blue.400'}> Contrato de usuário </Link>
                      e nossa
                      <Link color={'blue.400'}> Política de Privacidade</Link>
                    </Text>
                  </Box>

                  <Checkbox > <Text textAlign={"left"} fontSize={"14px"}>
                    Eu concordo em receber emails sobre coisas legais no Labeddit</Text></Checkbox>
                </Stack>
                <Button
                  type={"submit"}
                  bgGradient='linear(90deg, #FF6489 0%, #F9B24E 100%)'
                  borderRadius={"27px"}
                  color={'white'}
                  _hover={{
                    bgGradient: 'linear(90deg, #FF6489 50%, #F9B24E 100%)',
                  }}
                  margin={"10px"}>
                  {isLoading ? <Spinner /> : "Cadastrar"}
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Box>
    </div>

  );
}