"use strict";
var Convert = /** @class */ (function () {
    function Convert() {
    }
    Convert.checkBin = function (n) {
        return /^[01]{1,64}$/.test(n);
    };
    Convert.checkDec = function (n) {
        return /^[0-9]{1,64}$/.test(n);
    };
    Convert.checkHex = function (n) {
        return /^[0-9A-Fa-f]{1,64}$/.test(n);
    };
    Convert.pad = function (s, z) {
        s = "" + s;
        return s.length < z ? Convert.pad("0" + s, z) : s;
    };
    Convert.unpad = function (s) {
        s = "" + s;
        return s.replace(/^0+/, "");
    };
    // decimal operations
    Convert.Dec2Bin = function (n) {
        if (!Convert.checkDec(n) || n < 0) {
            return 0;
        }
        return n.toString(2);
    };
    Convert.Dec2Hex = function (n) {
        if (!Convert.checkDec(n) || n < 0) {
            return 0;
        }
        return n.toString(16);
    };
    // binary Operations
    Convert.Bin2Dec = function (n) {
        if (!Convert.checkBin(n)) {
            return 0;
        }
        return parseInt(n, 2).toString(10);
    };
    Convert.Bin2Hex = function (n) {
        if (!Convert.checkBin(n)) {
            return 0;
        }
        return parseInt(n, 2).toString(16);
    };
    // hexadecimal Operations
    Convert.Hex2Bin = function (n) {
        if (!Convert.checkHex(n)) {
            return 0;
        }
        return parseInt(n, 16).toString(2);
    };
    Convert.Hex2Dec = function (n) {
        if (!Convert.checkHex(n)) {
            return 0;
        }
        return parseInt(n, 16).toString(10);
    };
    return Convert;
}());
