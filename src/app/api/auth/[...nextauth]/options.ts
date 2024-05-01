
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'email', placeholder: 'test@test.com' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const user = { id: "1", name: "Administrador", email: "admin@gmail.com", password:'1234' }

      if (user.email === credentials?.email && credentials.password === user.password) {
        // Any object returned will be saved in `user` property of the JWT
        return user
      } else {
        throw new Error('contraseña o email incorrecto');
      }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      // eslint-disable-next-line no-param-reassign
      session.user = token as any;
      return session;
    },
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
    maxAge: 5 * 60 * 1000,
  },
  pages: {
    signIn: '/',
  },
};

export default authOptions;

// 60 * 60 * 24 * 30, // 30 days
