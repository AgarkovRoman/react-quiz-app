import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
    state = {
        activeQuestion: 0,
        quiz: [
            {
                question: 'How much money you got?',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    { text: '$5000', id: 1 },
                    { text: 'A lot', id: 2 },
                    { text: '$1000', id: 3 },
                    { text: 'A few', id: 4 },
                ]
            },
            {
                question: 'Another question?',
                rightAnswerId: 4,
                id: 2,
                answers: [
                    { text: 'First', id: 1 },
                    { text: 'Second', id: 2 },
                    { text: 'Third', id: 3 },
                    { text: 'Fourth', id: 4 },
                ]
            }
        ]
    }

    onAnswerClickHandler = answerId => {
        console.log('Answer Id:', answerId)

        this.setState({
            activeQuestion: this.state.activeQuestion + 1

        })
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Ответьте на вопросы</h1>
                    <ActiveQuiz
                        answers={this.state.quiz[this.state.activeQuestion].answers}
                        question={this.state.quiz[this.state.activeQuestion].question}
                        onAnswerClick={this.onAnswerClickHandler}
                        quizLength={this.state.quiz.length}
                        answerNumber={this.state.activeQuestion + 1}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz