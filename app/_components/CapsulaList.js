import {unstable_noStore as noStore} from "next/cache";
import CapsulaCard from "./CapsulaCard";
import { getCabins } from "../_lib/data_service";

async function CapsulaList(){
  noStore();
    const cabins = await getCabins();

    if(!cabins.length) return null;
    return ( 
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
        {cabins.map((cabin) => (
          <CapsulaCard cabin={cabin} key={cabin.id} />
        ))}
      </div>
      );
}

export default CapsulaList;