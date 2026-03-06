import { Job } from "../types/Job"

const normalize = (value: string) => value.trim().toLowerCase().replace(/\s+/g, " ")

export const getJobFingerprint = (job: Pick<Job, "title" | "company" | "location">) =>
  `${normalize(job.title)}|${normalize(job.company)}|${normalize(job.location)}`

