import type { NextPage } from "next";
import { JSON } from "react-object-component";
import user from "data/package-user.json";
import { Skills } from "components/Skills";

const Home: NextPage = () => {
  return (
    <div className="grid min-h-screen grid-cols-none grid-rows-2 place-items-center font-sans md:grid-cols-2 md:grid-rows-none">
      <header>
        <h2 className="text-sm">
          {`Hi, I'm`}
          <span className="text-aquamarine-500">...</span>
        </h2>
        <h1 className="text-5xl text-aquamarine-500">Guillermo Mollo</h1>
        <h3 className="text-lg text-aquamarine-500">{`[ Front-End Web Developer ]`}</h3>
        <p className="mt-4">{`I'm a student focuses on Front-End`}</p>
        <main>
          <h4 className="my-4 text-lg first-letter:text-jelly-bean-300">
            My Skills<span className="text-aquamarine-500">:</span>
          </h4>
          <Skills />
        </main>
      </header>
      <aside className="my-5 font-sans md:py-0">
        <JSON
          json={user}
          classNames={{
            indent: "pl-4",
            colon: "mr-1 text-white",
            brackets: "text-white",
            doubleQuotes: "text-jelly-bean-100",
            comma: "text-white",
            textKey: "text-aquamarine-500",
            textValue: "text-jelly-bean-400",
          }}
        />
      </aside>
    </div>
  );
};

export default Home;
