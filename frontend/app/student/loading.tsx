import { Skeleton } from "@/components/ui/skeleton";
import { Metadata } from "next";

export default function Loading() {

  return <Skeleton className="h-[20px] w-[100px] rounded-full">Hello</Skeleton>
}

export const metadata: Metadata = {
    title: {
        absolute: "Loading..."
    }
}