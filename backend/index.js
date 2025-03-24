const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// creating Users
const users = [
  { username: "user", password: "password" },
  { username: "Ravi", password: "Ravi@1234" },
  { username: "Sai", password: "Sai@1234" },
  { username: "Ram", password: "Ram@1234" },
];

// Login
app.post("/api/login/", async (request, response) => {
  const { username, password } = request.body;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    const jwtToken = jwt.sign({ username: user.username }, "secret");
    response.json({ jwtToken });
  } else {
    response.status(401).json({ error: "Invalid username or password" });
  }
});

// authentication for all routes
const authenticationToken = (request, response, next) => {
  const authHeader = request.headers["authorization"];
  let jwtToken;
  if (authHeader !== undefined) {
    jwtToken = authHeader.split(" ")[1];
  }
  if (jwtToken === undefined) {
    return response.status(401).json({ error: "Unauthorized" });
  } else {
    jwt.verify(jwtToken, "secret", (error, user) => {
      if (error) {
        return response.status(403).json({ error: "Forbidden" });
      }
      request.user = user;
      next();
    });
  }
};

// Dashboard Route
app.get("/api/dashboard/", authenticationToken, (request, response) => {
  response.json({
    cards: [
      {
        id: "Visakhapatnam",
        location: "Visakhapatnam",
        locationImage:
          "https://res.cloudinary.com/dxi9xkgna/image/upload/v1742809314/vizag_nmpoto.jpg",
      },
      {
        id: "Hyderabad",
        location: "Hyderabad",
        locationImage:
          "https://res.cloudinary.com/dxi9xkgna/image/upload/v1742809314/hyd_kgktlm.jpg",
      },
      {
        id: "Pune",
        location: "Pune",
        locationImage:
          "https://res.cloudinary.com/dxi9xkgna/image/upload/v1742809314/puneeeeeeeee_zzrvf1.jpg",
      },
      {
        id: "Bangalore",
        location: "Bangalore",
        locationImage:
          "https://res.cloudinary.com/dxi9xkgna/image/upload/v1742808244/bangalore_nct1sl.jpg",
      },
      {
        id: "Chennai",
        location: "Chennai",
        locationImage:
          "https://res.cloudinary.com/dxi9xkgna/image/upload/v1742809873/chennai_dbxmuj.jpg",
      },
      {
        id: "Mumbai",
        location: "Mumbai",
        locationImage:
          "https://res.cloudinary.com/dxi9xkgna/image/upload/v1742809873/mumbai_gq7cdw.jpg",
      },
      {
        id: "Delhi",
        location: "Delhi",
        locationImage:
          "https://res.cloudinary.com/dxi9xkgna/image/upload/v1742817060/delhi_bywsb4.webp",
      },
      {
        id: "Kolkata",
        location: "Kolkata",
        locationImage:
          "https://res.cloudinary.com/dxi9xkgna/image/upload/v1742817060/kolkata_in6thd.jpg",
      },
      {
        id: "Jaipur",
        location: "Jaipur",
        locationImage:
          "https://res.cloudinary.com/dxi9xkgna/image/upload/v1742817281/jaipuur_rcy2x5.jpg",
      },
      {
        id: "Ahmedabad",
        location: "Ahmedabad",
        locationImage:
          "https://res.cloudinary.com/dxi9xkgna/image/upload/v1742817059/ahmedabad_kyp2wo.jpg",
      },
      {
        id: "Lucknow",
        location: "Lucknow",
        locationImage:
          "https://res.cloudinary.com/dxi9xkgna/image/upload/v1742817059/lucknow_v1u0un.jpg",
      },
      {
        id: "Kanpur",
        location: "Kanpur",
        locationImage:
          "https://res.cloudinary.com/dxi9xkgna/image/upload/v1742817059/kanpur_f2wxpq.jpg",
      },
      {
        id: "Nagpur",
        location: "Nagpur",
        locationImage:
          "https://res.cloudinary.com/dxi9xkgna/image/upload/v1742817059/nagpur_mk2hgr.jpg",
      },
      {
        id: "Indore",
        location: "Indore",
        locationImage:
          "https://res.cloudinary.com/dxi9xkgna/image/upload/v1742817281/indoree_j5irwl.jpg",
      },
      {
        id: "Bhopal",
        location: "Bhopal",
        locationImage:
          "https://res.cloudinary.com/dxi9xkgna/image/upload/v1742817059/bhopal_npd0jf.jpg",
      },
    ],
  });
});

// Map Route
app.get("/api/map/", authenticationToken, (request, response) => {
  response.json({
    location: [
      { id: "Visakhapatnam", latitude: 17.6868, longitude: 83.2185, zoom: 5 },
      { id: "Hyderabad", latitude: 17.385, longitude: 78.4867, zoom: 5 },
      { id: "Pune", latitude: 18.5204, longitude: 73.8567, zoom: 5 },
      { id: "Bangalore", latitude: 12.9716, longitude: 77.5946, zoom: 5 },
      { id: "Chennai", latitude: 13.0827, longitude: 80.2707, zoom: 5 },
      { id: "Mumbai", latitude: 19.076, longitude: 72.8777, zoom: 5 },
      { id: "Delhi", latitude: 28.6139, longitude: 77.209, zoom: 5 },
      { id: "Kolkata", latitude: 22.5726, longitude: 88.3639, zoom: 5 },
      { id: "Jaipur", latitude: 26.9124, longitude: 75.7873, zoom: 5 },
      { id: "Ahmedabad", latitude: 23.0225, longitude: 72.5714, zoom: 5 },
      { id: "Lucknow", latitude: 26.8467, longitude: 80.9462, zoom: 5 },
      { id: "Kanpur", latitude: 26.4499, longitude: 80.3319, zoom: 5 },
      { id: "Nagpur", latitude: 21.1458, longitude: 79.0882, zoom: 5 },
      { id: "Indore", latitude: 22.7196, longitude: 75.8577, zoom: 5 },
      { id: "Bhopal", latitude: 23.2599, longitude: 77.4126, zoom: 5 },
    ],
  });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
