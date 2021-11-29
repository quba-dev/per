import { JoinColumn, Column, Entity, OneToOne, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';
import { Location } from '../location/location.entity';


@Entity()
export class Activity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  start_date: Date
  // @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  // createDateTime: Date

  @Column({})
  end_date:Date

  @Column({unique:true})
  name:string

  @Column()
  description:string

  @OneToOne(type=>Location,location=>location.activity)
  @JoinColumn()
  location:Location




}