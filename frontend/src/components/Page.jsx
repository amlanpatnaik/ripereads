import { Seo } from "./Seo";
import { PillarHeader } from "./PillarHeader";
import { pageMeta } from "../lib/seo.mjs";

export const Page = ({ path, title, eyebrow, intro, seed, children, wide = false, testid = "page", meta, jsonld }) => (
  <>
    <Seo meta={meta || pageMeta(path, title, intro || title)} jsonld={jsonld} />
    <PillarHeader eyebrow={eyebrow} title={title} intro={intro} seed={seed || path} />
    <div className="wrap" style={{ padding: "2.5rem 0 4rem" }} data-testid={testid}>
      <div className={wide ? "" : "reading"}>{children}</div>
    </div>
  </>
);
