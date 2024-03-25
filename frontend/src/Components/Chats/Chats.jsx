import React, { useState } from 'react';
import Chatbot from '../Chatbot/Chatbot';
import { Stack, Card, HStack, Input, Heading, Button, Text } from '@chakra-ui/react';
import html2pdf from 'html2pdf.js';
import Todo from '../Dashboard/Todo/Todo';

const App = () => {
  const [question, setQuestion] = useState('');
  const [questionsList, setQuestionsList] = useState([]);

  const handleAddQuestion = () => {
    if (question.trim() !== '') {
      setQuestionsList([...questionsList, question]);
      setQuestion('');
    }
  };

  const handleReset = () => {
    setQuestion('');
    setQuestionsList([]);
  };

  const handleExportPDF = () => {
    const element = document.getElementById('questions-container');
    html2pdf().from(element).save();
  };

  return (
    <div>
      <Card marginLeft={'10rem'}
        boxShadow='xl' padding={'10px'}
        width={'50vw'} backgroundColor={'whitesmoke'} overflowY={'scroll'} marginTop={'30px'}>
        <Stack spacing={4}>
          <Heading as={'h1'} marginLeft={'30%'} fontSize={'20px'}>Make question paper</Heading>
          <hr height={'3px'} />
          <HStack>

            <Heading as={'h1'} fontSize={'23px'}>Question</Heading>
            <Input value={question} onChange={(e) => setQuestion(e.target.value)} width={'10rem'} border={'1px solid red'} />
          </HStack>
          <Button width={'7rem'} colorScheme='red' onClick={handleAddQuestion} marginLeft={'30%'}>Add Question</Button>

          <Stack id="questions-container">
            <Heading fontSize={'20px'} marginTop={'30px'}>Questions:</Heading>
            {questionsList.map((q, index) => (
              <HStack key={index}>
                <Text>{`Q${index + 1}) `}</Text>
                <Text>{q}</Text>
              </HStack>
            ))}
          </Stack>
          <HStack>
            <Button width={'7rem'} colorScheme='green' onClick={handleExportPDF}>Export as PDF</Button>
            <Button width={'7rem'} colorScheme='red' onClick={handleReset}>Reset</Button>
          </HStack>
        </Stack>
      </Card>

      <Card height={'90vh'} marginLeft={'-10rem'}>
        <Chatbot />
      </Card>
    </div>
  );
};

export default App;
