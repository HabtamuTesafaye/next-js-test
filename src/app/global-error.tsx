'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className='flex items-center justify-center min-h-screen bg-neutral-900 text-white'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold text-primary-500 mb-4'>Oops! Something went wrong</h1>
          <p className='text-neutral-400 mb-8'>
            We encountered an unexpected error. Please try again.
          </p>
          <button
            onClick={() => reset()}
            className='px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors'
          >
            Try Again
          </button>
          {process.env.NODE_ENV === 'development' && (
            <details className='mt-8 text-left'>
              <summary className='cursor-pointer text-neutral-400'>Error Details</summary>
              <pre className='mt-4 p-4 bg-neutral-800 rounded text-sm overflow-auto'>
                {error.message}
                {error.stack}
              </pre>
            </details>
          )}
        </div>
      </body>
    </html>
  );
}
