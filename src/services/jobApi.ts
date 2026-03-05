import axios from "axios"
import { Job } from "../types/Job"

export const fetchJobs = async () => {
  const response = await axios.get("https://empllo.com/api/v1")

  const jobs: Job[] = (response.data.jobs || []).map((job: any) => {
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
      id: String(job.guid || `${job.title}-${job.pubDate || "no-date"}`),
      title: job.title || "Untitled Role",
      company: job.companyName || "Unknown Company",
      salary,
      location,
      description: job.description || "",
    }
  })

  return jobs
}
