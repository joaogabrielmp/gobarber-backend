import {
  CreateDateColumn,
  Column,
  Entity,
  ObjectID,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('notifications')
class Notification {
  @ObjectIdColumn()
  id: ObjectID;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  content: string;

  @Column({ default: false })
  read: boolean;

  @Column('uuid')
  recipient_id: string;
}

export default Notification;
