"use client";

import Link from "next/link";
import { Form } from "@/components/Form";
import { SubmitButton } from "@/components/submit-button";
import { Zoom, toast } from "react-toastify";
import { useFormState } from "react-dom";
import { loginAction } from "actions/login";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [formState, formAction] = useFormState(loginAction, {
    success: false,
    message: "",
  });

  useEffect(() => {
    formState.message &&
      toast.error(formState.message, { theme: "colored", transition: Zoom });

    formState.redirectTo && router.push(formState.redirectTo);
  }, [formState, router]);

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Se connecter</h3>
          <p className="text-sm text-gray-500">
            Utilise ton identifiant et ton mot de passe pour te connecter
          </p>
        </div>
        <Form action={formAction}>
          <SubmitButton>Se connecter</SubmitButton>
          <p className="text-center text-sm text-gray-600">
            {"Pas de compte ? "}
            <Link
              href="/register"
              className="font-semibold text-gray-800 underline hover:text-red-600 transition-all"
            >
              Crée un compte
            </Link>
            {", alors."}
          </p>
        </Form>
      </div>
    </div>
  );
}
