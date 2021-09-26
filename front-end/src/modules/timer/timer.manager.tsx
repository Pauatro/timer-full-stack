import { NumberValidations } from "../../utils/validations";
import { TimerService } from "./timer.service";

export abstract class TimerManager {

  static async getTotalTime(): Promise<number> {
    let totalTime

    try{
        totalTime = await TimerService.getTotalTime()
        NumberValidations.validate(totalTime)
    } catch (error){
        console.error(error)
        totalTime = 0
    }

    return totalTime
  }

  static async updateTotalTime(additionalTime: number): Promise<number> {
    let totalTime

    try{
        NumberValidations.validate(additionalTime)
        totalTime = await TimerService.updateTotalTime(additionalTime)
        NumberValidations.validate(totalTime)
    } catch (error){
        console.error(error)
        totalTime = 0
    }

    return totalTime
  }
}