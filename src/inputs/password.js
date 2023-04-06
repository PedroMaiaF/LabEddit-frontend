
import {
    FormControl,
    Input,
    Button,
    InputRightElement,
    InputGroup,
    FormErrorMessage,
} from '@chakra-ui/react';
import { useState } from 'react';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export const PasswordInput = ({ isValid, value, onChange }) => {
    const [showPassword, setShowPassword] = useState(false)

    const onClickShowPassword = () => {
        setShowPassword(!showPassword)
    }


    return (
        <FormControl margin={"10px"} id="password" isInvalid={!isValid}>
            <InputGroup size='md'>
                <Input
                    name="password"
                    value={value}
                    onChange={onChange}
                    type={showPassword ? "text" : "password"}
                    focusBorderColor={'#FE7E02'}
                    placeholder="Senha"
                    _placeholder={{ color: 'gray.500' }} />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={onClickShowPassword}>
                        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                    </Button>
                </InputRightElement>
            </InputGroup>
            {!isValid ? (<FormErrorMessage as="p"> Sua senha deve possuir entre 4 a 12 caracteres, com 1 letra maiuscula, 1 letra minúscula e 1 número
            </FormErrorMessage>) : undefined}
        </FormControl>
    )
}