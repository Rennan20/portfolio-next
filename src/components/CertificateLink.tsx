import Link from "next/link";

type LinkType = {
    href: string;
    children: React.ReactNode;
}

export const CertificateLink = ({ href, children }: LinkType) => (
  <li>
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="text-pink-600 font-semibold underline hover:text-pink-800"
    >
      {children}
    </Link>
  </li>
);
