
import {
    FormControl,
    Input,
    InputGroup,
    FormErrorMessage,
} from '@chakra-ui/react';


export const EmailInput = ({ isValid, value, onChange }) => {
    return (
        <FormControl margin={"10px"} id="email" isInvalid={!isValid}>
            <InputGroup size='md'>
                <Input focusBorderColor={'#FE7E02'}
                    placeholder="E-mail"
                    _placeholder={{ color: 'gray.500' }}
                    name="email"
                    //type="email"
                    value={value}
                    onChange={onChange} />
            </InputGroup>
            {!isValid ? (<FormErrorMessage>Email no formato inválido.</FormErrorMessage>
            ) : undefined}
        </FormControl>
    )
}