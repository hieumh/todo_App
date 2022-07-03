import { Controller, Get, Param } from '@nestjs/common';
import { Task } from '@prisma/client';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAllTasks() {
    return await this.taskService.getAllTasks();
  }

  @Get(':id')
  async findOneTask(@Param() params): Promise<Task> {
    return await this.taskService.getOneTask(params.id);
  }
}
