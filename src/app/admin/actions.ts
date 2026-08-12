"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { ShowStatus } from "@prisma/client";
import { prisma, hasDatabase } from "@/lib/db";
import {
  createAdminSession,
  destroyAdminSession,
  isAdminAuthenticated,
  verifyAdminPassword,
} from "@/lib/auth";
import { normalizeImageUrl } from "@/lib/images";

async function requireAdmin() {
  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login");
  }
}

function requireDb() {
  if (!hasDatabase()) {
    throw new Error(
      "DATABASE_URL no configurada. Conectá Neon antes de usar el admin.",
    );
  }
}

export async function loginAction(formData: FormData) {
  const password = String(formData.get("password") || "");
  if (!verifyAdminPassword(password)) {
    redirect("/admin/login?error=1");
  }
  await createAdminSession();
  redirect("/admin");
}

export async function logoutAction() {
  await destroyAdminSession();
  redirect("/admin/login");
}

export async function createShowAction(formData: FormData) {
  await requireAdmin();
  requireDb();

  await prisma.show.create({
    data: {
      title: String(formData.get("title") || "").trim(),
      date: String(formData.get("date") || "").trim(),
      time: String(formData.get("time") || "21:00").trim(),
      image: normalizeImageUrl(
        String(formData.get("image") || "/images/show-1.jpg"),
      ),
      status: String(formData.get("status") || "disponible") as ShowStatus,
      description: String(formData.get("description") || "").trim(),
    },
  });

  revalidatePath("/");
  revalidatePath("/admin");
  redirect("/admin");
}

export async function updateShowAction(formData: FormData) {
  await requireAdmin();
  requireDb();

  const id = String(formData.get("id") || "");
  await prisma.show.update({
    where: { id },
    data: {
      title: String(formData.get("title") || "").trim(),
      date: String(formData.get("date") || "").trim(),
      time: String(formData.get("time") || "21:00").trim(),
      image: normalizeImageUrl(
        String(formData.get("image") || "/images/show-1.jpg"),
      ),
      status: String(formData.get("status") || "disponible") as ShowStatus,
      description: String(formData.get("description") || "").trim(),
    },
  });

  revalidatePath("/");
  revalidatePath("/admin");
  redirect("/admin");
}

export async function deleteShowAction(formData: FormData) {
  await requireAdmin();
  requireDb();

  const id = String(formData.get("id") || "");
  await prisma.show.delete({ where: { id } });

  revalidatePath("/");
  revalidatePath("/admin");
}
