import React, { useEffect, useReducer } from 'react'
import { createContext } from "react";
import { ActionsType, IState, questionReducer } from './reducer';
import { questionsMOCK } from './questionsMOCK';

export const initState: IState = {
    status: 'start',
    startTime: null,
    questions: questionsMOCK,
    answers: Array(questionsMOCK.length).fill(null),
    currentQuestion: 0
}

export const QuestionsContext = createContext<IState>(initState)
export const QuestionDispatch = createContext<React.Dispatch<ActionsType> | null>(null)

export default function QuestionProvider({ children }: { children: React.ReactNode }) {

    const [questions, dispatch] = useReducer(questionReducer, initState)


    let staringState: string | null;

    useEffect(() => {
        staringState = localStorage.getItem('data')
        if (staringState !== null) {
            let newState: IState = JSON.parse(staringState)
            dispatch({ type: 'loadData', value: newState })
        }
    }, [])



    useEffect(() => {
        const handleBeforeunload = () => {
            localStorage.setItem('data', JSON.stringify(questions))
        }
        window.addEventListener('beforeunload', handleBeforeunload)
        return () => window.removeEventListener('beforeunload', handleBeforeunload)
    }, [questions])


    return (
        <QuestionsContext.Provider value={questions}>
            <QuestionDispatch.Provider value={dispatch}>
                {children}
            </QuestionDispatch.Provider>
        </QuestionsContext.Provider>
    )
}

