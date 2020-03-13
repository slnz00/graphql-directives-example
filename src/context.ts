import { createGateways, Gateways } from './gateways'
import { User } from './types'

export interface Context {
  gateways: Gateways
  user: User
}

const userStub: User = {
  id: 'dad3cf21-b29f-4d62-ab5f-d96cdf5f19e8',
  name: 'Current user'
}

export function createContext(): Context {
  const gateways = createGateways()
  const user = userStub

  return {
    gateways,
    user
  }
}