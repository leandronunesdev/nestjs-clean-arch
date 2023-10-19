import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProjectDto } from 'src/projects/dto/create-project.dto';
import { Project } from 'src/projects/entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CreateProjectUseCase {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepo: Repository<Project>,
  ) {}

  execute(input: CreateProjectDto) {
    const project = new Project(input);
    return this.projectRepo.save(project);
  }
}
