import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [loading, setLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    setLoading(true);
    async function getData() {
      const response = await fetch(
        "https://react-getting-started-48585-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json"
      );
      const data = await response.json();
      const meetups = [];
      Object.keys(data).forEach((key) =>
        meetups.push({
          id: key,
          ...data[key],
        })
      );
      setLoading(false);
      console.log(meetups);
      setLoadedMeetups(meetups);
    }

    getData();
  }, []);

  return loading ? (
    <section>
      <p>Loading...</p>
    </section>
  ) : (
    <section>
      <h1>All meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
