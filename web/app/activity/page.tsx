import ActivityClient, { ActivityEvent } from '@/components/ActivityClient';
import { getActivityEvents, getActivityFilterOptions } from '@/lib/db';

export default async function ActivityPage() {
  const [rawEvents, options] = await Promise.all([getActivityEvents(100), getActivityFilterOptions()]);
  const events = rawEvents.map((event) => ({
    ...event,
    createdAt: event.createdAt ? event.createdAt.toISOString() : null,
  })) as ActivityEvent[];

  return (
    <div className="mx-auto w-full max-w-7xl">
      <header className="mb-6">
        <p className="text-sm uppercase tracking-widest text-rsa-gold">Activity</p>
        <h1 className="text-2xl font-semibold text-white">Latest events and activity log</h1>
      </header>

      <ActivityClient
        initialEvents={events}
        players={options.players}
        teams={options.teams}
        staff={options.staff}
        eventTypes={options.eventTypes}
      />
    </div>
  );
}
