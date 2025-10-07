import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { SubscriptionOrmEntity } from './subscription.orm-entity.js';

@Entity({ name: 'plan_suscripcion' })
export class SubscriptionPlanOrmEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'plan_suscripcion_id' })
  id!: string;

  @Column({ length: 100 })
  nombre!: string;

  @Column({ length: 50 })
  tipo!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio!: number;

  @Column({ length: 50 })
  periodo!: string;

  @Column({ length: 30 })
  estado!: string;

  @OneToMany(
    () => SubscriptionOrmEntity,
    (subscription: SubscriptionOrmEntity) => subscription.plan,
  )
  suscripciones!: SubscriptionOrmEntity[];
}
