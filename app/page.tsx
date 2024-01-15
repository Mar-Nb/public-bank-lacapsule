import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/Button";

export default function Page() {
  return (
    <div className="flex h-screen">
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <Image
          src={"/lacapsule.jpg"}
          alt="Logo de La Capsule"
          width={250}
          height={250}
          className="mb-3"
        />

        <div className="text-center max-w-screen-sm mb-10">
          <h1 className="text-slate-800 font-bold text-2xl">
            Next.js + Postgres Auth Starter
          </h1>

          <p className="text-stone-400 mt-5">
            Projet de La Capsule visant à expérimenter les tests automatisés
            avec Cypress.
          </p>
        </div>

        <Button>
          <Link href="/protected">Entrer dans la banque</Link>
        </Button>
      </div>
    </div>
  );
}
