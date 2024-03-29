import { Button } from "@/components/Button";
import { auth, signOut } from "app/auth";

export default async function ProtectedPage() {
  let session = await auth();

  return (
    <div className="flex h-screen">
      <div className="w-screen h-screen flex flex-col space-y-5 gap-3 justify-center items-center">
        <p>
          Vous êtes connectés en tant que{" "}
          <span className="font-semibold">{session?.user?.email}</span>.
        </p>
        <p>Balance du compte : -1.</p>
        <SignOut />
      </div>
    </div>
  );
}

function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit">Se déconnecter</Button>
    </form>
  );
}
