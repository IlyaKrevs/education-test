import React, { useState } from 'react'
import { QuestionType } from '../../store/questionType'
import { useDispatch } from '../../store/hooks'
import RadioInput from '../Forms/RadioInput'
import CheckboxInput from '../Forms/CheckboxInput'
import TextInput from '../Forms/TextInput'

type QuestionCardType = {
    currentCard: QuestionType,
}

export default function QuestionCard({ currentCard }: QuestionCardType) {

    const [answer, setAnswer] = useState<number | string | null>(null)
    const dispatch = useDispatch()

    let content;

    if (currentCard.type === 'radio') {

        content = (currentCard.answerOptions.map(item => {
            return <RadioInput
                key={item.id}
                data={item}
                name={currentCard.question}
                onChange={handleRadio} />
        }))

    } else if (currentCard.type === 'checkbox') {

        content = (currentCard.answerOptions.map(item => {
            return <CheckboxInput
                key={item.id}
                data={item}
                onChange={handleCheckbox} />
        }))

    } else if (currentCard.type === 'string') {

        content = <TextInput
            key={currentCard.id}
            value={typeof answer === 'string' ? answer : ''}
            onChange={handleTextInput} />

    }

    function handleRadio(e: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(+e.target.value)
    }

    function handleCheckbox(e: React.ChangeEvent<HTMLInputElement>) {
        if (!answer) {
            setAnswer(+e.target.value)
        } else {
            e.target.checked ? setAnswer(+answer + +e.target.value) : setAnswer(+answer - +e.target.value)
        }
    }

    function handleTextInput(e: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(e.target.value)
    }

    function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        dispatch({ type: 'answered', value: answer })
        dispatch({ type: "nextQuestion" })
        setAnswer(null)
    }


    return (
        <div className="questionContainer">
            <div className="questionItem"
                key={currentCard.id}
            >
                <div className="questionTitle">
                    {currentCard.question}
                </div>
                <form className='myFormContainer'>

                    {content}

                    <button className='myButton'
                        onClick={handleSubmit}
                    >
                        Next
                    </button>
                </form>

            </div>
        </div>
    )
}
