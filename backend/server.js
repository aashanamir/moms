import app from "./app.js";
import { ErrorMiddlerware } from "./middlewares/errorMiddleware.js";


app.listen(process.env.PORT , ()=> {
  console.log(`Server is runing on ${process.env.PORT}`);
});

app.use(ErrorMiddlerware);