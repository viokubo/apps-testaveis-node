import { describe, expect, it } from "vitest";
import { Appointment } from "../entities/appointment";
import { InMemoryAppointmentRepository } from "../repositories/in-memory/in-memory-appointment-repository";
import { getFutureDate } from "../tests/utils/get-future-date";
import { CreateAppointment } from "./create-appointment";

describe("Created Appointment", () => {
  it("should be able to create an appointment", () => {
    const startsAt = getFutureDate("2022-08-09");
    const endsAt = getFutureDate("2022-08-10");

    const appointmentsRepository = new InMemoryAppointmentRepository();
    const createAppintment = new CreateAppointment(appointmentsRepository);
    expect(
      createAppintment.execute({
        customer: "John Doe",
        startsAt,
        endsAt,
      })
    ).resolves.toBeInstanceOf(Appointment);
  });

  it("should not be able to create an appointment with overlapping dates", () => {
    // const startsAt = getFutureDate("2022-08-10");
    // const endsAt = getFutureDate("2022-08-15");
    // const appointmentsRepository = new InMemoryAppointmentRepository();
    // const createAppintment = new CreateAppointment(appointmentsRepository);
    // expect(
    //   createAppintment.execute({
    //     customer: "John Doe",
    //     startsAt,
    //     endsAt,
    //   })
    // ).resolves.toBeInstanceOf(Appointment);
    // expect(
    //   createAppintment.execute({
    //     customer: "John Doe",
    //     startsAt: getFutureDate("2022-08-14"),
    //     endsAt: getFutureDate("2022-08-18"),
    //   })
    // ).rejects.toBeInstanceOf(Error);
    // expect(
    //   createAppintment.execute({
    //     customer: "John Doe",
    //     startsAt: getFutureDate("2022-08-09"),
    //     endsAt: getFutureDate("2022-08-13"),
    //   })
    // ).rejects.toBeInstanceOf(Error);
    // expect(
    //   createAppintment.execute({
    //     customer: "John Doe",
    //     startsAt: getFutureDate("2022-08-11"),
    //     endsAt: getFutureDate("2022-08-14"),
    //   })
    // ).rejects.toBeInstanceOf(Error);
  });
});
