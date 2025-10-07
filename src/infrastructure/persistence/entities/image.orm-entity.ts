import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { DishOrmEntity } from './dish.orm-entity.js';
import { LayoutObjectOrmEntity } from './layout-object.orm-entity.js';
import { RestaurantOrmEntity } from './restaurant.orm-entity.js';
import { TableOrmEntity } from './table.orm-entity.js';

@Entity({ name: 'imagen' })
export class ImageOrmEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'imagen_id' })
  id!: string;

  @Column({ length: 255 })
  url!: string;

  @Column({ length: 50, nullable: true })
  titulo?: string | null;

  @Column({ type: 'text', nullable: true })
  descripcion?: string | null;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion!: Date;

  @Column({ name: 'es_activa', default: true })
  esActiva!: boolean;

  @OneToMany(() => RestaurantOrmEntity, (restaurant: RestaurantOrmEntity) => restaurant.imagen)
  restaurantes!: RestaurantOrmEntity[];

  @OneToMany(() => TableOrmEntity, (table: TableOrmEntity) => table.imagen)
  mesas!: TableOrmEntity[];

  @OneToMany(
    () => LayoutObjectOrmEntity,
    (layoutObject: LayoutObjectOrmEntity) => layoutObject.imagen,
  )
  objetos!: LayoutObjectOrmEntity[];

  @OneToMany(() => DishOrmEntity, (dish: DishOrmEntity) => dish.imagen)
  platillos!: DishOrmEntity[];
}
