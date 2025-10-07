import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { PaymentOrmEntity } from './payment.orm-entity.js';
import { RestaurantOrmEntity } from './restaurant.orm-entity.js';
import { TableOrmEntity } from './table.orm-entity.js';
import { UserOrmEntity } from './user.orm-entity.js';

@Entity({ name: 'reserva' })
export class ReservationOrmEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'reserva_id' })
  id!: string;

  @ManyToOne(() => UserOrmEntity, (user: UserOrmEntity) => user.reservas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'usuario_id' })
  usuario!: UserOrmEntity;

  @ManyToOne(
    () => RestaurantOrmEntity,
    (restaurant: RestaurantOrmEntity) => restaurant.reservas,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'restaurante_id' })
  restaurante!: RestaurantOrmEntity;

  @ManyToOne(() => TableOrmEntity, (table: TableOrmEntity) => table.reservaciones, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'mesa_id' })
  mesa?: TableOrmEntity | null;

  @Column({ name: 'fecha_reserva', type: 'date' })
  fechaReserva!: string;

  @Column({ type: 'time' })
  hora!: string;

  @Column({ name: 'cantidad_personas', type: 'int' })
  cantidadPersonas!: number;

  @Column({ length: 30 })
  estado!: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  notas?: string | null;

  @OneToMany(() => PaymentOrmEntity, (payment: PaymentOrmEntity) => payment.reserva)
  pagos!: PaymentOrmEntity[];
}
