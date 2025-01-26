import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      <h1 className="text-4xl font-bold">White Store</h1>
      <Link href={"/products"}>
        <Button>Products</Button>
      </Link>
    </div>
  );
}
