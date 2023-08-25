"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const sampleData_1 = require("../sampleData");
const graphql_2 = require("graphql");
// Project type
const ProjectType = new graphql_2.GraphQLObjectType({
    name: 'Project',
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        clientId: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
        status: { type: graphql_1.GraphQLString }
    })
});
// Client Type
const ClientType = new graphql_2.GraphQLObjectType({
    name: 'Client',
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        phone: { type: graphql_1.GraphQLString }
    })
});
const RootQuery = new graphql_2.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        projects: {
            type: new graphql_1.GraphQLList(ProjectType),
            resolve() {
                return sampleData_1.projects;
            }
        },
        project: {
            type: ProjectType,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve(parent, args) {
                return sampleData_1.projects.find((project) => (project === null || project === void 0 ? void 0 : project.id) === args.id);
            }
        },
        clients: {
            type: new graphql_1.GraphQLList(ClientType),
            resolve() {
                return sampleData_1.clients;
            }
        },
        client: {
            type: ClientType,
            args: { id: { type: graphql_1.GraphQLID } },
            resolve(parent, args) {
                return sampleData_1.clients.find((client) => (client === null || client === void 0 ? void 0 : client.id) === args.id);
            }
        }
    }
});
// module.exports = new GraphQLSchema({
//   query: RootQuery
// })
exports.default = new graphql_1.GraphQLSchema({
    query: RootQuery
});
//# sourceMappingURL=schema.js.map