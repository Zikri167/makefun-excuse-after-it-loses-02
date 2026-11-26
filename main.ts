import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Status report: bounty lost. Root cause identified: me. Corrective action: none. I have already added this loss to my resume under accomplishments.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
