import React from 'react'
import classes from './ActiveQuiz.module.css'

const ActiveQuiz = props => (
    <div className={classes.ActiveQuiz}>
        <p className={classes.Question}>
            <span>
                <strong>2.</strong>&nbsp;Тут будет вопрос?
            </span>

            <small>4 of 12</small>
        </p>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    </div>
)

export default ActiveQuiz