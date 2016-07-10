"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
exports.asyncFunc = (hello) => __awaiter(this, void 0, void 0, function* () {
    yield timeout();
    console.log(hello);
    return 'bbbb';
});
function timeout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    });
}
function useAsyncAsCallback(url, cb) {
    return __awaiter(this, void 0, void 0, function* () {
        yield cb();
    });
}
