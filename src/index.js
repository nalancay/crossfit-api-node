const express = require("express");
const apicache = require("apicache");
const v1Router = require("./v1/routes/workoutRoutes");

const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express();
const cache = apicache.middleware;
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cache("2 minutes"));
app.use("/api/v1/workouts", v1Router);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
  V1SwaggerDocs(app, PORT);
});
