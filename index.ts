import JSONbig from "json-bigint";

JSON.parse = JSONbig().parse;
JSON.stringify = JSONbig().stringify;