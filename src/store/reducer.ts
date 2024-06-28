import { AnswerType, QuestionType } from "./questionType"
import { initState } from "./context"

export interface IState {
    status: 'start' | 'inProgress' | 'end',
    startTime: number | null,
    questions: QuestionType[],
    answers: AnswerType[],
    currentQuestion: number,
}

export type ActionsType = {
    type: 'began',
    value: number
} | {
    type: 'finished'
} | {
    type: 'reset'
} | {
    type: 'answered',
    value: number | string | null
} | {
    type: 'nextQuestion'
} | {
    type: 'chooseQuestion',
    value: number
} | {
    type: 'loadData',
    value: IState
}


export function questionReducer(state: IState, action: ActionsType): IState {
    if (action.type === 'loadData') {
        return {
            ...action.value
        }
    } else if (action.type === 'began') {

        return {
            ...state,
            status: 'inProgress',
            startTime: action.value,
        }
    } else if (action.type === 'reset') {
        return {
            ...initState
        }
    } else if (action.type === 'finished') {
        return {
            ...state,
            status: 'end',
            startTime: null
        }

    } else if (action.type === 'answered') {
        let newAnswers = state.answers.map((item, i) => {
            if (i === state.currentQuestion) {
                return action.value
            } else {
                return item
            }
        })

        return {
            ...state,
            answers: newAnswers
        }

    } else if (action.type === 'chooseQuestion') {
        return {
            ...state,
            currentQuestion: action.value
        }
    } else if (action.type === 'nextQuestion') {
        let nextQuestion = state.answers.indexOf(null)
        if (nextQuestion === -1) {
            nextQuestion = 0
        }
        return {
            ...state,
            currentQuestion: nextQuestion
        }
    } else {
        return { ...state }
    }
}
