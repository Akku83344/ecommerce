
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2I5Y2IxMjY5YjM4ZmQwZDc3YzBhYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MTYzMDQ5OSwiZXhwIjoxNjgxODg5Njk5fQ.V5K5ViVCoYc5prjLGzdKkBUvVf66LlgUgUM0xxDmhl0"


export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});