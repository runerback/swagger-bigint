import JSONbig from "json-bigint";

JSON.parse = JSONbig({ strict: true }).parse;
JSON.stringify = JSONbig.stringify;