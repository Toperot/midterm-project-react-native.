import axios from "axios"
import { v4 as uuidv4 } from "uuid"
import { Job } from "../types/Job"

const generateJobId = (job: any, index: number) => {
  try {
    return uuidv4()
  } catch {
    const title = String(job?.title || "job").toLowerCase().replace(/\s+/g, "-")
    const time = Date.now()
    return `${title}-${time}-${index}`
  }
}

export const fetchJobs = async () => {
  const response = await axios.get("https://empllo.com/api/v1", {
    timeout: 15000,
  })

  const rawJobs = Array.isArray(response.data?.jobs) ? response.data.jobs : []

  const jobs: Job[] = rawJobs.map((job: any, index: number) => {
    const minSalary = typeof job.minSalary === "number" ? job.minSalary : null
    const maxSalary = typeof job.maxSalary === "number" ? job.maxSalary : null
    const currency = job.currency || "USD"

    let salary = "Not specified"
    if (minSalary !== null && maxSalary !== null) {
      salary = `${currency} ${minSalary.toLocaleString()} - ${maxSalary.toLocaleString()}`
    } else if (minSalary !== null) {
      salary = `${currency} ${minSalary.toLocaleString()}+`
    }

    const location = Array.isArray(job.locations)
      ? job.locations.join(", ")
      : "Remote / Not specified"

    return {
      id: generateJobId(job, index),
      title: job.title || "Untitled Role",
      company: job.companyName || "Unknown Company",
      salary,
      location,
      description: job.description || "",
    }
  })

  return jobs
}
