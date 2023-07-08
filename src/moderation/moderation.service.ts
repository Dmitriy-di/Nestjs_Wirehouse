import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class ModerationService {
  constructor(@InjectQueue('moderation') private moderationQueue: Queue) {}

  async moderate(contract_id: Number) {
    this.moderationQueue.add('moderate', {
      contract_id,
    });
  }

  async getJobs() {
    return await this.moderationQueue.getJobs(['active', 'completed']);
  }
}
