import { Card, CardBody, } from "@chakra-ui/card";
import { TbArrowBigDown, TbArrowBigUp } from 'react-icons/tb';
import {
    Flex,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { GoComment } from 'react-icons/go';
import { useEffect, useState } from "react";
import { goToPostDetailPage } from "../../routes/coordinator";
import { useNavigate } from 'react-router-dom';
import { CreateLikeDislikeComment } from "../../constants/url";



export default function CardComments({ idPost, id, creator, content, likesDislikes, totalComments }) {

    const [liked, setLiked] = useState();
    const [disliked, setDisliked] = useState();
    const navigate = useNavigate()


    const onSubmitLike = async (e) => {
        try {
            await CreateLikeDislikeComment(idPost, {
                like: e
            }, id)
            alert("like ou dislike");
        } catch (error) {
            alert(error.response.data)
        }
    }

    const onclickLiked = () => {
        onSubmitLike(true)
        if (liked === true) {
            setLiked(false)
        } else {
            setLiked(true)
        }
        setDisliked(false)
    }

    const onclickDisliked = () => {
        onSubmitLike(false)
        if (disliked === true) {
            setDisliked(false)
        } else {
            setDisliked(true)
        }
        setLiked(false)
    }


    return (
        <Card margin={"30px"} bg={useColorModeValue("#FBFBFB", '#FBFBFB"', 'gray.700')} borderColor={"#E0E0E0"} >


            <Text color={"#6F6F6F"} fontSize={"12px"} align={"left"} position={"absolute"} margin={"10px"}>
                Enviador por:&nbsp; {creator}
            </Text>

            <CardBody marginTop={"30px"} marginLeft={"-10px"}>
                <Text fontStyle={"regular"} fontSize={"18px"} align={"left"}>{content}</Text>
            </CardBody>


            <Flex align='center' bg={useColorModeValue("#FBFBFB", '#FBFBFB"', 'gray.700')} direction={"row"} >

                <Card align='center' margin={"20px"} width={"98px"} height={"28px"} direction={"row"} borderRadius={"28px"}
                    colorScheme='ECECEC' variant='outline' justifyContent={"space-around"} bg={useColorModeValue("#FBFBFB", '#FBFBFB"', 'gray.700')}>
                    <Flex
                        alignItems="center"
                        justifyContent={'space-between'}
                        roundedBottom={'sm'}

                        onClick={() => onclickLiked()}>


                        {liked ? (
                            <TbArrowBigUp color={"#6F6F6F"} fill="green" fontSize={'24px'} />

                        ) : (
                            <TbArrowBigUp color={"#6F6F6F"} fontSize={'24px'} />
                        )}
                    </Flex>

                    <Text>{likesDislikes}</Text>

                    <Flex
                        alignItems="center"
                        justifyContent={'space-between'}
                        roundedBottom={'sm'}
                        onClick={() => onclickDisliked()}>
                        {disliked ? (
                            <TbArrowBigDown color={"#6F6F6F"} fill="red" fontSize={'24px'} />
                        ) : (
                            <TbArrowBigDown color={"#6F6F6F"} fontSize={'24px'} />
                        )}
                    </Flex>
                </Card>
            </Flex>
        </Card>
    );
}
