"use server";

import { signIn } from "@/app/auth";
import { AuthError } from "next-auth";

export async function loginAction(
  prevState:
    | { success: boolean; redirectTo: any; message?: undefined }
    | { success: boolean; message: string; redirectTo?: undefined },
  formData: FormData
) {
  try {
    const redirectTo = await signIn("credentials", {
      redirect: false,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });

    return { success: true, redirectTo };
  } catch (error) {
    if (error instanceof AuthError) {
      return {
        success: false,
        message: "Wrong ID or password. Please, retry.",
      };
    }

    throw error;
  }
}
