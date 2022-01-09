require("dotenv").config({ path: ".env.local" });
const { generate } = require("@graphql-codegen/cli");
const path = require("path");

const schema = process.env.SCHEMA
  ? path.join(__dirname, process.env.SCHEMA)
  : "http://localhost:3000/api/graphql";

async function run() {
  await generate(
    {
      schema,
      documents: "src/components/**/*.graphql",
      generates: {
        [process.cwd() + "/src/generated/graphql.tsx"]: {
          plugins: ["typescript"],
        },
        ["src/"]: {
          preset: "near-operation-file",
          presetConfig: {
            extension: ".generated.ts",
            baseTypesPath: "/generated/graphql.tsx",
          },
          plugins: [
            "typescript",
            "typescript-operations",
            "typed-document-node",
          ],
        },
      },
    },
    true
  );

  await generate(
    {
      schema: {
        [`https://api-eu-central-1.graphcms.com/v2/${process.env.GQL_CMS_ID}/master`]:
          {
            headers: {
              Authorization: `Bearer ${process.env.GQL_CMS_TOKEN}`,
            },
          },
      },
      documents: "src/graphql/graphcms/*.graphql",
      generates: {
        [process.cwd() + "/src/generated/graphql-graphcms.ts"]: {
          plugins: [
            "typescript",
            "typescript-operations",
            "typed-document-node",
          ],
        },
      },
    },
    true
  );
  await generate(
    {
      schema,
      documents: "src/components/**/*.graphql",
      generates: {
        [process.cwd() + "/src/generated/resolvers-types.ts"]: {
          plugins: ["typescript", "typescript-resolvers"],
        },
      },
    },
    true
  );
}

run();
