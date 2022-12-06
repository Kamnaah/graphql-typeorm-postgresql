import { UserType } from "../typeDefs/User";
import { GraphQLID, GraphQLString } from 'graphql';
import {Users} from '../../entities/Users';
import {MessageType} from '../typeDefs/Messages';


export const CREATE_USER={
  type: UserType,
  args: {
    name: {type : GraphQLString},
    username: {type : GraphQLString},
    password: {type : GraphQLString}
  },
  async resolve(parent: any, args: any) {
    const {name , username , password}= args;
    Users.insert(args);
    return args;
  },
}

export const UPDATE_PASSWORD = {
  type: MessageType,
  args: {
    username: { type: GraphQLString },
    oldPassword: { type: GraphQLString },
    newPassword: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { username, oldPassword, newPassword } = args;
    const user = await Users.findOneBy({ username: username  });
    if (!user) {
      throw new Error("USERNAME DOESNT EXIST");
    }
    const userPassword = user?.password;

    if (oldPassword === userPassword) {
      await Users.update({ username: username }, { password: newPassword });

      return { successful: true, message: "PASSWORD UPDATED" };
    } else {
      throw new Error("PASSWORDS DO NOT MATCH!");
    }
  },
};

export const DELETE_USER= {
  type: MessageType,
  args: {
    id: {type: GraphQLID}
  },
  async resolve(parent: any, args: any) {
    const id=args.id
    await Users.delete(id);
    return {successful : true , message: "DELETED"}
  },
}