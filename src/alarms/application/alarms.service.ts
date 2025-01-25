import { Injectable } from '@nestjs/common';
// import { CreateAlarmDto } from '../presenters/http/dto/create-alarm.dto';
import { CreateAlarmCommand } from './commands/create-alarm.command';
// import { UpdateAlarmDto } from './dto/update-alarm.dto';

@Injectable()
export class AlarmsService {
  create(createAlarmDto: CreateAlarmCommand) {
    return 'This action adds a new alarm';
  }

  findAll() {
    return `This action returns all alarms`;
  }
}
