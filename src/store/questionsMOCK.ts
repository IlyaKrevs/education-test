import { QuestionType } from "./questionType"

export const questionsMOCK: QuestionType[] = [
    {
        id: 0,
        type: 'radio',
        necessaryValue: 1,
        question: 'Ответ: 1',
        answerOptions: [{
            id: 0,
            text: '1',
            value: 1
        },
        {
            id: 1,
            text: '2',
            value: -1
        },
        {
            id: 2,
            text: '3',
            value: -1
        },]
    },
    {
        id: 1,
        type: 'radio',
        necessaryValue: 1,
        question: 'Ответ: 2',
        answerOptions: [{
            id: 0,
            text: '1',
            value: -1
        },
        {
            id: 1,
            text: '2',
            value: 1
        },
        {
            id: 2,
            text: '3',
            value: -1
        },]
    },
    {
        id: 2,
        type: 'radio',
        necessaryValue: 1,
        question: 'Ответ: 3',
        answerOptions: [{
            id: 0,
            text: '1',
            value: -1
        },
        {
            id: 1,
            text: '2',
            value: -1
        },
        {
            id: 2,
            text: '3',
            value: 1
        },]
    },
    {
        id: 3,
        type: 'checkbox',
        necessaryValue: 2,
        question: 'Ответ: 12',
        answerOptions: [{
            id: 0,
            text: '1',
            value: 1
        },
        {
            id: 1,
            text: '2',
            value: 1
        },
        {
            id: 2,
            text: '3',
            value: -1
        },]
    },
    {
        id: 4,
        type: 'checkbox',
        necessaryValue: 1,
        question: 'Ответ: 3',
        answerOptions: [{
            id: 0,
            text: '1',
            value: -1
        },
        {
            id: 1,
            text: '2',
            value: -1
        },
        {
            id: 2,
            text: '3',
            value: 1
        },]
    },
    {
        id: 5,
        type: 'checkbox',
        necessaryValue: 2,
        question: 'Ответ: 13',
        answerOptions: [{
            id: 0,
            text: '1',
            value: 1
        },
        {
            id: 1,
            text: '2',
            value: -1
        },
        {
            id: 2,
            text: '3',
            value: 1
        },]
    },
    {
        id: 6,
        type: 'checkbox',
        necessaryValue: 3,
        question: 'Ответ: 123',
        answerOptions: [{
            id: 0,
            text: '1',
            value: 1
        },
        {
            id: 1,
            text: '2',
            value: 1
        },
        {
            id: 2,
            text: '3',
            value: 1
        },]
    },
    {
        id: 7,
        type: 'checkbox',
        necessaryValue: 1,
        question: 'Ответ: 1',
        answerOptions: [{
            id: 0,
            text: '1',
            value: 1
        },
        {
            id: 1,
            text: '2',
            value: -1
        },
        {
            id: 2,
            text: '3',
            value: -1
        },]
    },
    {
        id: 8,
        type: 'string',
        necessaryValue: 'йцукен',
        question: 'Ответ: йцукен',

    },
    {
        id: 9,
        type: 'string',
        necessaryValue: 'йцукен1',
        question: 'Ответ: йцукен1',

    },
]
