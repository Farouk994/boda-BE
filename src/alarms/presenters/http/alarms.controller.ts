/* eslint eqeqeq: "off", curly: "error" */
import { Controller, Get, Post, Body } from '@nestjs/common';
import { AlarmsService } from 'src/alarms/application/alarms.service';
import { CreateAlarmDto } from './dto/create-alarm.dto';
import { CreateAlarmCommand } from 'src/alarms/application/commands/create-alarm.command';
// import { UpdateAlarmDto } from './dto/update-alarm.dto';

@Controller('alarms')
export class AlarmsController {
  constructor(private readonly alarmsService: AlarmsService) {}

  @Post()
  create(@Body() createAlarmDto: CreateAlarmDto) {
    return this.alarmsService.create(
      new CreateAlarmCommand(createAlarmDto.name, createAlarmDto.severity),
    );
  }

  @Get()
  findAll() {
    return this.alarmsService.findAll();
  }
}
