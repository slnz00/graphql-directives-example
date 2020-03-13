import { Feature } from '../types'

const enabledFeatures = [
  Feature.REPORTS,
  Feature.SHIFTS
]

export class TruthStoreGatewayMock {
  getEnabledFeatures(_userId: string): Feature[] {
    return enabledFeatures
  }
}
