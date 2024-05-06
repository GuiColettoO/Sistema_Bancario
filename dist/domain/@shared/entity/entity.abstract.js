"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class Entity {
    constructor() {
        this._id = (0, uuid_1.v4)();
    }
    get id() {
        return this._id;
    }
}
exports.default = Entity;
