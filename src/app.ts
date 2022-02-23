import express from 'express';
import imageRoute from './routes/image';
const app = express();
const port = 3000;
app.get('/', function (req: express.Request, res: express.Response): void {
  res.status(200).send({
    msg: 'App running Successfully',
  });
});
app.use(imageRoute);

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});
export default app;
