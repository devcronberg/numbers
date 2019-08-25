class Convert {
  static checkBin(n: string) {
    return /^[01]{1,64}$/.test(n);
  }
  static checkDec(n: string) {
    return /^[0-9]{1,64}$/.test(n);
  }
  static checkHex(n: string) {
    return /^[0-9A-Fa-f]{1,64}$/.test(n);
  }
  static pad(s: any, z: number, c: string = "0"): string {
    s = "" + s;
    return s.length < z ? Convert.pad(c + s, z) : s;
  }
  static unpad(s: any) {
    s = "" + s;
    return s.replace(/^0+/, "");
  }

  // decimal operations
  static Dec2Bin(n: any) {
    if (!Convert.checkDec(n) || n < 0) {
      return 0;
    }
    return n.toString(2);
  }
  static Dec2Hex(n: any) {
    if (!Convert.checkDec(n) || n < 0) {
      return 0;
    }
    return n.toString(16);
  }

  // binary Operations
  static Bin2Dec(n: string) {
    if (!Convert.checkBin(n)) {
      return 0;
    }
    return parseInt(n, 2).toString(10);
  }
  static Bin2Hex(n: string) {
    if (!Convert.checkBin(n)) {
      return 0;
    }
    return parseInt(n, 2).toString(16);
  }

  // hexadecimal Operations
  static Hex2Bin(n: string) {
    if (!Convert.checkHex(n)) {
      return 0;
    }
    return parseInt(n, 16).toString(2);
  }
  static Hex2Dec(n: string) {
    if (!Convert.checkHex(n)) {
      return 0;
    }
    return parseInt(n, 16).toString(10);
  }
}
