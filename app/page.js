import { getAllCourses } from "punn";

async function Home() {
  const allCourses = await getAllCourses();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <pre>{JSON.stringify(allCourses, null, 2)}</pre>
    </main>
  );
}

export default Home;
