import { Report, Shift } from '../types'
import { GatewayFS } from './gateway-fs'
import { TruthStoreGatewayMock } from './truth-store-gateway-mock'

export interface Gateways {
  reportGateway: GatewayFS<Report>
  shiftGateway: GatewayFS<Shift>
  truthStoreGateway: TruthStoreGatewayMock
}

const staticGateways: Gateways = {
  reportGateway: new GatewayFS<Report>('./reports.json'),
  shiftGateway: new GatewayFS<Shift>('./shifts.json'),
  truthStoreGateway: new TruthStoreGatewayMock()
}

export function createGateways(): Gateways {
  return staticGateways
}