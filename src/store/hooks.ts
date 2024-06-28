import { useContext, useEffect, useState } from "react";
import { QuestionDispatch, QuestionsContext } from "./context";

export const useQuestions = () => {
    const context = useContext(QuestionsContext)
    if (context) {
        return context
    } else {
        throw new Error('Error with state')
    }
}

export const useDispatch = () => {
    const dispatch = useContext(QuestionDispatch)
    if (dispatch) {
        return dispatch
    } else {
        throw new Error('Error with dispatch')
    }
}

export const useTime = () => {
    const [time, setTime] = useState(Date.now())

    useEffect(() => {
        let id = setInterval(() => {
            setTime(Date.now())
        }, 1000)
        return () => clearInterval(id)
    }, [])

    return time
}
