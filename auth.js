import { MongoDBAdapter } from '@auth/mongodb-adapter'
import NextAuth from 'next-auth'
import CredentialProvider from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import connectMongo from './dbConnect/connectMongo'
import clientPromise from './lib/mongoClientPromise'
import { userModel } from './models/user-model'

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (credentials === null) return null

        await connectMongo()

        try {
          const user = await userModel.findOne({ email: credentials?.email })
          if (user) {
            const isMatch = user?.password === credentials.password

            if (isMatch) {
              return user
            } else {
              throw new Error('Email or Password is not correct')
            }
          } else {
            throw new Error('User not found')
          }
        } catch (error) {
          throw new Error(error)
        }
      },
    }),
  ],
})
