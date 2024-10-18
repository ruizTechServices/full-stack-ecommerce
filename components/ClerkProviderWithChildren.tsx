"use client"

import { ClerkProvider } from '@clerk/nextjs';

export default function ClerkProviderWithChildren({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      appearance={{
        elements: {
          formButtonPrimary: 'bg-primary text-primary-foreground hover:bg-primary/90',
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}