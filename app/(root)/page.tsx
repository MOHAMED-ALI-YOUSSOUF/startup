import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}:{searchParams: Promise<{query?: string}>}) {
  
  const query = (await searchParams).query


const posts = [
  {
    _createdAt:"yesterday",
    views: 55,
    author:{ _id:1, name:"Maki"},
    _id:1,
    description:"this is a descriptiom",
    image:"https://www.mohamed-ali-youssouf.com/logo4.svg",
    category:"robots",
    title:"We Robots",

  }
]

  return (
    <>
    <section className="pink_container">
      <h1 className="heading">Pitch Your Startup, <br />
      connect with Entrepreneurs</h1>
      <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitch, and Get Noticed in Virtual Competitions</p>
      <SearchForm query={query}/>
    </section>
    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `search results for "${query}` : "All Startups"}
      </p>
      <ul className="mt-7 card_grid">
{
  posts?.length > 0 ? (
    posts.map((post: StartupCardType, index: number) =>(
      <StartupCard key={post?._id} post={post}/>
    ))
  ): (
    <p className="no-results">No Startups found</p>
  )
}

      </ul>
    </section>
    </>
    
  );
}
