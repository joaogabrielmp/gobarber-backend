import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import ListProviderMonthAvailabilityService from './ListProviderMonthAvailabilityService';

let listProviderMonthAvailability: ListProviderMonthAvailabilityService;
let fakeAppointmentsRepository: FakeAppointmentsRepository;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    listProviderMonthAvailability = new ListProviderMonthAvailabilityService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to list the month availability from provider', async () => {
    await fakeAppointmentsRepository.create({
      provider_id: 'user',
      user_id: 'user_id',
      date: new Date(2020, 7, 1, 8, 0, 0),
    });

    const availability = await listProviderMonthAvailability.execute({
      provider_id: 'user',
      year: 2020,
      month: 7,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { available: true, day: 1 },
        { available: true, day: 2 },
        { available: true, day: 3 },
        { available: true, day: 4 },
        { available: true, day: 5 },
        { available: true, day: 6 },
        { available: true, day: 7 },
        { available: true, day: 8 },
        { available: true, day: 9 },
        { available: true, day: 10 },
        { available: true, day: 11 },
        { available: true, day: 12 },
        { available: true, day: 13 },
        { available: true, day: 14 },
        { available: true, day: 15 },
        { available: true, day: 16 },
        { available: true, day: 17 },
        { available: true, day: 18 },
        { available: true, day: 19 },
        { available: true, day: 20 },
        { available: true, day: 21 },
        { available: true, day: 22 },
        { available: true, day: 23 },
        { available: true, day: 24 },
        { available: true, day: 25 },
        { available: true, day: 26 },
        { available: true, day: 27 },
        { available: true, day: 28 },
        { available: true, day: 29 },
        { available: true, day: 30 },
        { available: true, day: 31 },
      ]),
    );
  });
});
