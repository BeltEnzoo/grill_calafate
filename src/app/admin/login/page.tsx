import { redirect } from "next/navigation";
import { loginAction } from "@/app/admin/actions";
import { isAdminAuthenticated } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  if (await isAdminAuthenticated()) {
    redirect("/admin");
  }

  const params = await searchParams;

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center">
      <h1 className="font-display text-4xl text-charcoal">Ingresar</h1>
      <p className="mt-3 text-sm text-charcoal/55">
        Panel para gestionar el calendario de shows.
      </p>

      <form action={loginAction} className="mt-8 space-y-4">
        <div>
          <label
            htmlFor="password"
            className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-charcoal/50"
          >
            Contraseña
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoFocus
            className="w-full rounded-sm border border-charcoal/10 bg-white px-4 py-3 text-sm outline-none focus:border-earth"
          />
        </div>
        {params.error && (
          <p className="text-sm text-red-700">Contraseña incorrecta</p>
        )}
        <button
          type="submit"
          className="w-full rounded-sm bg-gold py-3 text-[11px] font-medium uppercase tracking-[0.22em] text-charcoal transition hover:bg-charcoal hover:text-cream"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
