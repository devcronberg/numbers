$("#txtBase2").keyup(function() {
  let txt: string = $("#txtBase2")
    .val()!
    .toString();
  if (txt === "") txt = "0";
  setBase2(parseInt(txt, 2));
  setBase10(parseInt(txt, 2));
  setBase16(parseInt(txt, 2));
});

$("#txtBase10").keyup(function() {
  let txt: string = $("#txtBase10")
    .val()!
    .toString();
  if (txt === "") txt = "0";
  setBase2(parseInt(txt, 10));
  setBase10(parseInt(txt, 10));
  setBase16(parseInt(txt, 10));
});

$("#txtBase16").keyup(function() {
  let txt: string = $("#txtBase16")
    .val()!
    .toString();
  if (txt === "") txt = "0";
  setBase2(parseInt(txt, 16));
  setBase10(parseInt(txt, 16));
  setBase16(parseInt(txt, 16));
});

$("#txtAscii").keyup(function() {
  let txt: string = $("#txtAscii")
    .val()!
    .toString();
  let n = "";
  let b = "";
  let h = "";
  for (let i = 0; i < txt.length; i++) {
    let char = txt.charCodeAt(i);
    n += char.toString() + " ";
    b += Convert.pad(Convert.Dec2Bin(char), 8) + " ";
    h += Convert.pad(Convert.Dec2Hex(char), 2, " ") + " ";
  }
  $("#tblAscii tr:nth-child(2) td:nth-child(2)").html(b.toString());
  $("#tblAscii tr:nth-child(3) td:nth-child(2)").html(n.toString());
  $("#tblAscii tr:nth-child(4) td:nth-child(2)").html(h.toString().toUpperCase());
});

function setBase2(n: number) {
  let b = Convert.pad(Convert.Dec2Bin(n), 8).split("");
  let td = $("#tblBase2 tr:nth(1) td");
  for (let i = 8; i > 0; i--) {
    $(td[i]).html(b[i - 1]);
  }
  let m: number[] = [128, 64, 32, 16, 8, 4, 2, 1];
  let tds = $("#tblBase2 tr:nth(2) td");
  for (let i = 8; i > 0; i--) {
    let s = m[i - 1] * parseInt($(td[i]).html());
    $(tds[i]).html(s.toString());
  }
  $("#tblBase2 tr:nth-child(4) td:nth-child(2)").html(n.toString());
  $("#tblBase2 tr:nth-child(5) td:nth-child(2)").html(Convert.pad(Convert.Dec2Bin(n), 8));
}

function setBase10(n: number) {
  let b = Convert.pad(n.toString(), 8).split("");
  var td = $("#tblBase10 tr:nth(1) td");
  for (let i = 8; i > 0; i--) {
    $(td[i]).html(b[i - 1]);
  }
  let m: number[] = [10000000, 1000000, 100000, 10000, 1000, 100, 10, 1];
  let tds = $("#tblBase10 tr:nth(2) td");
  for (let i = 8; i > 0; i--) {
    let s = m[i - 1] * parseInt($(td[i]).html());
    $(tds[i]).html(s.toString());
  }
  $("#tblBase10 tr:nth-child(4) td:nth-child(2)").html(n.toString());
  $("#tblBase10 tr:nth-child(5) td:nth-child(2)").html(n.toString());
}

function setBase16(n: number) {
  let b = Convert.pad(Convert.Dec2Hex(n).toUpperCase(), 8).split("");
  var td = $("#tblBase16 tr:nth(1) td");
  for (let i = 8; i > 0; i--) {
    $(td[i]).html(b[i - 1]);
  }
  let m: number[] = [268435456, 16777216, 1048576, 65536, 4096, 256, 16, 1];
  let tds = $("#tblBase16 tr:nth(2) td");
  for (let i = 8; i > 0; i--) {
    let s = m[i - 1] * parseInt($(td[i]).html(), 16);
    $(tds[i]).html(s.toString());
  }
  $("#tblBase16 tr:nth-child(4) td:nth-child(2)").html(n.toString());
  $("#tblBase16 tr:nth-child(5) td:nth-child(2)").html(Convert.Dec2Hex(n).toUpperCase());
}

$("#tblBase16 tr:nth-child(5) td:nth-child(2)").click(function() {
  $(".nibblehigh").toggleClass("nh");
  $(".nibblelow").toggleClass("nl");
});
