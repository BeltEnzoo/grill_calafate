import Link from "next/link";
import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/auth";
import { hasDatabase, prisma } from "@/lib/db";
import { deleteShowAction } from "@/app/admin/actions";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  if (!hasDatabase()) {
    return (
      <div className="rounded-sm border border-earth/30 bg-white p-8">
        <h1 className="font-display text-3xl">Falta conectar Neon</h1>
        <p className="mt-4 text-sm leading-relaxed text-charcoal/65">
          Agregá <code className="text-earth">DATABASE_URL</code> en{" "}
          <code>.env.local</code> (y en Vercel), después corré:
        </p>
        <pre className="mt-4 overflow-x-auto rounded-sm bg-charcoal p-4 text-xs text-cream">
          {`npx prisma db push
npx prisma db seed`}
        </pre>
      </div>
    );
  }

  const shows = await prisma.show.findMany({ orderBy: { date: "asc" } });

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl">Shows</h1>
          <p className="mt-2 text-sm text-charcoal/55">
            {shows.length} evento{shows.length === 1 ? "" : "s"} en el calendario
          </p>
        </div>
        <Link
          href="/admin/nuevo"
          className="rounded-sm bg-gold px-5 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal transition hover:bg-charcoal hover:text-cream"
        >
          Nuevo show
        </Link>
      </div>

      <div className="mt-8 overflow-hidden rounded-sm bg-white shadow-sm ring-1 ring-charcoal/10">
        {shows.length === 0 ? (
          <p className="p-8 text-sm text-charcoal/55">
            Todavía no hay shows. Creá el primero o corré el seed.
          </p>
        ) : (
          <ul className="divide-y divide-charcoal/8">
            {shows.map((show) => (
              <li
                key={show.id}
                className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-medium text-charcoal">{show.title}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-charcoal/45">
                    {show.date} · {show.time} · {show.status}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Link
                    href={`/admin/${show.id}`}
                    className="text-[11px] uppercase tracking-[0.18em] text-earth transition hover:text-charcoal"
                  >
                    Editar
                  </Link>
                  <form action={deleteShowAction}>
                    <input type="hidden" name="id" value={show.id} />
                    <button
                      type="submit"
                      className="text-[11px] uppercase tracking-[0.18em] text-red-700/80 transition hover:text-red-800"
                    >
                      Borrar
                    </button>
                  </form>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
