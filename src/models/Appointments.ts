import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('time without time zone')
  date: Date;

  @Column()
  provider: string;
}

export default Appointment;
