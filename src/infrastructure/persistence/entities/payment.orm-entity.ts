import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ReservationOrmEntity } from './reservation.orm-entity.js';
import { UserOrmEntity } from './user.orm-entity.js';

@Entity({ name: 'pago' })
export class PaymentOrmEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'pago_id' })
  id!: string;

  @ManyToOne(() => ReservationOrmEntity, (reservation: ReservationOrmEntity) => reservation.pagos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'reserva_id' })
  reserva!: ReservationOrmEntity;

  @ManyToOne(() => UserOrmEntity, (user: UserOrmEntity) => user.pagos, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'usuario_id' })
  usuario!: UserOrmEntity;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  monto!: number;

  @Column({ length: 3, default: 'USD' })
  moneda!: string;

  @Column({ length: 50 })
  metodo!: string;

  @Column({ length: 30 })
  estado!: string;

  @Column({ name: 'fecha_pago', type: 'datetime' })
  fechaPago!: Date;

  @Column({ length: 120, nullable: true })
  referencia?: string | null;
}
