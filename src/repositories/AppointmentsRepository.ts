import { isEqual } from 'date-fns';

import Appointment from '../models/Appointments';

interface CreateAppointmentDTO {
  date: Date;
  provider: string;
}

class AppointmentRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  public create({ date, provider }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({ date, provider });

    this.appointments.push(appointment);

    return appointment;
  }

  public findByDate(date: Date): Appointment | null {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return findAppointment || null;
  }
}

export default AppointmentRepository;
