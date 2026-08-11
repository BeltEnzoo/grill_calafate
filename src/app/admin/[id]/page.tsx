import { notFound, redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/auth";
import { hasDatabase, prisma } from "@/lib/db";
import { ShowForm } from "@/app/admin/ShowForm";

export const dynamic = "force-dynamic";

export default async function EditShowPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }
  if (!hasDatabase()) {
    redirect("/admin");
  }

  const { id } = await params;
  const show = await prisma.show.findUnique({ where: { id } });
  if (!show) notFound();

  return (
    <div>
      <h1 className="font-display text-4xl">Editar show</h1>
      <p className="mt-2 text-sm text-charcoal/55">{show.title}</p>
      <div className="mt-8">
        <ShowForm show={show} />
      </div>
    </div>
  );
}
