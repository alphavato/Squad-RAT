import type {NextConfig} from "next";
import type {Redirect} from "next/dist/lib/load-custom-routes";

async function initialize(): Promise<NextConfig> {
  return {
    reactStrictMode: true,
    redirects: async (): (Promise<Redirect[]>) => {
      return [
        {
          source: "/",
          destination: "/auth/login",
          permanent: true, // Set to false for temporary redirects
        },
      ]
    }
  };
}

export default initialize();