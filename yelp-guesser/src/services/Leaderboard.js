import Client from './api'

export const GetUserLeaderboard = async (user_id) => {
  try {
    const res = await Client.get(`/leaderboard/userId/${user_id}`)
    return res
  } catch (error) {
    throw error
  }
}

export const GetFullUserLeaderboard = async (user_id) => {
  try {
    const res = await Client.get(`/leaderboard/userIdfull/${user_id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
