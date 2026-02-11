import api from '../config/api'

export const exhibitionService = {
  // Get all exhibitions
  getAll: async (params = {}) => {
    const response = await api.get('/exhibitions', { params })
    return response.data
  },

  // Get single exhibition
  getById: async (id) => {
    const response = await api.get(`/exhibitions/${id}`)
    return response.data
  },

  // Create exhibition
  create: async (data) => {
    const response = await api.post('/exhibitions', data)
    return response.data
  },

  // Update exhibition
  update: async (id, data) => {
    const response = await api.put(`/exhibitions/${id}`, data)
    return response.data
  },

  // Delete exhibition
  delete: async (id) => {
    const response = await api.delete(`/exhibitions/${id}`)
    return response.data
  },

  // Get dashboard stats
  getStats: async () => {
    const response = await api.get('/exhibitions/stats')
    return response.data
  }
}
