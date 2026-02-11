import api from '../config/api'

export const stallService = {
  // Get all stalls for an exhibition
  getByExhibition: async (exhibitionId) => {
    const response = await api.get(`/exhibitions/${exhibitionId}/stalls`)
    return response.data
  },

  // Book a stall
  book: async (stallId, data) => {
    const response = await api.post(`/stalls/${stallId}/book`, data)
    return response.data
  },

  // Get stall availability
  checkAvailability: async (exhibitionId) => {
    const response = await api.get(`/exhibitions/${exhibitionId}/stalls/availability`)
    return response.data
  }
}
