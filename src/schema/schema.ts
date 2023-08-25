import { GraphQLID, GraphQLList, GraphQLSchema, GraphQLString } from "graphql"

// import { clients, projects } from '../sampleData';

import { GraphQLObjectType } from 'graphql'
import ProjectModel from "../models/Project.model";
import ClientModel from "../models/Client.model";
// Project type
const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    clientId: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString }
  })
})

// Client Type
const ClientType = new GraphQLObjectType({
  name: 'Client',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString }
  })
})
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      resolve() {
        return ProjectModel.find()
      }
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent: never, args) {
        return ProjectModel.findById(args.id)
      }
    },
    clients: {
      type: new GraphQLList(ClientType),
      resolve() {
        return ClientModel.find()
      }
    },

    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent: never, args: { id: string }) {
        return ClientModel.findById(args.id)
      }
    }
  }
})

// module.exports = new GraphQLSchema({
//   query: RootQuery
// })

export default new GraphQLSchema({
  query: RootQuery
})
