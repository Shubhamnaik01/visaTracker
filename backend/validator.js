const validator = (req, res, next) => {
  //   console.log(req.body);
  if (req.method == "POST") {
    const { country, city, type, status } = req.body;
    if (country.trim() == "" || typeof country != "string") {
      return res
        .status(400)
        .json({ message: "Country must be a non-empty String" });
    } else if (city.trim() == "" || typeof city != "string") {
      return res
        .status(400)
        .json({ message: "City must be a non-empty String" });
    } else if (
      !type ||
      (type.toLowerCase() != "tourist" &&
        type.toLowerCase() != "business" &&
        type.toLowerCase() != "student")
    ) {
      return res
        .status(400)
        .json({ message: "Please enter a valid visa type" });
    } else if (
      !status ||
      (status.toLowerCase() != "active" &&
        status.toLowerCase() != "expired" &&
        status.toLowerCase() != "booked")
    ) {
      return res
        .status(400)
        .json({ message: "Please enter a valid visa status" });
    }
  } else if (req.method == "PUT") {
    let data = req.body.status.toLowerCase();
    if (!data || (data != "active" && data != "booked" && data != "expired")) {
      return res.status(400).send({ message: "Please Enter a valid Status" });
    }
    console.log(data);
  }
  next();
};

export default validator;
