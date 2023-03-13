import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import bcrypt from 'bcryptjs'
import crypto from 'crypto';
import forge from 'node-forge';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import responseDataFormat, { ResponseDataFormat } from '../common/responseDataFormat';
import { Repository } from 'typeorm';

function genRSAKeyPaire() {
  // 生成RSA密钥对
  const keypair = forge.pki.rsa.generateKeyPair({ bits: 2048 });
  const publicKeyPem = forge.pki.publicKeyToPem(keypair.publicKey);
  const privateKeyPem = forge.pki.privateKeyToPem(keypair.privateKey);

  const privateKey = forge.pki.privateKeyFromPem(privateKeyPem);

  return { publicKey: publicKeyPem, privateKey };
}

const { publicKey, privateKey } = genRSAKeyPaire()

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async isLogin() {
    // 目前直接设置未登录
    return responseDataFormat({
      code: 0,
      data: {
        status: false,
        publicKey
      },
      message: "success"
    });
  }

  async login(createUser: CreateUserDto) {
    const { username, password } = createUser;

    const existUser = await this.userRepository.findOne({
      where: { username },
    });
    if (!existUser) {
      const result = { code: -1, message: "用户不存在" };
      return responseDataFormat(result);
    }
    const encryptedBytes = forge.util.decode64(password);
    const decryptedBytes = privateKey.decrypt(encryptedBytes);
    const decryptedText = forge.util.decodeUtf8(decryptedBytes);   

    if (bcrypt.compareSync(decryptedText, existUser.password)) {
      return responseDataFormat({
        code: 0,
        message: "登录成功"
      });
    } else {
      return responseDataFormat({
        code: -1,
        message: "用户名或密码不正确"
      });
    }
  }

  async register(createUser: CreateUserDto) {
    const { username } = createUser;

    const existUser = await this.userRepository.findOne({
      where: { username },
    });
    if (existUser) {
      const result = { code: -1, message: "用户名已存在" };
      return responseDataFormat(result);
    }

    await this.userRepository.save(createUser);
    return responseDataFormat({
      code: 0,
      message: "注册成功"
    });
  }
}
