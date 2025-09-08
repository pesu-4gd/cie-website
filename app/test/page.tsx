export default function TestPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-4">Test Page</h1>
      <p className="text-center text-gray-600">
        If you can see this page without it downloading, the fix is working!
      </p>
      <div className="mt-8 text-center">
        <a href="/" className="text-blue-600 hover:text-blue-800 underline">
          Back to Home
        </a>
      </div>
    </div>
  )
}
