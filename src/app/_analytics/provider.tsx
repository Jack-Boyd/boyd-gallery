'use client'

import { useAuth, useUser } from '@clerk/nextjs'
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect } from 'react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: "/ingest",
      ui_host: 'https://eu.posthog.com'
    })
  }, [])

  return (
    <PHProvider client={posthog}>
      <PostHogAuthProvider>
        {children}
      </PostHogAuthProvider>
    </PHProvider>
  )
}

function PostHogAuthProvider({ children }: { children: React.ReactNode }) {
  const auth = useAuth();
  const userInfo = useUser();

  useEffect(() => {
    if (userInfo.isSignedIn) {
      posthog.identify(userInfo.user.id, {
        email: userInfo.user.emailAddresses[0]?.emailAddress,
        name: userInfo.user.fullName,
      });
    }
    else if (auth.isSignedIn) {
      posthog.reset();
    }
  }, [auth, userInfo])

  return children;
}