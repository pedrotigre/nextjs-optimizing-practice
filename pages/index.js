import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';
import Head from 'next/head';
import NewsletterRegistration from '../components/input/newsletter-registration';
import Notification from '../components/ui/notification';

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>Featured Events</title>
        <meta name="description" content="Check out our featured events!" />
      </Head>
      <NewsletterRegistration />
      <Notification title={'Title'} message={'message'} status={'success'} />
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
