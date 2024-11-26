const jwt = require("jsonwebtoken");

const secret = "myCat";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjbGllbnRlIiwiaWF0IjoxNzI2Nzc5NzEzfQ.Oie1vuwJ8g0XqplW2YbrnS7lghTrq-vOKP_XDi3BSK0";

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
