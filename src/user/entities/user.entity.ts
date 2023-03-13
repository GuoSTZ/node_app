import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import bcrypt from 'bcryptjs'
import { Exclude } from 'class-transformer'

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 100 })
  username: string; // 用户名

  @Exclude()
  @Column()
  password: string;  // 密码

  @Column({ nullable: true })
  avatar: string;   //头像

  @Column({ nullable: true })
  email: string;

  @Column('simple-enum', { enum: ['root', 'visitor'], default: 'visitor' })
  role: string;   // 用户角色

  @CreateDateColumn({ type: 'timestamp' })
  createTime: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updateTime: Date;

  @BeforeInsert()
  async encryptPwd() {
    this.password = await bcrypt.hashSync(this.password, 10);
  }
}