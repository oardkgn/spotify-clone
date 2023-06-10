import React from 'react'
import { ResizableBox } from 'react-resizable'
import Firstsec from './home/Firstsec'
import Section from './home/Section'

const data = [
  {
    id:1,
    title:"Daily Mix 1",
    desc:"David Bowie, Queen, Elton John and more",
    img:"https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebb78f77c5583ae99472dd4a49/1/en/default"
  },
  {
    id:2,
    title:"Daily Mix 2",
    desc:"Rauw Alejandro, Bad Bunny, ROSALÍA and more",
    img:"https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb406e7e811b29f3f03b00cbc8/2/en/default"
  },
  {
    id:3,
    title:"Daily Mix 3",
    desc:"Eminem, Pretty Ricky, Michael Trapson and more as das dad aaa aaaaa aaaa  aaaa aaaaaaa aaaaaa aaaaaa aa aaaaa aaaa aaa aaaaa",
    img:"https://dailymix-images.scdn.co/v2/img/ab6761610000e5eba00b11c129b27a88fc72f36b/3/en/default"
  },
  {
    id:4,
    title:"Daily Mix 4",
    desc:"Iggy Pop, Madness, Radiohead and more",
    img:"https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb21e6d14c3d8aab9887380d00/4/en/default"
  },
  {
    id:5,
    title:"Daily Mix 5",
    desc:"Post Malone, Calboy, Klondike Blonde and more",
    img:"https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb6be070445b03e0b63147c2c1/5/en/default"
  },
]


function Home() {
  return (
    <div className=' z-50 text-white bg-transparent px-6 pt-2 grid gap-y-8'>
      <Firstsec />
      <Section name="Made for Current User" data={data}/>
      <Section name="Your top mixes" data={data}/>
      <Section name="Recently played" data={data}/>
      <Section name="Based on your recent listening" data={data}/>
    </div>
  )
}

export default Home