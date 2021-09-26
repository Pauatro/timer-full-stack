import React, { useEffect, useState } from "react";
import { TimerManager } from "./timer.manager";

interface ITimerContext {
    partialTime: number;
    totalTime: number;
    toggleTimerIsActive: ()=>void;
    timerIsActive: boolean;
    loading: boolean;
}

const TimerContext = React.createContext<ITimerContext>({
    partialTime: 0,
    totalTime: 0,
    toggleTimerIsActive: ()=>{},
    timerIsActive: false,
    loading: false,
});

const TimerProvider = (props: any) => {

    const [ partialTime, setPartialTime ] = useState(0)
    const [ totalTime, setTotalTime ] = useState(0)
    const [ intervalId, setIntervalId ] = useState<NodeJS.Timeout | null>(null)
    const [ loading, setLoading ] = useState(false)

    useEffect(()=>{
        getTotalTime()
    }, [])

    const getTotalTime = async()=>{
        const newTotalTime = await TimerManager.getTotalTime()
        newTotalTime && setTotalTime(newTotalTime)
    }

    const toggleTimerIsActive = async ()=>{
        if (!intervalId){
            let newIntervalId = setInterval(()=>{
                setPartialTime(partialTime =>partialTime+1)
            }, 1000)
            setIntervalId(newIntervalId)
            return
        }
        setLoading(true)
        clearInterval(intervalId)
        setIntervalId(null)
        const newTotalTime = await TimerManager.updateTotalTime(partialTime)
        setTotalTime(newTotalTime)
        setPartialTime(0)
        setLoading(false)
    }

    return (
        <TimerContext.Provider
            value={{
                partialTime,
                totalTime,
                toggleTimerIsActive,
                timerIsActive: !!intervalId,
                loading,
            }}
        >
            {props.children}
        </TimerContext.Provider>
    );
};

export { TimerProvider, TimerContext };