import { ReactNode } from "react";
import { Outlet } from "components/Outlet";
import Head from "next/head";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>hateVtubers</title>
      </Head>
      <div className="min-h-screen overflow-hidden bg-black text-white selection:bg-jelly-bean-400 selection:text-white">
        <Outlet />
        {children}
      </div>
    </>
  );
};
