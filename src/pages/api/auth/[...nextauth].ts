import NextAuth, { NextAuthOptions } from 'next-auth'
import EmailProvider from 'next-auth/providers/email'

import { PrismaClient } from '@prisma/client'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '@/lib/prisma'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'database',
    maxAge: 60 * 60 * 24,
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.MAIL_SERVER,
      from: process.env.MAIL_FROM,
    }),
  ],
  callbacks: {
    async signIn() {
      return true
    },
    async session({ session }) {
      return session
    },
  },
}

export default NextAuth(authOptions)
