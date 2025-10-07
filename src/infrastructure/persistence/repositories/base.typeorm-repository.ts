import type { Repository } from 'typeorm';

import type { BaseRepository, PaginationOptions } from '../../../domain/repositories/base-repository.js';

type ToDomain<E, D> = (entity: E) => D;
type ToOrm<E, D> = (domain: D) => E;

export class TypeOrmBaseRepository<D, E extends { id: string }>
  implements BaseRepository<D, string>
{
  // Subclasses can override to include needed relations (supports 'a.b.c' paths)
  //
  protected relations: string[] = [];
  constructor(
    protected readonly repo: Repository<E>,
    protected readonly toDomain: ToDomain<E, D>,
    protected readonly toOrm: ToOrm<E, D>,
  ) {}

  async findById(id: string): Promise<D | null> {
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
