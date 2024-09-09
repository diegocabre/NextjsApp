import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col  items-center p-24">
      <span className="text-5xl font-bold">Home page</span>
      <Link href="/about">ir a about page</Link>
    </main>
  );
}
