const express = require("express");
const routerTask = require("./routes/task");
const app = express();

const port = 5000;

//middleware
app.use(express.json());

//ROUTE

app.use("/api/v1/tasks", routerTask);
app.listen(port, () => {
  console.log(`Server running at ${port}...`);
});
