import React from 'react'
import { ResizableBox } from 'react-resizable'
import Firstsec from './home/Firstsec'
import Section from './home/Section'

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
    </div>
  )
}

export default Home