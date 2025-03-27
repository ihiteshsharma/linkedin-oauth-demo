import NextAuth from "next-auth";
import LinkedInProvider from "next-auth/providers/linkedin";

const handler = NextAuth({
  providers: [
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
      authorization: {
        url: "https://www.linkedin.com/oauth/v2/authorization",
        params: { 
          scope: "r_basicprofile email",
          response_type: "code"
        }
      },
      token: {
        url: "https://www.linkedin.com/oauth/v2/accessToken",
        params: { grant_type: "authorization_code" }
      },
      // Keep it simple - avoid advanced profile mapping for now
      userinfo: {
        url: "https://api.linkedin.com/v2/me",
        params: { projection: "(id,localizedFirstName,localizedLastName)" }
      },
      profile(profile) {
        return {
          id: profile.id,
          name: `${profile.localizedFirstName} ${profile.localizedLastName}`,
          email: null // We'll skip email for now to simplify
        };
      },
    },),
  ],
  // Enable debug mode to see detailed logs
  debug: true,
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        accessToken: token.accessToken,
      }
    },
  },
});

export { handler as GET, handler as POST }; 