import { useRef } from "react";
import Card from "./Card";
const datas = [
    {
        desc: "This is the background",
        fileSize: "0.8mb",
        isClosed: false,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
        desc: "This is the background",
        fileSize: "0.8mb",
        isClosed: true,
        tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
    {
        desc: "This is the background",
        fileSize: "0.8mb",
        isClosed: false,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
];


const Foreground = () => {
    const ref = useRef(null)
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 p-5 flex-wrap">
        {datas.map((item,i)=>(
            <Card key={i} data={item} reference={ref}/>
        ))}
    </div>
  );
};

export default Foreground;
