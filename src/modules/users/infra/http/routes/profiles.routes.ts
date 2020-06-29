import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';

import ProfileController from '@modules/users/infra/http/controllers/ProfileController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const profilesRouter = Router();
const profileController = new ProfileController();

profilesRouter.use(ensureAuthenticated);

profilesRouter.get('/', profileController.show);

profilesRouter.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      name: Joi.string().required(),
      old_password: Joi.string(),
      password: Joi.string(),
      password_confirmation: Joi.string().valid(Joi.ref('password')),
    },
  }),
  profileController.update,
);

export default profilesRouter;
