import { Skeleton } from "@/components/ui/skeleton";
import { Metadata } from "next";

export default function Loading() {

  console.log("loading page")
  return <Skeleton className="h-[20px] w-[100px] rounded-full"/>
}

export const metadata: Metadata = {
    title: {
        absolute: "Loading..."
    }
}