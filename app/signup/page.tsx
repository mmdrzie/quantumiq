'use client';

import { useFormState } from 'react-dom';
import { authenticate } from '@/lib/actions';
import { Loader2 } from 'lucide-react';

export default function SignupPage() {
  const [state, formAction] = useFormState(authenticate, undefined);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-900">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Create QuantumIQ Account</h1>
          <p className="mt-2 text-gray-400">
            Start your AI trading journey in seconds
          </p>
        </div>

        <form action={formAction} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Email address 
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Password
              </label>
              <input
                name="password"
                type="password"
                required
                className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-500 text-white"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium flex justify-center items-center gap-2 text-white transition-colors"
            disabled={state?.isPending}
          >
            {state?.isPending ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Creating Account...
              </>
            ) : (
              'Create Account'
            )}
          </button>

          {state?.error && (
            <div className="text-red-400 text-center text-sm">
              ⚠️ {state.error.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}