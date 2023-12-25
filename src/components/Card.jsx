import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data , reference}) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{scale:1.050}}
      dragElastic={0.1}
      dragTransition={{bounceStiffness:100,bounceDamping:100}}
      className="flex-shrink-0 relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 py-3 mb-2">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center cursor-pointer ">
            {data.isClosed ? (
              <IoClose size=".7em" color="#000" />
            ) : (
              <LuDownload size=".7em" color="#000" />
            )}
          </span>
        </div>

        {data?.tag?.isOpen && (
          <div
            className={`tag ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } py-4 flex justify-center items-center`}
          >
            <h3 className="text-sm font-semibold cursor-pointer">
              {data.tag.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
