import React, { useLayoutEffect } from 'react'
import { useDispatch, useQuestions, useTime } from '../../store/hooks'


export default function TopItem() {

    const startTimestamp = useQuestions().startTime
    const dispatch = useDispatch()

    const currentTime = useTime()
    const halfOfHour = 30 * 60 * 1000


    const myDate = new Date((startTimestamp || 0) + halfOfHour - currentTime)

    let minutes: number | string = myDate.getMinutes()
    let seconds: number | string = myDate.getSeconds()


    useLayoutEffect(() => {
        if (minutes == 0 && seconds == 0) {
            dispatch({ type: 'finished' })
        }
    }, [minutes, seconds])



    minutes = (minutes + '').length === 2 ? minutes : '0' + minutes
    seconds = (seconds + '').length === 2 ? seconds : '0' + seconds

    return (
        <div className="topContainer">
            <div className="titleContainer">
                ТЕСТИРОВАНИЕ
            </div>
            <div className="timeContainer">
                {minutes}:{seconds}
            </div>
        </div>
    )
}

