// import path from 'path';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import IMailProvider from '@shared/container/providers/MailProvider/models/IMailProvider';

interface IRequest {
  email: string;
}

@injectable()
class SendForgotPasswordEmailService {
  constructor(
    @inject('MailProvider')
    private mailProvider: IMailProvider,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('UserTokensRepository')
    private userTokensRepository: IUserTokensRepository,
  ) {}

  async execute({ email }: IRequest): Promise<void> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('User does not exists');
    }

    const { token } = await this.userTokensRepository.generate(user.id);

    // const forgotPasswordTempalte = path.resolve(
    //   __dirname,
    //   '..',
    //   'views',
    //   'forgot_password.hbs',
    // );

    // await this.mailProvider.sendMail({
    //   to: {
    //     name: user.name,
    //     email: user.email,
    //   },
    //   subject: '[GoBarber] Recuperação de senha',
    //   templateData: {
    //     file: forgotPasswordTempalte,
    //     variables: {
    //       name: user.name,
    //       link: `${process.env.APP_WEB_URL}/reset-password?token=${token}`,
    //     },
    //   },
    // });
  }
}

export default SendForgotPasswordEmailService;
