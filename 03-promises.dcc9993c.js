!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("6JpON");refs={form:document.querySelector(".form"),delayInput:document.querySelector("input[name=delay]"),stepInput:document.querySelector("input[name=step]"),amountInput:document.querySelector("input[name=amount]"),submitBtn:document.querySelector("button")};var i=Number(refs.amountInput.value),a=Number(refs.stepInput.value),l=Number(refs.delayInput.value);function s(e){var t=e.position,n=e.delay,o=Math.random()>.3;return new Promise((function(e,r){setTimeout((function(){o?e({position:t,delay:n}):r({position:t,delay:n})}),n)}))}refs.submitBtn.addEventListener("submit",(function(t){t.preventDefault();for(var n=1;n<=i;n+=1)s({position:n,delay:l}).then((function(t){var n=t.position,o=t.delay;e(u).Notify.success("Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(t){var n=t.position,o=t.delay;e(u).Notify.failure("Rejected promise ".concat(n," in ").concat(o,"ms"))})),l+=a;refs.form.reset()}))}();
//# sourceMappingURL=03-promises.dcc9993c.js.map
