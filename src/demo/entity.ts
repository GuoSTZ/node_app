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

@Entity()
export class Schema {
  @PrimaryGeneratedColumn({
    comment: "自增id"
  })
  id: number;

  @Column({ type: 'varchar' })
  schemaKey: string;

  @Column({ type: 'varchar' })
  schemaName?: string;

  @Column({ type: 'varchar', length: 10000 })
  schemaFile?: string;

  @Column({ type: 'varchar' })
  schemaFileName?: string;

  @UpdateDateColumn()
  updateTime?: Date;

  @CreateDateColumn()
  createTime?: Date;
}