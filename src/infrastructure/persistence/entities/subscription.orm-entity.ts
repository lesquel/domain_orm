import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { RestaurantOrmEntity } from './restaurant.orm-entity.js';
import { SubscriptionPlanOrmEntity } from './subscription-plan.orm-entity.js';
import { UserOrmEntity } from './user.orm-entity.js';

@Entity({ name: 'suscripcion' })
export class SubscriptionOrmEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'suscripcion_id' })
  id!: string;

  @ManyToOne(
    () => SubscriptionPlanOrmEntity,
    (plan: SubscriptionPlanOrmEntity) => plan.suscripciones,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'plan_suscripcion_id' })
  plan!: SubscriptionPlanOrmEntity;

  @ManyToOne(() => UserOrmEntity, (user: UserOrmEntity) => user.suscripciones, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'usuario_id' })
  usuario!: UserOrmEntity;

  @ManyToOne(
    () => RestaurantOrmEntity,
    (restaurant: RestaurantOrmEntity) => restaurant.suscripciones,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'restaurante_id' })
  restaurante!: RestaurantOrmEntity;

  @Column({ name: 'fecha_inicio', type: 'date' })
  fechaInicio!: string;

  @Column({ name: 'fecha_fin', type: 'date', nullable: true })
  fechaFin?: string | null;

  @Column({ name: 'estado_suscripcion', length: 30 })
  estado!: string;
}
