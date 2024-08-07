import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, HStack, Stack, Heading, Text, Image } from '@chakra-ui/react';

const Latestnews = () => {
    const [news, setNews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = 'https://newsapi.org/v2/top-headlines?category=science&country=us&apiKey=d9f0a940c231415dafbb0777e8a4449f';

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setNews(data.articles);
                console.log(data.articles)
            })
            .catch(error => {
                console.error('Error fetching science news:', error);
                setError(error.message);
            });
    }, []);

    return (
        <Card bg="white" boxShadow="lg" marginTop="10px" width="24vw" height="22rem" borderRadius="4px">
            <CardHeader>
                <Heading size="xs" backgroundColor="#4C00A4" padding="7px" marginTop="-19.3px" marginLeft="-1.2rem" borderRadius="3px 3px 0px 0px" color="white" width="24vw">
                    Latest Updates:
                </Heading>
            </CardHeader>
            <CardBody overflowY="scroll">
                <Stack>
                    {error ? (
                        <Text color="red.500">Error: {error}</Text>
                    ) : (
                        news.map((newsItem) => (
                            <Link target="_blank" key={newsItem.url} to={newsItem.url}>
                                <HStack
                                    cursor="pointer"
                                    _hover={{ backgroundColor: 'gray' }}
                                    padding="3px"
                                    borderRadius="3px"
                                >
                                    <Image
                                        src={
                                            newsItem.urlToImage
                                                ? newsItem.urlToImage
                                                : 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'
                                        }
                                        height="43px"
                                    />
                                    <Text textAlign="justify" lineHeight="1rem" fontWeight="bold">
                                        {newsItem.title}
                                    </Text>
                                </HStack>
                            </Link>
                        ))
                    )}
                    <hr />
                </Stack>
            </CardBody>
        </Card>
    );
};

export default Latestnews;
