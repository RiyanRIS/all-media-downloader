"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResultSchema = void 0;
var _zod = require("zod");
// ./src/schema.js

const ResultSchema = exports.ResultSchema = _zod.z.object({
  success: _zod.z.boolean(),
  url: _zod.z.string().url().optional(),
  caption: _zod.z.string().optional(),
  from: _zod.z.string().optional()
});