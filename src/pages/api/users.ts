/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'Joao' },
    { id: 2, name: 'Cloud' },
    { id: 3, name: 'Tifa' },
    { id: 4, name: 'Aerith' },
  ]

  return response.json(users)
}