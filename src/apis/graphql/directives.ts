import { SchemaDirectiveVisitor } from 'apollo-server-express';
import {
  DirectiveLocation,
  GraphQLDirective,
  defaultFieldResolver,
} from 'graphql';
import { Context } from '../../context'
import { Feature, User } from '../../types'
import { validateAccessUsecase } from '../../usecases/validate-access-usecase'

interface AccessArgs {
  features: Feature[]
}

class Access extends SchemaDirectiveVisitor {
  visitFieldDefinition(field: any): void {
    const { resolve = defaultFieldResolver } = field
    const directiveArgs = this.args as AccessArgs

    field.resolve = (root: any, args: any, context: Context, info: any) => {
      const { gateways } = context
      const input = {
        userId: context.user.id,
        features: directiveArgs.features
      }
      validateAccessUsecase(gateways, input)

      return resolve.call(this, root, args, context, info)
    }
  }
}

export default {
  access: Access
}