import { Card, Textarea, Button, Stack, FormErrorMessage, useColorModeValue } from "@chakra-ui/react";

export default function CardNewPostAndComment({ isValid, value, onChange, onSubmit, placeholder, buttonName }) {

    return (
        <>
            <Stack margin={"30px"} isValid={!isValid} onSubmit={onSubmit} >
                <form >
                    <Card bg={useColorModeValue("#FBFBFB",'#FBFBFB"', 'gray.700')}>
                        <Textarea name="content"
                            borderColor={"#E0E0E0"}
                            focusBorderColor='#FE7E02'
                            rows={6}
                            resize="none"
                            value={value}
                            onChange={onChange} placeholder={placeholder} >
                            {!isValid ? (<FormErrorMessage>Seu Post deve ter ao menos dois caracteres.</FormErrorMessage>
                            ) : undefined}
                        </Textarea>
                    </Card>

                    <Button width={"100%"}
                        marginTop={"20px"}
                        type={"submit"}
                        bgGradient='linear(90deg, #FF6489 0%, #F9B24E 100%)'
                        borderRadius={"27px"}
                        color={'white'}
                        _hover={{
                            bgGradient: 'linear(90deg, #FF6489 50%, #F9B24E 100%)',
                        }}

                        variant='add-post'

                    >
                        {buttonName}
                    </Button>

                </form>
            </Stack>

        </>
    );
}
