import Link from 'next/link';

export default function TestPage() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">Test Page</h1>
      <p>This is a test page to verify routing is working correctly.</p>
      <Link href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Go back home
      </Link>
    </div>
  );
} 