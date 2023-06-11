import React from 'react'
import { ResizableBox } from 'react-resizable'
import Firstsec from './home/Firstsec'
import Section from './home/Section'
import { Icon } from '../../assets/icons'

const data = [
  {
    id:1,
    title:"Daily Mix 1",
    artist:"Ariana Grande",
    desc:"David Bowie, Queen, Elton John and more",
    img:"https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebb78f77c5583ae99472dd4a49/1/en/default",
    src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
  },
  {
    id:2,
    title:"Daily Mix 2",
    artist:"Dua Lipa",
    desc:"Rauw Alejandro, Bad Bunny, ROSALÍA and more",
    img:"https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb406e7e811b29f3f03b00cbc8/2/en/default",
    src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3"
  },
  {
    id:3,
    title:"Daily Mix 3",
    artist:"Anne-Marie",
    desc:"Eminem, Pretty Ricky, Michael Trapson and more as das dad aaa aaaaa aaaa  aaaa aaaaaaa aaaaaa aaaaaa aa aaaaa aaaa aaa aaaaa",
    img:"https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba00b11c129b27a88fc72f36b/3/en/default",
    src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3"
  },
  {
    id:4,
    title:"Daily Mix 4",
    artist:"Dua Lipa",
    desc:"Iggy Pop, Madness, Radiohead and more",
    img:"https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb21e6d14c3d8aab9887380d00/4/en/default",
    src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3"
  },
  {
    id:5,
    title:"Daily Mix 5",
    artist:"Anne-Marie",
    desc:"Post Malone, Calboy, Klondike Blonde and more",
    img:"https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb6be070445b03e0b63147c2c1/5/en/default",
    src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3"
  },
]

const data2 = [
  {
    id:6,
    title:"Daily Mix 2",
    artist:"Ariana Grande",
    desc:"Rauw Alejandro, Bad Bunny, ROSALÍA and more",
    img:"https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb406e7e811b29f3f03b00cbc8/2/en/default",
    src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3"
  },
  {
    id:7,
    title:"Daily Mix 1",
    artist:"Anne-Marie",
    desc:"David Bowie, Queen, Elton John and more",
    img:"https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebb78f77c5583ae99472dd4a49/1/en/default",
    src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
  },
  {
    id:8,
    title:"Daily Mix 3",
    artist:"Stormzy",
    desc:"Eminem, Pretty Ricky, Michael Trapson and more as das dad aaa aaaaa aaaa  aaaa aaaaaaa aaaaaa aaaaaa aa aaaaa aaaa aaa aaaaa",
    img:"https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba00b11c129b27a88fc72f36b/3/en/default",
    src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
  },
  {
    id:9,
    title:"Daily Mix 5",
    artist:"Anne-Marie",
    desc:"Post Malone, Calboy, Klondike Blonde and more",
    img:"https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb6be070445b03e0b63147c2c1/5/en/default",
    src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3"
  },
  {
    id:10,
    title:"Daily Mix 4",
    artist:"Dua Lipa",
    desc:"Iggy Pop, Madness, Radiohead and more",
    img:"https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb21e6d14c3d8aab9887380d00/4/en/default",
    src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3"
  },
]


const data3 = [
  {
    id:15,
    title:"Daily Mix 5",
    artist:"Anne-Marie",
    desc:"Post Malone, Calboy, Klondike Blonde and more",
    img:"https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb6be070445b03e0b63147c2c1/5/en/default",
    src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3"
  },
  {
    id:11,
    title:"Daily Mix 1",
    artist:"Ariana Grande",
    desc:"David Bowie, Queen, Elton John and more",
    img:"https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebb78f77c5583ae99472dd4a49/1/en/default",
    src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3"
  },
  {
    id:13,
    title:"Daily Mix 3",
    artist:"Dua Lipa",
    desc:"Eminem, Pretty Ricky, Michael Trapson and more as das dad aaa aaaaa aaaa  aaaa aaaaaaa aaaaaa aaaaaa aa aaaaa aaaa aaa aaaaa",
    img:"https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba00b11c129b27a88fc72f36b/3/en/default",
    src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3"
  },
  {
    id:12,
    title:"Daily Mix 2",
    artist:"Ariana Grande",
    desc:"Rauw Alejandro, Bad Bunny, ROSALÍA and more",
    img:"https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb406e7e811b29f3f03b00cbc8/2/en/default",
    src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3"
  },
  {
    id:14,
    title:"Daily Mix 4",
    artist:"Stormzy",
    desc:"Iggy Pop, Madness, Radiohead and more",
    img:"https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb21e6d14c3d8aab9887380d00/4/en/default",
    src:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3"
  },
]

function Home() {
  return (
    <div className=' z-50 text-white bg-transparent px-6 pt-2 grid gap-y-8'>
      <Firstsec />
      <Section name="Made for Current User" data={data}/>
      <Section name="Your top mixes" data={data2}/>
      <Section name="Recently played" data={data3}/>
      <Section name="Based on your recent listening" data={data}/>
      <footer className="mt-[100px] px-2 pb-[80px]">
        <div className="flex justify-between">
          <div className="flex gap-32">
            <div>
              <h1 className=" font-bold mb-2">Company</h1>
              <ul className=" flex flex-col gap-2 text-inactive-text-color font-medium">
                <li>
                  <a  href="" className=" transition-all hover:underline hover:text-white"> About </a>
                </li>
                <li>
                  <a  href="" className=" transition-all hover:underline hover:text-white"> Jobs </a>
                </li>
                <li>
                  <a   href="" className=" transition-all hover:underline hover:text-white"> For the Record </a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className=" font-bold mb-2">Communities</h1>
              <ul className=" flex flex-col gap-2 text-inactive-text-color font-medium">
                <li>
                  <a className=" transition-all hover:underline hover:text-white" href="">For Artist</a>
                </li>
                <li>
                  <a className=" transition-all hover:underline hover:text-white" href="">Developers</a>
                </li>
                <li>
                  <a className=" transition-all hover:underline hover:text-white" href="">Advertising</a>
                </li>
                <li>
                  <a className=" transition-all hover:underline hover:text-white" href="">Investors</a>
                </li>
                <li>
                  <a className=" transition-all hover:underline hover:text-white" href="">Vendors</a>
                </li>
                <li>
                  <a className=" transition-all hover:underline hover:text-white" href="">Spotify for Work</a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className=" font-bold mb-2">Useful links</h1>
              <ul className=" flex flex-col gap-2 text-inactive-text-color font-medium">
                <li>
                  <a className=" transition-all hover:underline hover:text-white" href="">Support</a>
                </li>
                <li>
                  <a className=" transition-all hover:underline hover:text-white" href="">Free Mobile App</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-4">
            <button className=" hover:bg-[#494949] w-10 h-10 bg-[#292929] rounded-full relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Icon name="instagram" size="18" />
              </div>
              <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Icon name="instagramIn" size={18} />
              </div>
            </button>
            <button className="hover:bg-[#494949] w-10 h-10 bg-[#292929] rounded-full flex justify-center items-center">
              <Icon name="twitter" size="18" />
            </button>
            <button className="hover:bg-[#494949] w-10 h-10 bg-[#292929] rounded-full flex justify-center items-center">
              <Icon name="facebook" size="18" />
            </button>
          </div>
        </div>
        <div className="w-full mt-10 mb-6 h-7 border-t border-inactive-text-color border-opacity-20" > </div>
        <div className="flex justify-between items-center">
          <div className="flex">
            <ul className="flex gap-4 text-sm font-medium text-inactive-text-color">
              <li><a href="" className="hover:text-white">Legal</a></li>
              <li><a href="" className="hover:text-white">Privacy Center</a></li>
              <li><a href="" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="" className="hover:text-white">Cookies</a></li>
              <li><a href="" className="hover:text-white">About Ads</a></li>
              <li><a href="" className="hover:text-white">Accesibility</a></li>
            </ul>
          </div>
          <div className=" text-inactive-text-color">
          © 2023 Spotify AB
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home