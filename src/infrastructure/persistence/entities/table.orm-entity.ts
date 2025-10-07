import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { ImageOrmEntity } from './image.orm-entity.js';
import { ReservationOrmEntity } from './reservation.orm-entity.js';
import { SectionOrmEntity } from './section.orm-entity.js';

@Entity({ name: 'mesa' })
export class TableOrmEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'mesa_id' })
  id!: string;

  @ManyToOne(() => SectionOrmEntity, (section: SectionOrmEntity) => section.mesas, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'seccion_id' })
  seccion!: SectionOrmEntity;

  @Column({ name: 'numero_mesa', type: 'int' })
  numeroMesa!: number;

  @Column({ type: 'int' })
  capacidad!: number;

  @Column({ name: 'pos_x', type: 'int' })
  posX!: number;

  @Column({ name: 'pos_y', type: 'int' })
  posY!: number;

  @Column({ name: 'ancho', type: 'int' })
  ancho!: number;

  @Column({ name: 'alto', type: 'int' })
  alto!: number;

  @ManyToOne(() => ImageOrmEntity, (image: ImageOrmEntity) => image.mesas, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'imagen_id' })
  imagen?: ImageOrmEntity | null;

  @OneToMany(() => ReservationOrmEntity, (reservation: ReservationOrmEntity) => reservation.mesa)
  reservaciones!: ReservationOrmEntity[];
}
