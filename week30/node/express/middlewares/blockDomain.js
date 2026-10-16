function blockDomain(blockedDomain) {
  return function (req, res, next) {
    let domain = req.ip; // Get the origin header
    console.log("Request origin:", domain);

    if (domain && domain.includes(blockedDomain) && req.method === "POST") {
      res.status(400).json({ message: "post metode node allowe" });
    } else {
      next();
    }
  };
}

module.exports = blockDomain;
