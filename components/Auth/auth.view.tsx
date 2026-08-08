"use client";

import useAuthViewModel from "./auth.viewmodel";

export default function AuthView() {
  const { form, onSubmit, error, isPending } = useAuthViewModel();
  const { register, formState: { errors } } = form;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Bem-vindo</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Faça login para acessar o sistema</p>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          {error && (
            <div className="p-3 text-sm text-red-600 bg-red-100 rounded-lg">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              {...register("email")}
              className={`mt-1 block w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border ${
                errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              } rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="password">
              Senha
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password")}
              className={`mt-1 block w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white border ${
                errors.password ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              } rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors`}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isPending ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
