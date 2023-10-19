import { InjectRepository } from '@nestjs/typeorm';
import { StartProjectDto } from 'src/projects/dto/start-project.dto';
import { Project } from 'src/projects/entities/project.entity';
import { Repository } from 'typeorm';

//S (Single Responsibility) OLI D (Dependency Inversion)
export class StartProjectUseCase {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepo: Repository<Project>,
  ) {}

  async execute(id: string, input: StartProjectDto) {
    const project = await this.projectRepo.findOneOrFail({ where: { id } });
    project.start(input.started_at);
    return this.projectRepo.save(project);
  }
}
