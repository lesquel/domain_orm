import type { Repository } from 'typeorm';

import type { BaseRepository, PaginationOptions } from '../../../domain/repositories/base-repository.js';

type ToDomain<E, D> = (entity: E) => D;
type ToOrm<E, D> = (domain: D) => E;

export class TypeOrmBaseRepository<D, E extends { id: string }>
    implements BaseRepository<D, string> {
    // Subclasses can override to include needed relations (supports 'a.b.c' paths)
    // Esta propiedad es para todas las relaciones de una entidad x 
    protected relations: string[] = [];
    // Constructor de la clase base de tipo orm
    constructor(
        // Instancia de la clase del repositorio de tipo orm (como interactua con la base de datos)
        protected readonly repo: Repository<E>,

        // Función para convertir una entidad de tipo orm a una entidad de dominio
        protected readonly toDomain: ToDomain<E, D>,
        // Función para convertir una entidad de dominio a una entidad de tipo orm

        protected readonly toOrm: ToOrm<E, D>,
    ) { }

    // Método para buscar una entidad por su ID
    async findById(id: string): Promise<D | null> {
        // Busca la entidad en la base de datos
        const entity = await this.repo.findOne({ where: { id } as any, relations: this.relations as any });
        return entity ? this.toDomain(entity) : null;
    }

    async findAll(options: PaginationOptions = {}): Promise<D[]> {
        const { offset = 0, limit = 50 } = options;
        const entities = await this.repo.find({ skip: offset, take: limit, relations: this.relations as any });
        return entities.map(this.toDomain);
    }

    async create(domain: D): Promise<D> {
        const entity = this.toOrm(domain);
        const saved = await this.repo.save(entity as any);
        return this.toDomain(saved);
    }

    async update(domain: D): Promise<D> {
        const entity = this.toOrm(domain);
        const saved = await this.repo.save(entity as any);
        return this.toDomain(saved);
    }

    async delete(id: string): Promise<void> {
        await this.repo.delete({ id } as any);
    }

    async count(): Promise<number> {
        return this.repo.count();
    }

    async exists(id: string): Promise<boolean> {
        const c = await this.repo.count({ where: { id } as any });
        return c > 0;
    }
}
