import { social, routes } from "data/user";
import Link from "next/link";

export const Outlet = () => {
  return (
    <>
      <header className="absolute md:fixed top-10 right-10">
        <nav>
          <ul className="flex items-center justify-center gap-8 font-mono">
            {Object.entries(routes).map(([path, { title }], i) => (
              <li key={path} className="group">
                <Link href={path}>
                  <a className="transition-colors group-hover:text-jelly-bean-500">
                    <span className="mr-1.5 text-aquamarine-500 transition-colors group-hover:text-jelly-bean-500">{`0${++i}.`}</span>
                    {title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <aside className="fixed bottom-2 px-2 md:bottom-0 md:flex md:flex-col md:items-center md:px-16">
        <ul className="flex flex-col justify-end gap-5">
          {social.map(({ Icon, url, alt }) => (
            <li key={alt}>
              <a href={url} target="_blank" rel="noreferrer">
                <Icon className="transition-colors hover:text-aquamarine-500" />
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-5 hidden h-28 w-[2px] bg-aquamarine-500 md:block"></div>
      </aside>
    </>
  );
};
