type CheckBoxQuestionType = {
    id: number,
    type: 'checkbox',
    question: string,
    necessaryValue: number,
    answerOptions: {
        id: number,
        text: string,
        value: number
    }[]
}

type RadioQuestionType = {
    id: number,
    type: 'radio',
    question: string,
    necessaryValue: number,
    answerOptions: {
        id: number,
        text: string,
        value: number,
    }[]
}

type StringQuestionType = {
    id: number,
    type: 'string',
    question: string,
    necessaryValue: string,
}


export type QuestionType = CheckBoxQuestionType | RadioQuestionType | StringQuestionType

export type AnswerType = number | string | undefined | null

