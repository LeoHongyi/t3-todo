import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { api } from "y/utils/api";

import "y/styles/globals.css";
import { ThemeContextProvider } from "y/contexts/useTheme";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeContextProvider>
        <div className="h-full w-full bg-white dark:bg-black ">
          <Component {...pageProps} />
        </div>
      </ThemeContextProvider>

      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
