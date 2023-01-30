import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    comment: "自增id"
  })
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'int' })
  age?: number;

  @Column({ type: 'varchar' })
  address?: string;

  @UpdateDateColumn()
  updateTime?: Date;

  @CreateDateColumn()
  createTime?: Date;
}