import { apiInstance } from './api'

export const fetchTags = async () => {
  const res = await apiInstance.get('/tags')
  return res.data.tags
}
