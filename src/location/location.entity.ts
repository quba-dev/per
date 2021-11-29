import { JoinColumn,Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Activity } from '../activity/activity.entity';


@Entity()
export class Location{
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  address:string

  @OneToOne(type=>Activity,activity=>activity.location)
  @JoinColumn()
  activity:Activity



}