import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { ImageOrmEntity } from './image.orm-entity.js';
import { SectionLayoutObjectOrmEntity } from './section-layout-object.orm-entity.js';

@Entity({ name: 'objeto' })
export class LayoutObjectOrmEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'objeto_id' })
  id!: string;

  @Column({ length: 100, nullable: true })
  nombre?: string | null;

  @Column({ length: 50, nullable: true })
  tipo?: string | null;

  @Column({ name: 'pos_x', type: 'int' })
  posX!: number;

  @Column({ name: 'pos_y', type: 'int' })
  posY!: number;

  @Column({ name: 'ancho', type: 'int' })
  ancho!: number;

  @Column({ name: 'alto', type: 'int' })
  alto!: number;

  @ManyToOne(() => ImageOrmEntity, (image: ImageOrmEntity) => image.objetos, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'imagen_id' })
  imagen?: ImageOrmEntity | null;

  @OneToMany(
    () => SectionLayoutObjectOrmEntity,
    (sectionObject: SectionLayoutObjectOrmEntity) => sectionObject.objeto,
  )
  seccionObjetos!: SectionLayoutObjectOrmEntity[];
}
