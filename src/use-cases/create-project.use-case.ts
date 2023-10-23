import { Inject, Injectable } from '@nestjs/common';
import { CreateProjectDto } from 'src/projects/dto/create-project.dto';
import { Project } from 'src/projects/entities/project.entity';
import { IProjectRepository } from 'src/projects/project.repository';

@Injectable()
export class CreateProjectUseCase {
  constructor(
    @Inject('IProjectRepository')
    private readonly projectRepo: IProjectRepository,
  ) {}

  async execute(input: CreateProjectDto) {
    const project = new Project(input);
    await this.projectRepo.create(project);
    return project;
  }
}
