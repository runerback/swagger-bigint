import JSONbig from "json-bigint";

JSON.parse = JSONbig({ strict: true }).parse;