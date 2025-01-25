import { Alarm } from '../../domain/alarm';

// defines contract for alarms repo, two methods,
export abstract class AlarmRepository {
  abstract findAll(): Promise<Alarm[]>; // return list of all alarms
  abstract save(alarm: Alarm): Promise<Alarm>; // save new alarm and return it
}
