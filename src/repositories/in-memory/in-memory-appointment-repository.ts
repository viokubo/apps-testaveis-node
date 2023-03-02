import { areIntervalsOverlapping } from "date-fns";

import { Appointment } from "./../../entities/appointment";
import { AppointmentsRepository } from "./../appointment-repository";

export class InMemoryAppointmentRepository implements AppointmentsRepository {
  public items: Appointment[] = [];

  async create(appointment: Appointment): Promise<void> {
    this.items.push(appointment);
  }
  async findOverLappingAppointment(
    startsAt: Date,
    endsAt: Date
  ): Promise<Appointment | null> {
    const overLappingAppointment = this.items.find((appointmet) => {
      return areIntervalsOverlapping(
        { start: startsAt, end: endsAt },
        { start: appointmet.startsAt, end: appointmet.endsAt },
        { inclusive: true }
      );
    });

    if (!overLappingAppointment) return null;

    return overLappingAppointment;
  }
}
