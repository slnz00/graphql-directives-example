import { Gateways } from '../gateways'
import { Feature, User } from '../types'

export interface ValidateAccessUsecaseInput {
  userId: string
  features: Feature[]
}

export function validateAccessUsecase(gateways: Gateways, input: ValidateAccessUsecaseInput): void {
  const { features, userId } = input

  const enabledFeatures = gateways.truthStoreGateway.getEnabledFeatures(userId)
  const accessAllowed = enabledFeatures.some(f => features.includes(f))
  if (!accessAllowed) {
    throw new Error('Insufficient permissions.')
  }
}