import * as uuid from 'uuid'
import { Context } from '../../context'
import { Report, Shift, User } from '../../types'

export default {
  Query: {
    reports(_root: unknown, _args: unknown, context: Context): Report[] {
      return context.gateways.reportGateway.getAll()
    },
    shifts(_root: unknown, _args: unknown, context: Context): Shift[] {
      return context.gateways.shiftGateway.getAll()
    },
    currentUser(_root: unknown, _args: unknown, context: Context): User {
      return context.user
    }
  },

  Mutation: {
    createReport(_root: unknown, args: CreateReportArgs, context: Context): Report {
      const { description } = args.input

      return context.gateways.reportGateway.create({
        id: uuid.v4(),
        description,
      })
    },
    createShift(_root: unknown, args: CreateShiftArgs, context: Context): Shift {
      const { startDate, endDate } = args.input

      return context.gateways.shiftGateway.create({
        id: uuid.v4(),
        startDate,
        endDate
      })
    }
  },

  User: {
    reports(_user: User, _args: unknown, context: Context): Report[] {
      return context.gateways.reportGateway.getAll()
    },
    shifts(_user: User, _args: unknown, context: Context): Shift[] {
      return context.gateways.shiftGateway.getAll()
    }
  }
}

interface CreateReportArgs {
  input: {
    description: string
  }
}

interface CreateShiftArgs {
  input: {
    startDate: string
    endDate: string
  }
}
