import { call } from "../../utils/call";
import { IGetTotalTimeResponse, IPutTotalTimeResponse } from "./timer.interfaces";
const apiUrl = process.env.REACT_APP_API_URL

export abstract class TimerService {

  static async getTotalTime(): Promise<number> {
    const { status, body } = await call("GET", `${apiUrl}/api/timer`);
    
    if (status !== 200) {
      console.error(`There was a server error (status: ${status})`)
    }
    const { totalTime } = JSON.parse(body) as IGetTotalTimeResponse
    return totalTime;
  }

  static async updateTotalTime(timeSeconds: number): Promise<number> {
    const { status, body } = await call("PUT", `${apiUrl}/api/timer`, JSON.stringify({ timeSeconds }), { "Content-type": "application/json" });
    if (status !== 200) {
      console.error(`There was a server error (status: ${status})`)
    }
    const responseBody = JSON.parse(body) as IPutTotalTimeResponse
    return responseBody.totalTime;
  }
}