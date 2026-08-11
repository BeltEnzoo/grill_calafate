"use client";

import {
  createShowAction,
  updateShowAction,
  deleteShowAction,
} from "@/app/admin/actions";
import type { Show, ShowStatus } from "@prisma/client";

const statuses: ShowStatus[] = ["hoy", "proximo", "disponible", "agotado"];

type Props = {
  show?: Show;
};

export function ShowForm({ show }: Props) {
  const action = show ? updateShowAction : createShowAction;

  return (
    <form action={action} className="space-y-5 rounded-sm bg-white p-6 shadow-sm ring-1 ring-charcoal/10">
      {show && <input type="hidden" name="id" value={show.id} />}

      <Field label="Título" name="title" defaultValue={show?.title} required />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Fecha"
          name="date"
          type="date"
          defaultValue={show?.date}
          required
        />
        <Field
          label="Hora"
          name="time"
          type="time"
          defaultValue={show?.time || "21:00"}
          required
        />
      </div>

      <Field
        label="Imagen (ruta o URL)"
        name="image"
        defaultValue={show?.image || "/images/show-1.jpg"}
        placeholder="/images/show-1.jpg"
      />

      <div>
        <label
          htmlFor="status"
          className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-charcoal/50"
        >
          Estado
        </label>
        <select
          id="status"
          name="status"
          defaultValue={show?.status || "disponible"}
          className="w-full rounded-sm border border-charcoal/10 bg-cream/40 px-4 py-3 text-sm outline-none focus:border-earth"
        >
          {statuses.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="description"
          className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-charcoal/50"
        >
          Descripción
        </label>
        <textarea
          id="description"
          name="description"
          rows={3}
          defaultValue={show?.description || ""}
          className="w-full resize-none rounded-sm border border-charcoal/10 bg-cream/40 px-4 py-3 text-sm outline-none focus:border-earth"
        />
      </div>

      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="submit"
          className="rounded-sm bg-gold px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal transition hover:bg-charcoal hover:text-cream"
        >
          {show ? "Guardar cambios" : "Crear show"}
        </button>
        <a
          href="/admin"
          className="rounded-sm border border-charcoal/15 px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-charcoal/70 transition hover:border-earth"
        >
          Cancelar
        </a>
        {show && (
          <button
            type="submit"
            formAction={deleteShowAction}
            className="ml-auto rounded-sm border border-red-200 px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-red-700 transition hover:bg-red-50"
            onClick={(e) => {
              if (!confirm("¿Eliminar este show?")) e.preventDefault();
            }}
          >
            Eliminar
          </button>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  defaultValue,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  defaultValue?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-charcoal/50"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-sm border border-charcoal/10 bg-cream/40 px-4 py-3 text-sm outline-none focus:border-earth"
      />
    </div>
  );
}
