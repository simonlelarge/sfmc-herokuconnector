var http = require("https");

var options = {
  "method": "POST",
  "hostname": "auth.exacttargetapis.com",
  "port": null,
  "path": "/v1/requestToken",
  "headers": {
    "content-type": "application/json",
    "cache-control": "no-cache",
    "postman-token": "7338652d-5eb3-2376-4cb1-ab84f3d1f8b0"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({ clientId: 'z83l24qb97ofvz7pp8h3afjx',
  clientSecret: 'VNvnGT1KDpPOuivHSFuJtsxP' }));
req.end();