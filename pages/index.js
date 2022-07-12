import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../helpers/api-utils';

function HomePage({events}) {
  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
    return {
      props:{
        events:featuredEvents,
      },
      revalidate:90
    }
}

export default HomePage;
