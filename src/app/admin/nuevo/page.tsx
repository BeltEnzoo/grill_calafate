import { redirect } from "next/navigation";
import { isAdminAuthenticated } from "@/lib/auth";
import { ShowForm } from "@/app/admin/ShowForm";

export const dynamic = "force-dynamic";

export default async function NewShowPage() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }

  return (
    <div>
      <h1 className="font-display text-4xl">Nuevo show</h1>
      <p className="mt-2 text-sm text-charcoal/55">
        Se va a publicar en el calendario de la web.
      </p>
      <div className="mt-8">
        <ShowForm />
      </div>
    </div>
  );
}
