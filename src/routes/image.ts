import { Router } from 'express';
import resizeImage from '../controllers/resizeImageController';
import { imageCaching } from '../middlewares/imageCaching';
import { inputValidator } from '../middlewares/inputValidator';

const imageRouter = Router();
imageRouter.get('/api/images', [inputValidator, imageCaching], resizeImage);

export default imageRouter;
