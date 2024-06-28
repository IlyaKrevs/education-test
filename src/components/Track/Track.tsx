import React from 'react'
import { useDispatch } from '../../store/hooks'
import { AnswerType } from '../../store/questionType'

type TrackType = {
    countQuestions: number,
    current: number,
    answers: AnswerType[]
}

export default function Track({ countQuestions, current, answers }: TrackType) {

    const dispatch = useDispatch()

    let content = []


    for (let i = 0; i < countQuestions; i++) {
        let color
        if (answers[i] !== undefined && answers[i] !== null) {
            color = 'colorDone'
        } else {
            color = 'colorNext'
        }

        if (i === current) {
            color = 'colorCurrent'
        }

        content.push(<div
            key={i}
            className={['trackItem', color].join(' ')}
            onClick={() => dispatch({ type: 'chooseQuestion', value: i })}
        ></div>)
    }

    return (
        <div className="trackContainer">
            {content}
        </div>
    )
}
