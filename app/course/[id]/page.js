import { getSingleCourse } from "punn";

async function Home({ params }) {
  const courseId = params.id;
  const courseInfo = await getSingleCourse(courseId);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <pre>{JSON.stringify(courseInfo, null, 2)}</pre>
    </main>
  );
}

export default Home;
