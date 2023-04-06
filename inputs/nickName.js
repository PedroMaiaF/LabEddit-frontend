
import {
    FormControl,
    Input,
    InputGroup,
    FormErrorMessage,
} from '@chakra-ui/react';


export const NickNameInput = ({ isValid, value, onChange }) => {
    return (
        <FormControl margin={"10px"} id="nickName" isInvalid={!isValid}>
            <InputGroup size='md'>
                <Input focusBorderColor={'#FE7E02'}
                    placeholder="Apelido"
                    _placeholder={{ color: 'gray.500' }}
                    name="nickName"
                    type="text"
                    value={value}
                    onChange={onChange} />
            </InputGroup>
            {!isValid ? (<FormErrorMessage>Apelido deve ter ao menos dois caracteres.</FormErrorMessage>
            ) : undefined}
        </FormControl>
    )
}