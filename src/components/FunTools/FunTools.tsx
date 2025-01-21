
import Image from "next/image";
import React from "react";
import { WorkData } from "./FunTools";
import { siteData } from "../../siteData";

const FunTools: React.FC = () => {
  const { author } = siteData;
  return (
    <section>
      <h1>Fun tools.</h1>
      <div>
        {WorkData.map(({ id, title, description, linkText, link, picture }) => (
          <article>
            <main>
              <h1>{title}</h1>
              <p>{description}</p>
              <a href={link} target="_blank" rel="noreferrer">
                {linkText}
              </a>
            </main>
            <article>
              <Image
                src={picture}
                alt={`${title} project of ${author}`}
                width={1280}
                height={720}
                loading="eager"
              />
            </article>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FunTools;
