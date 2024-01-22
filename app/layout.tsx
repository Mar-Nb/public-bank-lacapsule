import { ToastContainer } from "react-toastify";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

import { GeistSans } from "geist/font/sans";

let title = "Public Bank - La Capsule";
let description =
  "Projet de La Capsule visant à expérimenter l&apos;utilisation de Cypress.";

export const metadata = {
  title,
  description,
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  // metadataBase: new URL("https://nextjs-postgres-auth.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={GeistSans.variable}>
        {children}
        <ToastContainer bodyClassName={GeistSans.variable} />
      </body>
    </html>
  );
}
