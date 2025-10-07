import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

import { PaymentOrmEntity } from './payment.orm-entity.js';
import { ReservationOrmEntity } from './reservation.orm-entity.js';
import { ReviewOrmEntity } from './review.orm-entity.js';
import { SubscriptionOrmEntity } from './subscription.orm-entity.js';

@Entity({ name: 'usuario' })
@Unique(['email'])
export class UserOrmEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'usuario_id' })
  id!: string;

  @Column({ length: 100 })
  email!: string;

  @Column({ length: 100 })
  nombres!: string;

  @Column({ length: 15 })
  telefono!: string;

  @OneToMany(
    () => ReservationOrmEntity,
    (reservation: ReservationOrmEntity) => reservation.user,
  )
  reservas!: ReservationOrmEntity[];

  @OneToMany(() => PaymentOrmEntity, (payment: PaymentOrmEntity) => payment.user)
  pagos!: PaymentOrmEntity[];

  @OneToMany(
    () => SubscriptionOrmEntity,
    (subscription: SubscriptionOrmEntity) => subscription.user,
  )
  suscripciones!: SubscriptionOrmEntity[];

  @OneToMany(() => ReviewOrmEntity, (review: ReviewOrmEntity) => review.user)
  resenas!: ReviewOrmEntity[];
}
