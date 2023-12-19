export const Doc = {
  CONNECTION_FIELDS: ["pageInfo", "nodes", "edges"],
  MUTATION_TYPES: [
    "update",
    "archive",
    "unarchive",
    "delete",
    "suspend",
    "unsuspend",
    "upgrade",
    "revoke",
    "rotateSecret",
    "create",
  ],
  SCALAR_STRING_NAMES: ["TimelessDateScalar"],
  SCALAR_STRING_TYPE: "string",
  SCALAR_DATE_NAMES: ["DateTime", "TimelessDateScalar"],
  SCALAR_DATE_TYPE: "Date",
  SCALAR_JSON_NAMES: ["JSON"],
  SCALAR_JSON_TYPE: "Record<string, unknown>",
};
