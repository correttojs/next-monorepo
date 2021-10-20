import Link from "next/link";
import { OpacityHover } from "../../styles/globalVars";

export type NavLinkProps = {
  href: string;
  title: string;
  isActive: boolean;
  lang?: string;
};

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  title,
  isActive,
  lang,
}) => {
  console.log(lang, href);
  return (
    <li className="mr-3">
      <Link href={href} passHref={true} locale={lang}>
        <a
          className={`inline-block py-2 px-4 uppercase ${
            !isActive && ` ${OpacityHover}`
          }`}
        >
          {title}
        </a>
      </Link>
    </li>
  );
};
