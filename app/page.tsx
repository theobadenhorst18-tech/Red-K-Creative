import { readFileSync } from "node:fs";
import { join } from "node:path";

function getTraditionalHtml() {
  const document = readFileSync(join(process.cwd(), "index.html"), "utf8");
  const body = document.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? "";
  return body.replace(
    "&copy; Red K Creative",
    `&copy; ${new Date().getFullYear()} Red K Creative`,
  );
}

export default function Home() {
  return <div dangerouslySetInnerHTML={{ __html: getTraditionalHtml() }} />;
}
