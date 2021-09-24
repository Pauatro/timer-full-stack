import React, { useState } from "react";

interface ITimerContext {
    partialTime: number;
    totalTime: number;
    toggleTimerIsActive: ()=>void;
    timerIsActive: boolean;
}

const TimerContext = React.createContext<ITimerContext>({
    partialTime: 0,
    totalTime: 0,
    toggleTimerIsActive: ()=>{},
    timerIsActive: false,
});

const TimerProvider = (props: any) => {

    const [ partialTime, setPartialTime ] = useState(0)
    const [ totalTime, setTotalTime ] = useState(0)
    const [ timerIsActive, setTimerIsActive ] = useState(false)
    const [ intervalId, setIntervalId ] = useState<NodeJS.Timeout | null>(null)

    const toggleTimerIsActive = ()=>{
        if (!timerIsActive){
            let newIntervalId = setInterval(()=>{
                setPartialTime(partialTime =>partialTime+1)
            }, 1000)
            setIntervalId(newIntervalId)
        } else{
            intervalId && clearInterval(intervalId)
            setTotalTime(totalTime + partialTime)
            setPartialTime(0)
        }
        
        setTimerIsActive(!timerIsActive)
    }

    return (
        <TimerContext.Provider
            value={{
                partialTime,
                totalTime,
                toggleTimerIsActive,
                timerIsActive
            }}
        >
            {props.children}
        </TimerContext.Provider>
    );
};

export { TimerProvider, TimerContext };