import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">Sacred Herb</h1>
      <p>Welcome to the Sacred Herb application.</p>
      <Link href="/test" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Go to test page
      </Link>
    </div>
  );
}
