import { Inject } from '@nestjs/common';
import { StartProjectDto } from 'src/projects/dto/start-project.dto';
import { IProjectRepository } from 'src/projects/project.repository';

//S (Single Responsibility) OLI D (Dependency Inversion)
export class StartProjectUseCase {
  constructor(
    @Inject('IProjectRepository')
    private readonly projectRepo: IProjectRepository, //Repository em memoria
  ) {}

  async execute(id: string, input: StartProjectDto) {
    const project = await this.projectRepo.findById(id);
    project.start(input.started_at);
    await this.projectRepo.update(project);
    return project;
  }
}
