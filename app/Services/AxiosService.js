// @ts-ignore
export const api = axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public/characters?apikey=2148bbf76c5acd7c1b486d33517c8d71&limit=100",
  timeout: 3000
})
// @ts-ignore
export const sandboxApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/tim/heroes",
  timeout: 3000
})