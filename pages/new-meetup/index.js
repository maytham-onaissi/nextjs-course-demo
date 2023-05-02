import axios from "axios";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (data) => {
    const response = await axios.post("/api/new-meetup", data);
    // const response = await fetch("/api/new-meetup", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: { "Content-Type": "application/json" },
    // });

    const resData = await response;
    console.log(resData);
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Add a new Meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />;
    </>
  );
};

export default NewMeetupPage;
