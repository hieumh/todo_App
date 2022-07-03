import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { TaskModel } from './task.dto';

@Injectable()
export class TaskService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllTasks() {
    return await this.prismaService.task.findMany();
  }

  async getAllSubasks(taskId: string) {
    return await this.prismaService.subtask.findMany({
      where: {
        taskId: taskId,
      },
    });
  }

  async getAllSteps(subtaskId: string) {
    return await this.prismaService.step.findMany({
      where: {
        subtaskId: subtaskId,
      },
    });
  }

  async getOneTask(id: string) {
    return await this.prismaService.task.findUnique({
      where: {
        id: id,
      },
    });
  }

  async getOneSubtask(id: string) {
    return await this.prismaService.subtask.findUnique({
      where: {
        id: id,
      },
    });
  }

  async getOneStep(id: string) {
    return await this.prismaService.step.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createTask({ name, status, statusHower }: TaskModel) {
    return await this.prismaService.task.create({
      data: {
        name,
        status,
        statusHower,
      },
    });
  }

  async updateTask({ id, name, status, statusHower }: TaskModel) {
    return await this.prismaService.task.update({
      where: {
        id: id,
      },
      data: {
        name,
        status,
        statusHower,
      },
    });
  }

  async createStep({ name, start, end, subtaskId }) {
    return await this.prismaService.step.create({
      data: {
        name,
        start,
        end,
        subtaskId,
      },
    });
  }

  async updateStep({ name, start, end, subtaskId, id }) {
    return await this.prismaService.step.update({
      where: {
        id: id,
      },
      data: {
        name,
        start,
        end,
        subtaskId,
      },
    });
  }

  async createSubtask({ taskId, status, start, end, name }) {
    return await this.prismaService.subtask.create({
      data: {
        name,
        taskId,
        status,
        start,
        end,
      },
    });
  }

  async updateSubtask({ taskId, status, start, end, name, id }) {
    return await this.prismaService.subtask.update({
      where: {
        id: id,
      },
      data: {
        taskId,
        status,
        start,
        end,
        name,
      },
    });
  }

  async deleteTask(id: string) {
    return await this.prismaService.task.delete({ where: { id } });
  }

  async deleteSubtask(id: string) {
    return await this.prismaService.task.delete({ where: { id } });
  }

  async deleteStep(id: string) {
    return await this.prismaService.task.delete({ where: { id } });
  }
}
