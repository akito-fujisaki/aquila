export default function ({ $axios }) {
  $axios.setHeader('Content-Type', 'application/json')
  $axios.setHeader('Accept', 'application/json')
}
