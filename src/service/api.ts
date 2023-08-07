import axios from "axios"

const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://coffeepj.onrender.com" // replace with whatever the backend address is when deployed
    : "http://localhost:3000" // to be able to work on local

const service = axios.create({
  baseURL,
})

service.interceptors.request.use((interceptedRequest) => {
  interceptedRequest.headers.Authorization = `Bearer ${localStorage.getItem(
    "token"
  )}`
  return interceptedRequest
})

export default service
