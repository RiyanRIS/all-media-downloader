"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResultSchema = void 0;
var _zod = require("zod");
const ResultSchema = exports.ResultSchema = _zod.z.object({
  success: _zod.z.boolean(),
  url: _zod.z.string().url().optional(),
  urls: _zod.z.string().array().optional(),
  caption: _zod.z.string().optional(),
  from: _zod.z.string().optional()
});