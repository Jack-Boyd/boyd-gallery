"use client";

import { SignInButton, SignedOut, SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function TopNav() {
  const { user } = useUser();
  const router = useRouter();
  console.log("user", user);

  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div className="flex flex-row ">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
        {user?.primaryEmailAddress?.emailAddress === "j.william.boyd@gmail.com" && "fuck you"}
          <UploadButton 
            endpoint="imageUploader" 
            onClientUploadComplete={() => {
              router.refresh();
            }}
          />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}