import Link from "next/link";
import { Form } from "@/components/Form";
import { redirect } from "next/navigation";
import { createUser, getUser } from "app/db";
import { SubmitButton } from "@/components/submit-button";

export default function Login() {
  async function register(formData: FormData) {
    "use server";
    let email = formData.get("email") as string;
    let password = formData.get("password") as string;
    let user = await getUser(email);

    if (user.length > 0) {
      return "User already exists"; // TODO: Handle errors with useFormStatus
    } else {
      await createUser(email, password);
      redirect("/login");
    }
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
          <h3 className="text-xl font-semibold">Créer un compte</h3>
          <p className="text-sm text-gray-500">
            Crée un compte avec un identifiant et un mot de passe
          </p>
        </div>
        <Form action={register}>
          <SubmitButton>Créer le compte</SubmitButton>
          <p className="text-center text-sm text-gray-600">
            {"Déjà en possession d'un compte ? "}
            <Link
              href="/login"
              className="font-semibold text-gray-800 underline hover:text-red-600 transition-all"
            >
              Connecte-toi
            </Link>
            {", plutôt."}
          </p>
        </Form>
      </div>
    </div>
  );
}
