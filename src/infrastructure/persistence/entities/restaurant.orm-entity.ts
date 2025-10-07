import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ImageOrmEntity } from './image.orm-entity.js';
import { MenuOrmEntity } from './menu.orm-entity.js';
import { ReservationOrmEntity } from './reservation.orm-entity.js';
import { ReviewOrmEntity } from './review.orm-entity.js';
import { SectionOrmEntity } from './section.orm-entity.js';
import { SubscriptionOrmEntity } from './subscription.orm-entity.js';

@Entity({ name: 'restaurante' })
export class RestaurantOrmEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'restaurante_id' })
  id!: string;

  @Column({ length: 100 })
  nombre!: string;

  @Column({ type: 'text', nullable: true })
  descripcion?: string | null;

  @Column({ length: 200 })
  direccion!: string;

  @Column({ name: 'horario_atencion', length: 100, nullable: true })
  horarioAtencion?: string | null;

  @Column({ name: 'capacidad_total', type: 'int' })
  capacidadTotal!: number;

  @ManyToOne(() => ImageOrmEntity, (image: ImageOrmEntity) => image.restaurantes, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'imagen_id' })
  imagen?: ImageOrmEntity | null;

  @OneToMany(() => SectionOrmEntity, (section: SectionOrmEntity) => section.restaurante)
  secciones!: SectionOrmEntity[];

  @OneToMany(() => ReservationOrmEntity, (reservation: ReservationOrmEntity) => reservation.restaurante)
  reservas!: ReservationOrmEntity[];

  @OneToMany(() => ReviewOrmEntity, (review: ReviewOrmEntity) => review.restaurante)
  resenas!: ReviewOrmEntity[];

  @OneToMany(() => SubscriptionOrmEntity, (subscription: SubscriptionOrmEntity) => subscription.restaurante)
  suscripciones!: SubscriptionOrmEntity[];

  @OneToMany(() => MenuOrmEntity, (menu: MenuOrmEntity) => menu.restaurante)
  menus!: MenuOrmEntity[];
}
