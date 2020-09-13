const express = require("express");
const cors = require("cors");

const app = express();
const mocktoken = "dsad54668wqesad42a4s1d24ad4a5sd";
const user = {
  id: 1,
  username: "korn",
  email: "john@doe.com",
  name: "John Doe",
};
app.use(cors());
app.use(express.json());

const router = express.Router();

router.get("/me", (req, res) => {
  const headers = req.headers.authorization;
  const token = headers && headers.split(" ")[1];


  if (token === mocktoken) {
    return res.json({
      user: user,
    })
  } else {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === "admin@admin.com" && password === "123456") {
    return res.json({
      user: user,
      token: mocktoken,
    });
  } else {
    return res.status(401).json({
      message: "Invalid password",
    });
  }
});

app.use("/api", router);

app.listen(12345, () => {
  console.log("runing at port 123456");
});
