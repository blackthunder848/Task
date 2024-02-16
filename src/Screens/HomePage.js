import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

// import { remark } from './assets/icon/remark-3.svg';
// import { useDispatch, useSelector } from 'react-redux';

const MCQQuiz = () => {
  const [answers, setAnswers] = useState(Array(20).fill(null));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const data = [
    {
      question: 'What is the capital city of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris',
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Jupiter', 'Mars', 'Venus'],
      answer: 'Jupiter',
    },
    {
      question: 'Which Indian cricketer is also known as the “God of Cricket”?',
      options: [
        'Sachin Tendulkar',
        'Virat Kohli',
        'MS Dhoni',
        'Virendar Sehwag',
      ],
      answer: 'Sachin Tendulkar',
    },
    {
      question:
        'Who is the current Captain of the Indian National Men’s Cricket Team?',
      options: [
        'Virat Kohli',
        'Rohit Sharma',
        'Jasprit Bumrah',
        'Subhman Gill',
      ],
      answer: 'Rohit Sharma',
    },
    {
      question:
        'Who was the first Indian batsman to hit a century in a Test match?',
      options: [
        'Lala Amarnath Bharadwaj',
        'Kapil Dev',
        'Vijay Hazare',
        'Sunil Gavaskar',
      ],
      answer: 'Lala Amarnath Bharadwaj',
    },
    {
      question: 'How many times has India won the Asia Cup?',
      options: ['Five', 'Six', 'Seven', 'Two'],
      answer: 'Seven',
    },
    {
      question: 'What is the moniker given to the Indian cricket team?',
      options: [
        'Men in Blue',
        'The Team of Lions',
        'The Indian Army ',
        'None of the above',
      ],
      answer: 'Men in Blue',
    },
    {
      question: 'How many times has India won the Cricket World Cup?',
      options: ['Two', 'Three', 'One', 'Five'],
      answer: 'Two',
    },
    {
      question: 'Who is known as Captain Cool?',
      options: ['MS Dhoni', 'Sanju Samson', 'KL Rahul', 'Suresh Raina'],
      answer: 'MS Dhoni',
    },
    {
      question: ' When did India Appear First in the World Cup?',
      options: ['1971', '1983', '1999', '1975'],
      answer: '1975',
    },
  ];

  const handleNext = () => {
    setCurrentQuestionIndex(prevIndex =>
      prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex,
    );
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex(prevIndex => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleAnswer = (index, selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[index] = selectedOption;
    setAnswers(newAnswers);
  };

  const renderItem = ({item, index}) => {
    const selectedAnswer = answers[index];
    const isCorrect = selectedAnswer === item.answer;

    return (
      <View style={styles.questionContainer}>
        <Text
          style={{
            color: '#A1A1A1',
            textAlign: 'left',
            fontSize: 14,
            lineHeight: 21,
          }}>
          Review Test
        </Text>

        <Text
          style={{
            color: 'white',
            textAlign: 'left',
            fontSize: 28,
            lineHeight: 42,
          }}>
          Question {index + 1}/{data.length}
        </Text>
        <Text style={styles.questionText}>{item.question}</Text>
        <FlatList
          data={item.options}
          horizontal
          scrollEnabled={false}
          renderItem={({item: option}) => (
            <TouchableOpacity
              style={[
                styles.optionButton,
                {
                  borderColor:
                    selectedAnswer === option
                      ? isCorrect
                        ? 'green'
                        : 'red'
                      : 'white',
                },
              ]}
              onPress={() => handleAnswer(index, option)}>
              <Text style={styles.txtop}>{option}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={option => option}
          style={styles.optionsContainer}
        />
        {selectedAnswer !== null && (
          <View style={styles.correctAnswerContainer}>
            <Text style={{color: isCorrect ? 'green' : 'red'}}>
              {isCorrect
                ? 'Correct!'
                : `Incorrect. Correct answer: ${item.answer}`}
            </Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.quizContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContainer}
        onEndReached={handleNext}
      />
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={handlePrevious}
          disabled={currentQuestionIndex === 0}>
          <Text style={styles.navigationButtonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={handleNext}
          disabled={currentQuestionIndex === data.length - 1}>
          <Text style={styles.navigationButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quizContainer: {
    flexGrow: 1,
    color: 'white',
  },
  flatListContainer: {
    flexGrow: 1,
  },
  questionContainer: {
    flex: 1,
    flexWrap: 'wrap',

    justifyContent: 'center',

    paddingHorizontal: 20,
    paddingVertical: 20,
    width: 390,
    backgroundColor: '#131830',
  },
  questionText: {
    fontSize: 18,
    paddingVertical: 20,
    textAlign: 'justify',
    color: 'white',
  },
  optionsContainer: {
    marginTop: 10,
  },
  optionButton: {
    borderWidth: 1,
    paddingHorizontal: 20,
    height: 45,
    borderRadius: 9,
    padding: 10,
    marginVertical: 12,
    width: '100%',
    color: 'white',
    textAlign: 'justify',
  },
  correctAnswerContainer: {
    paddingVertical: 20,
  },
  txtop: {
    color: 'white',
  },

  navigationContainer: {
    backgroundColor: '#131830',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  navigationButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  navigationButtonText: {
    color: '#131830',
    fontSize: 16,
  },
});

export default MCQQuiz;
