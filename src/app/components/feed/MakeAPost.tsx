import { useEffect, useState } from "react";
import { useAuth } from "../../../infra/contexts/auth/UseAuth";
import { Button } from "../Button";
import { CloseButton } from "../CloseButton";
import Input from "../Input";
import { TextArea } from "../TextArea";
import axios from "axios";
import { FaSpotify } from "react-icons/fa";
import { set } from "react-hook-form";

export const MakeAPost = () => {
  const { user } = useAuth();
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchResult, setSearchResult] = useState<any | null>([]);
  const [searchClicked, setSearchClicked] = useState<any>();

  const { tokenSpotify } = useAuth();

  const clientId = "005ea22dc390451090dbba1fc8c8a23a";
  const clientSecret = "5293750eea0a4e578449673c5588c21d";
  const redirectUri = "http://localhost:3000/callback";


useEffect(() => {
  setSearchResult(null);
  const fetchData = async () => {
    try {
      var result = await axios.get(
        `https://api.spotify.com/v1/search?q=${searchInput}&type=track`,
        {
          headers: {
            Authorization: `Bearer ${tokenSpotify}`,
          },
        }
      );
 
    setSearchResult(result);
    } catch (error) {
      console.error("There was an error!", error);
    }
  };


  fetchData();
}, [searchInput]);

  return (
    <div className="flex justify-between flex-col w-full h-full box-border">
      <div className="flex w-full justify-between">
        <CloseButton />
        <p className="">@{user?.name}</p>
        <p className="opacity-0">
          <CloseButton />
        </p>
      </div>
      <div className="border-b border-stroke" />

      <div className="flex  flex-col h-full w-full justify-between ">
        {searchClicked && (
          <div className="flex gap-3">
            <img
              className="size-32"
              src={searchClicked.album.images[0].url}
            ></img>
            <div>
              <p>{searchClicked.artists[0].name}</p>
              <p>{searchClicked.name}</p>
              <p>{searchClicked.album.name}</p>
              <p>
                {Math.floor(searchClicked.duration_ms / 60000)}:
                {String(
                  Math.floor((searchClicked.duration_ms % 60000) / 1000)
                ).padStart(2, "0")}
              </p>
            </div>
          </div>
        )}
        <div
          className="flex h-fit p-4 justify-center
         items flex-col "
        >
          <div
            className="border-b border-stroke border-dotted 
          decoration-dotted w-full"
          />
          <div className="relative">
            <input
              placeholder="Buscar ou colar URL de áudio"
              onChange={(event) => setSearchInput(event.target.value)}
              className="rounded-sm h-8 w-full text-start appearance-none 
      relative
      bg-transparent placeholder:text-theme sm:text-sm/6 
      block
      after:inset-0 after:rounded-lg
      placeholder:text-2xl
      text-theme
      focus:outline-none
      md:text-xl font-bold"
            />
            {searchResult && (
              <div className="absolute top-[calc(2rem+8px)] 
              w-[20rem] rounded-lg flex flex-col 
              shadow-sm p-3 shadow-theme bg-fume 
              z-20 items-start overflow-auto h-[10rem] text-sm">
                {searchResult?.data?.tracks?.items.map((item: any) => (
                  <button
                    onClick={() => setSearchClicked(item)}
                    className="flex hover:text-theme transition-all duration-75"
                    key={item.id}
                  >
                    <FaSpotify /> {item.artists[0].name} - {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div
            className="border-b border-stroke border-dotted decoration-dotted
           w-full"
          />
        </div>

        <input
          placeholder="Comente aqui"
          className=" m-m-0 rounded-sm h-8 w-full text-start appearance-none 
            relative
            bg-transparent placeholder:text-contrast sm:text-sm/6 
            block
            after:inset-0 after:rounded-lg
            placeholder:text-2xl
            focus:outline-none
            md:text-xl font-light p-3"
        />

        <div className="w-full justify-between flex p-2">
          <button className="text-zinc-500 opacity-0">Cancelar</button>

          <div className="overflow-hidden w-1/3 h-fit rounded-3xl">
            <Button>Postar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
