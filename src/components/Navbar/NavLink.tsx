"use client";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => {
  return (
    <a href={href} className={`text-white hover:no-underline font-medium underline ${className}`}>
      {children}
    </a>
  );
};

export default NavLink;
