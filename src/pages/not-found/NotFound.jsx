import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-4 text-center">
      <div className="text-[120px] font-black text-gray-100 leading-none select-none">404</div>
      <div className="-mt-6">
        <h2 className="text-2xl font-black text-gray-900">Page not found</h2>
        <p className="text-gray-400 mt-2 text-sm max-w-xs mx-auto">
          Sorry, we couldn't find what you're looking for. It may have moved or doesn't exist.
        </p>
      </div>
      <div className="flex gap-3 mt-8">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 border border-gray-200 text-gray-700 rounded-full font-bold text-sm hover:bg-gray-50 transition-all cursor-pointer"
        >
          ← Go Back
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 bg-red-600 text-white rounded-full font-bold text-sm hover:bg-red-700 transition-all cursor-pointer"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}

export default NotFound;
