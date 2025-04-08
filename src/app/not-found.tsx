import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col gap-4 p-4">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <p className="text-sm text-gray-500">URL: {typeof window !== 'undefined' ? window.location.pathname : ''}</p>
      <Link href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Go back home
      </Link>
    </div>
  );
} 