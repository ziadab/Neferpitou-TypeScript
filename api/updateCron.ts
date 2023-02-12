import axios from "axios";
import dayjs from "dayjs";

const CRON_URL = "https://api.cron-job.org/jobs";

const req = axios.create({
  baseURL: CRON_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.CRON_JOB_KEY}`,
  },
});

export default async (hours: number, min: number) => {
  // update the cron that send us compliments
  await req.patch("/4195240", {
    job: {
      schedule: {
        timezone: "Africa/Casablanca",
        hours: [hours],
        mdays: [-1],
        minutes: [min],
        months: [-1],
        wdays: [-1],
      },
    },
  });

  let newTime = dayjs().hour(hours).minute(min);
  newTime = newTime.subtract(7, "m");

  // update the job that let the server boot up
  await req.patch("/4180379", {
    job: {
      schedule: {
        timezone: "Africa/Casablanca",
        hours: [newTime.hour()],
        mdays: [-1],
        minutes: [newTime.minute()],
        months: [-1],
        wdays: [-1],
      },
    },
  });
};
