import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, HStack, Stack, Heading, Text, Image } from '@chakra-ui/react';
import axios from 'axios';

const Latestnews = () => {
    // const [news, setNews] = useState([]);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     const url = 'https://newsapi.org/v2/everything?q=keyword&apiKey=d2c3e24ce39948caa79040fe10ad2929';

    //     axios.get(url)
    //         .then(response => {
    //             setNews(response.data.articles);
    //             console.log(response.data.articles)
    //         })
    //         .catch(error => {
    //             console.error('Error fetching science news:', error);
    //             setError(error.message);
    //         });
    // }, []);

    // If you uncomment this api give error on delpoyment due to pricing policy of news api you can get data only when you hit through localhost

    const news=[
        {
            "source": {
                "id": null,
                "name": "Search Engine Journal"
            },
            "author": "Roger Montti",
            "title": "Research Confirms Google AIO Keyword Trends via @sejournal, @martinibuster",
            "description": "Research confirms Google AIO keyword trends observed by digital marketers \nThe post Research Confirms Google AIO Keyword Trends appeared first on Search Engine Journal.",
            "url": "https://www.searchenginejournal.com/research-confirms-google-aio-keyword-trends/522365/",
            "urlToImage": "https://www.searchenginejournal.com/wp-content/uploads/2024/07/google-ai-overviews-268.jpg",
            "publishedAt": "2024-07-17T17:53:22Z",
            "content": "New research by enterprise search marketing company BrightEdge reveals dramatic changes to sites surfaced through Google’s AI Overviews search feature and though it maintains search market share, the… [+5880 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hubspot.com"
            },
            "author": "Erin Pennings",
            "title": "Top 10 Best Rank Tracker Tools of 2024",
            "description": "It’s one thing to have good website copy — it’s something entirely different to ensure your site has great copy (and design) and also ranks well on Google.",
            "url": "https://blog.hubspot.com/marketing/best-rank-tracker#article",
            "urlToImage": "https://www.hubspot.com/hubfs/ft-rank.webp",
            "publishedAt": "2024-07-10T11:00:00Z",
            "content": "Its one thing to have good website copy its something entirely different to ensure your site has great copy (and design) and also ranks well on Google.\r\nAs someone who writes website copy for a livin… [+23390 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Search Engine Journal"
            },
            "author": "Vahan Petrosyan",
            "title": "Find Keyword Cannibalization Using OpenAI’s Text Embeddings With Examples via @sejournal, @vahandev",
            "description": "Find out how to easily detect keyword cannibalization with OpenAI's text embeddings. Level up your SEO skills with the help of generative AI.\nThe post Find Keyword Cannibalization Using OpenAI’s Text Embeddings With Examples appeared first on Search Engine Jo…",
            "url": "https://www.searchenginejournal.com/find-keyword-cannibalization-using-openai-text-embeddings-examples/520274/",
            "urlToImage": "https://www.searchenginejournal.com/wp-content/uploads/2024/07/untitled-design-78-419.png",
            "publishedAt": "2024-07-26T10:30:46Z",
            "content": "This new series of articles focuses on working with LLMs to scale your SEO tasks. We hope to help you integrate AI into SEO so you can level up your skills.\r\nWe hope you enjoyed the previous article … [+15268 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "jerry.hildenbrand@futurenet.com (Jerry Hildenbrand)",
            "title": "Ask Jerry: How can I filter incoming messages?",
            "description": "Have a question about the tech in your life? If so, maybe we can get them answered!",
            "url": "https://www.androidcentral.com/phones/ask-jerry-how-can-i-filter-incoming-messages",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/HrmCzNcQDgwjg2sArrBf7S-1200-80.jpg",
            "publishedAt": "2024-07-29T19:26:25Z",
            "content": "Welcome to Ask Jerry, where we talk about any and all the questions you might have about the smart things in your life. I'm Jerry, and I have spent the better part of my life working with tech. I hav… [+4054 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "tips@androidcentral.com (Nickolas Diaz)",
            "title": "Google expands its wildfire alerts across multiple European and African countries",
            "description": "Google detailed the start of a wildfire alert expansion in Europe and Africa.",
            "url": "https://www.androidcentral.com/apps-software/google-wildfire-alerts-europe-africa-expansion",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/73FrRwMgBnX5grxQJEYbpZ-1200-80.jpg",
            "publishedAt": "2024-07-31T17:36:33Z",
            "content": "What you need to know\r\n<ul><li>Google announced that it has started expanding its wildfire boundary alerts across 15 additional European and African countries.</li><li>These alerts will appear throug… [+2581 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Search Engine Journal"
            },
            "author": "Ginny Marvin",
            "title": "A Guide To Keyword Prioritization & The Newest Query Matching Controls In Google Ads via @sejournal, @adsliaison",
            "description": "Understanding how the four keyword prioritization rules and new query matching controls work just might have you rethinking your account structure. \nThe post A Guide To Keyword Prioritization & The Newest Query Matching Controls In Google Ads appeared first o…",
            "url": "https://www.searchenginejournal.com/guide-keyword-prioritization-query-matching-controls-google-ads/522257/",
            "urlToImage": "https://www.searchenginejournal.com/wp-content/uploads/2024/07/a-guide-to-keyword-prioritization-the-newest-query-matching-controls-in-google-ads-335.png",
            "publishedAt": "2024-07-24T10:00:07Z",
            "content": "There are often times when more than one keyword (and/or search theme) in your account will be eligible to match for a search term. Yet only one will be selected to compete in each auction.\r\nSo, how … [+24406 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Getlazarus.org"
            },
            "author": null,
            "title": "Railroading the Pascal Language",
            "description": "Comments",
            "url": "https://www.getlazarus.org/learn/language/lexical/",
            "urlToImage": null,
            "publishedAt": "2024-07-17T10:57:16Z",
            "content": "Save your personal edits of this page?\r\nYou are viewing the original copy of this page\r\nYou are viewing your personal edited copy of this page\r\nDelete your edits, are you sure?\r\nApply your edits to t… [+12268 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cppstories.com"
            },
            "author": "",
            "title": "Enum class improvements for C++17, C++20 and C++23",
            "description": "The evolution of the C++ language continues to bring powerful features that enhance code safety, readability, and maintainability. Among these improvements, we got changes and additions to enum class functionalities across C++17, C++20, and C++23. In this blo…",
            "url": "https://www.cppstories.com/2024/enum-improvements/",
            "urlToImage": "https://www.cppstories.com/2024/images/enum_improvements.png",
            "publishedAt": "2024-08-04T20:09:37Z",
            "content": "Table of Contents\r\nThe evolution of the C++ language continues to bring powerful features that enhance code safety, readability, and maintainability. Among these improvements, we got changes and addi… [+7624 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "tips@androidcentral.com (Nickolas Diaz)",
            "title": "Google goes for gold in Team USA partnership to promote its products",
            "description": "Google announced its partnership with Team USA for the 2024 Summer Olympic Games.",
            "url": "https://www.androidcentral.com/phones/google-team-usa-nbcuniversal-partner-2024-olympics",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/Es4ZtrwMSCMs2tQRLEPKLi-1200-80.jpg",
            "publishedAt": "2024-07-18T19:21:18Z",
            "content": "What you need to know\r\n<ul><li>Google announces its partnership with Team USA and NBCUniversal for the 2024 Summer Olympic Games in Paris, France.</li><li>The company states its AI software and Maps … [+2772 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "tips@androidcentral.com (Nickolas Diaz)",
            "title": "Google's new 'School Time' feature for Android keeps your child from slacking",
            "description": "Google has announced a new parental feature just in time for back-to-school season.",
            "url": "https://www.androidcentral.com/apps-software/google-school-time-parental-android-feature-detailed",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/7M6GspxmksfEWLcKeJd2K5-1200-80.jpg",
            "publishedAt": "2024-08-02T18:33:09Z",
            "content": "What you need to know\r\n<ul><li>Google details its coming parental feature for \"select\" Android devices, tablets, and Samsung Galaxy watches known as \"School Time.\"</li><li>Parents can set the days, t… [+3022 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Search Engine Journal"
            },
            "author": "Jonathan Kagan",
            "title": "When Search Isn’t Search Anymore, But It Is Still Search via @sejournal, @jonkagan",
            "description": "Uncover the drastic changes in the paid search industry over the years. From keyword reliance to advanced targeting, the landscape has evolved.\nThe post When Search Isn’t Search Anymore, But It Is Still Search appeared first on Search Engine Journal.",
            "url": "https://www.searchenginejournal.com/when-paid-search-isnt-just-search-anymore/521419/",
            "urlToImage": "https://www.searchenginejournal.com/wp-content/uploads/2024/07/search-ppc-old-vs-new-727.jpg",
            "publishedAt": "2024-07-29T09:15:14Z",
            "content": "If you talk to any paid search marketing old-timer (someone with 10+ years of experience) and ask them what has changed within the search industry, they will likely give you a straightforward reply:\r… [+10825 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Peter Butler （CNET News） 翻訳校正： 川村インターナショナル",
            "title": "昔のグーグル検索に戻りたい--AI要約や動画のないシンプルな検索結果にする方法",
            "description": "グーグル検索結果ページに「ウェブ」というフィルターが追加された。これを使用すると、テキストベースのリンクだけが表示される。本記事では、主要なブラウザーのアドレスバーから検索を実行し、ウェブフィルターが適用された検索結果を表示させる手順を解説する。",
            "url": "https://japan.cnet.com/article/35220988/",
            "urlToImage": "https://japan.cnet.com/storage/2023/03/30/d190152babdc63cfb52b74e517492640/20191008-google-headquarters-campus-mountain-view-003_1280x960.jpg",
            "publishedAt": "2024-07-08T22:30:00Z",
            "content": "GoogleAIAIAI\r\nGoogleAI\r\nGoogleGoogle ChromeMozillaFirefoxAppleSafariMicrosoft Edge\r\nGoogle\r\nGoogleAI\r\nGoogle3\r\nGoogleAI\r\nGoogleGoogleGoogle\r\nGoogle\r\nURLhttps://www.google.com/search?q=%s&amp;udm=14%s… [+882 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hubspot.com"
            },
            "author": "Anna Rubkiewicz",
            "title": "ChatGPT for SEO: Everything We Know So Far",
            "description": "Everyone knows that ChatGPT can generate content on nearly any topic you can imagine (some information might be made up, but that’s a story for a different article).",
            "url": "https://blog.hubspot.com/marketing/chatgpt-for-seo#article",
            "urlToImage": "https://www.hubspot.com/hubfs/chatGPT-for-SEO-1-20240715-1331931-1.webp",
            "publishedAt": "2024-07-16T11:00:00Z",
            "content": "Everyone knows that ChatGPT can generate content on nearly any topic you can imagine (some information might be made up, but thats a story for a different article).\r\nSo, while Im not a fan of using i… [+20818 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Search Engine Journal"
            },
            "author": "Kevin Indig",
            "title": "What 4,538 Domains Tell Us About ccTLDs Ranking In The US via @sejournal, @Kevin_Indig",
            "description": "Gain insight as this article explores a thousand random keywords to see if ccTLDs are becoming more relevant in US search results.\nThe post What 4,538 Domains Tell Us About ccTLDs Ranking In The US appeared first on Search Engine Journal.",
            "url": "https://www.searchenginejournal.com/what-4538-domains-tell-us-about-cctlds-ranking-in-the-us/522184/",
            "urlToImage": "https://www.searchenginejournal.com/wp-content/uploads/2024/03/kevin-indig-growth-memo-133.png",
            "publishedAt": "2024-07-16T13:30:59Z",
            "content": "Since the Times Of India quadrupled its organic growth in the US in 12 months, more ccTLDs (international domains) have been spotted ranking in the US.\r\nMore international domains would make sense as… [+5048 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "16bpp.net"
            },
            "author": null,
            "title": "C++'s `Noexcept` Can (Sometimes) Help (Or Hurt) Performance",
            "description": "Comments",
            "url": "https://16bpp.net/blog/post/noexcept-can-sometimes-help-or-hurt-performance/",
            "urlToImage": null,
            "publishedAt": "2024-08-05T16:55:52Z",
            "content": "Over the course of working on PSRayTracing (PSRT), I've been trying to find all sorts of tricks and techniques to squeeze out more performance from this C++ project. Most of it tends to be alternativ… [+23368 chars]"
        },
    ]

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
