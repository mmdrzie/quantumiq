// app/login/page.tsx
'use client';

import { useActionState } from 'react';
import { login } from '@/lib/actions'; // You'll need to create this action
import { Loader2 } from 'lucide-react';

export default function LoginPage() {
  const [state, formAction] = useActionState(login, undefined);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-900">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Login to QuantumIQ</h1>
          <p className="mt-2 text-gray-400">
            Access your AI trading dashboard
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
                Logging In...
              </>
            ) : (
              'Login'
            )}
          </button>

          {state?.error && (
            <div className="text-red-400 text-center text-sm">
              ⚠️ {state.error.message}
            </div>
          )}
        </form>

        {/* Link to Signup Page */}
        <div className="text-center text-gray-400">
          Don&apos;t have an account?{' '}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}