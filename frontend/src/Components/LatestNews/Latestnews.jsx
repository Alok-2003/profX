import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, HStack, Stack, Heading, Text, Image } from '@chakra-ui/react'
const Latestnews = () => {

    const [news, setNews] = useState([])
    useEffect(() => {

        var url = 'https://newsapi.org/v2/top-headlines?' +
            'category=science&' +
            'country=us&' +
            'apiKey=d9f0a940c231415dafbb0777e8a4449f';

        var req = new Request(url);
        fetch(req)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data.articles);
                setNews(data.articles);
                console.log('done')// Output the articles to the console
            })
            .catch(function (error) {
                console.error('Error fetching science news:', error);
            });
    }, [])



    return (
        <>
            <Card bg={'white'} boxShadow='lg' marginTop={'10px'} width={'24vw'} height={'22rem'} borderRadius={'4px'}>
                <CardHeader>
                    <Heading size='xs' backgroundColor={'#4C00A4'} padding={'7px'} marginTop={'-19.3px'} marginLeft={'-1.2rem'} borderRadius={'3px 3px 0px 0px '} color={'white'} width={'24vw'}> Latest Updates:</Heading>
                </CardHeader>
                <CardBody overflowY={'scroll'} >

                    <Stack>
                        {

                            news.map((newsItem, index) => {

                                return (
                                    <>

                                        <Link target='_blank' key={index} to={newsItem.url}>


                                            <HStack cursor={'pointer'} _hover={{
                                                backgroundColor: 'gray'
                                            }}
                                                padding={'3px'}
                                                borderRadius={'3px'}>


                                                {<Image src={newsItem.urlToImage ? newsItem.urlToImage : 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'} height={'43px'} />}
                                                <Text textAlign={'justify'} lineHeight={'1rem'} fontWeight={'bold'}> {newsItem.title} </Text>
                                            </HStack>

                                        </Link>
                                        <hr />

                                    </>

                                )
                            })

                        }
                        <hr />
                    </Stack>
                </CardBody>
            </Card>
        </>
    )
}

export default Latestnews;