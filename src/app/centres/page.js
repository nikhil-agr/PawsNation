'use client'
import { useState, useEffect } from "react"
import { ProfileCard } from "@/components/ProfileCard"
import { SearchInput } from "@/components/SearchInput"
import { data } from "@/services/data"
import { useSearchParams } from 'next/navigation'
import HorizontalGallery from "@/components/HorizontalGallery"
import Dog from "@/components/Dog"

const Home = () => {
  const [profileData, setProfileData] = useState([])
  // const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("");
  const [searchBy, setSearchBy] = useState("Name");
  // const searchQuery = searchParams && searchParams.get("q"); // we use `q` to set the query to the browser, it could be anything


  useEffect(() => {
    setProfileData(data)
  }, [])

  const totalUser = profileData.length;

  const handleSearch = () => {

    const findUser = data.filter((user) => {

      if (searchQuery) {
        if (searchBy == "Name") {
          return (user.name.toLowerCase().includes(searchQuery.toLowerCase()));
        }
        else if (searchBy == "Place") {
          return (user.location.toLowerCase().includes((searchQuery.toLowerCase())));
        }
        else {
          return (user.rating >= parseFloat(searchQuery));
        }
      } else {
        return true;
      }
    });
    console.log(findUser);

    setProfileData(findUser);
  };

  useEffect(() => {

    handleSearch();

  }, [searchQuery]);


  return (<>
    <Dog />
    <div className="overflow-hidden">
      <div className=" w-screen h-screen bg-[#BC9E60] flex items-center justify-center  text-purple-500 font-bungee text-7xl">
        <p className="animate-bounce text-stone-900">See these beautiful faces</p>
      </div>
      <HorizontalGallery />
      <div className="w-screen h-screen border-t-zinc-300 border-t-[1px] bg-[#3e3e3e] flex items-center justify-center text-white font-bungee text-7xl">
        <p className=" absolute justify-center text-center animate-bounce">Open your heart and home to a furry friend <br /> Adopt a dog, change a life</p>
      </div>{' '}
    </div >
    <section className="bg-[#C6EBC5] w-screen px-[2rem] md:px-[6rem] pt-[100px] mb-[100px]">
      <SearchInput var={searchQuery} varChange={setSearchQuery} searchByFunc={setSearchBy} />
      <div className="mt-20">

        {totalUser === 0 ? <div style={{ fontSize: '500%' }} className="mt-40 mb-40 grid place-content-center">No Store Found 🐶</div> : (

          <div className=" grid grid-cols-1 md:grid-cols-3 items-center gap-x-50 gap-y-8">

            {profileData.map(({ contact, rating, timings, vetAvailable, location, name, photo }, index) => {
              return (
                <div key={index} className="w-65">
                  <ProfileCard name={name} location={location} photo={photo} contact={contact} rating={rating} timings={timings} vetAvailable={vetAvailable} />
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  </>
  )
}

export default Home