import React, { createContext, useState } from "react"
import { Job } from "../types/Job"

interface JobContextType {
  savedJobs: Job[]
  saveJob: (job: Job) => void
  removeJob: (id: string) => void
}

export const JobContext = createContext<JobContextType | null>(null)

export const JobProvider = ({ children }: any) => {
  const [savedJobs, setSavedJobs] = useState<Job[]>([])

  const saveJob = (job: Job) => {
    const exists = savedJobs.find(j => j.id === job.id)

    if (!exists) {
      setSavedJobs([...savedJobs, job])
    }
  }

  const removeJob = (id: string) => {
    setSavedJobs(savedJobs.filter(job => job.id !== id))
  }

  return (
    <JobContext.Provider value={{ savedJobs, saveJob, removeJob }}>
      {children}
    </JobContext.Provider>
  )
}