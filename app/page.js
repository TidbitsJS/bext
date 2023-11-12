import { getAllCourses } from "punn";

export const revalidate = 0; // revalidate at most every hour

async function Home() {
  const allCourses = await getAllCourses();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <pre>{JSON.stringify(allCourses, null, 2)}</pre>
    </main>
  );
}

export default Home;
