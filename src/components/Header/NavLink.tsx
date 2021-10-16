import Link from "next/link";
import { OpacityHover } from "../../styles/globalVars";

export type NavLinkProps = {
  href: string;
  title: string;
  isActive: boolean;
};

export const NavLink: React.FC<NavLinkProps> = ({ href, title, isActive }) => {
  return (
    <li className="mr-3">
      <Link href={href} passHref={true}>
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
