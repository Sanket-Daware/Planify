import api from '../config/api'

export const teamService = {
  // Get team members
  getAll: async () => {
    const response = await api.get('/team')
    return response.data
  },

  // Invite team member
  invite: async (data) => {
    const response = await api.post('/team/invite', data)
    return response.data
  },

  // Remove team member
  remove: async (id) => {
    const response = await api.delete(`/team/${id}`)
    return response.data
  },

  // Update team member role
  updateRole: async (id, role) => {
    const response = await api.put(`/team/${id}/role`, { role })
    return response.data
  }
}
