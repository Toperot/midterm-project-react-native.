import React, { createContext, useState } from "react"
import { Job } from "../types/Job"
import { getJobFingerprint } from "../utils/jobIdentity"

interface JobContextType {
  savedJobs: Job[]
  saveJob: (job: Job) => void
  removeJob: (id: string) => void
}

export const JobContext = createContext<JobContextType | null>(null)

export const JobProvider = ({ children }: any) => {
  const [savedJobs, setSavedJobs] = useState<Job[]>([])

  const saveJob = (job: Job) => {
    setSavedJobs((prevJobs) => {
      const newFingerprint = getJobFingerprint(job)
      const exists = prevJobs.some((savedJob) => getJobFingerprint(savedJob) === newFingerprint)
      if (exists) {
        return prevJobs.filter((savedJob) => getJobFingerprint(savedJob) !== newFingerprint)
      }
      return [...prevJobs, job]
    })
  }

  const removeJob = (id: string) => {
    setSavedJobs((prevJobs) => prevJobs.filter((job) => job.id !== id))
  }

  return (
    <JobContext.Provider value={{ savedJobs, saveJob, removeJob }}>
      {children}
    </JobContext.Provider>
  )
}
