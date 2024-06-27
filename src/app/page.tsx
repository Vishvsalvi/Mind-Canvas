import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";

export default async function Home() {
  return (
    <main>
      <Navbar />

      <section className="relative top-12 mx-16 font-bold text-3xl">
        <h1>My Feed</h1>
      </section>

      <section className="relative top-28 mx-16">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-lg bg-gray-200">
              <BlogCard />
            </div>
            <div className="rounded-lg bg-gray-200">
              <BlogCard />
            </div>
            <div className="rounded-lg bg-gray-200">
              <BlogCard />
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg ">
              <Card className="font-bold px-4 py-6 text-xl lg:w-[85%]  text-gray-800">
                <h1 className="mb-5" >
                Newly Published Articles  
                </h1>

                <ul>
                  <li className="py-3">
                    <div>
                      <h1 className="font-semibold text-sm text-gray-700">From Darkness to Light: A Journey of Hope and Triumph.</h1>
                      <h2 className="text-gray-500 text-sm py-2 font-medium">Written by: Vishv Salvi  <span className="inline-block mx-2 font-bold opacity-50 ml-0">·</span>85 reads 5 comments</h2>
                      
                    </div>
                  </li>
                  <li className="py-3">
                    <div>
                      <h1 className="font-semibold text-sm text-gray-700">From Darkness to Light: A Journey of Hope and Triumph.</h1>
                      <h2 className="text-gray-600 text-sm py-1 font-medium">Written by: Vishv Salvi . 30 likes </h2>
                    </div>
                  </li>
              
                </ul>


              </Card>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
