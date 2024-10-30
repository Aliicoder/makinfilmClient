import { BiSolidVideos } from "react-icons/bi";
import { Squircle} from "corner-smoothing"
import { MdPhotoLibrary } from "react-icons/md";
import LinkButton from "@/components/buttons/LinkButton";
import { FiArrowUpRight } from "react-icons/fi";
function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ">
      <Squircle cornerRadius={16} className="flex m-[6%] p-[6%] bg-[#d4d4d420] blur-[0.5px]">
        <div className="basis-1/4 flex justify-center items-center aspect-square p-[6%] rounded-full bg-[#D4D4D4] mr-[10%]">
          <BiSolidVideos className="c9 text-black" />
        </div>
        <div className="basis-3/4 flex justify-evenly">
          <div className="flex flex-col w-full  justify-evenly">
              <h1 className="font-semibold c8 md:c4">20</h1>
              <h1 className="font-semibold c8 md:c4">Videos</h1>
          </div>
          <div className="flex items-center">
            <LinkButton text="View" to={"/dashboard/videos"} direction={"right"}>
              <FiArrowUpRight />
            </LinkButton>
          </div>
        </div>
      </Squircle>
      <Squircle cornerRadius={16} className="flex m-[6%] p-[6%] bg-[#d4d4d420] blur-[0.5px]">
        <div className="basis-1/4 flex justify-center items-center aspect-square p-[6%] rounded-full bg-[#D4D4D4] mr-[10%]">
          <MdPhotoLibrary className="c9 text-black" />
        </div>
        <div className="basis-3/4 flex justify-evenly">
          <div className="flex flex-col w-full  justify-evenly">
              <h1 className="font-semibold c8 md:c4">20</h1>
              <h1 className="font-semibold c8 md:c4">Photos</h1>
          </div>
          <div className="flex items-center">
            <LinkButton text="View" to={"/dashboard/photos"} direction={"right"}>
              <FiArrowUpRight />
            </LinkButton>
          </div>
        </div>
      </Squircle>
    </div>
  )
}

export default Dashboard