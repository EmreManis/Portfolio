import Image from "next/image";

import alparslan_kulakac from "../public/alparslan_kulakac.jpg";

const Spear = () => {
  return (
    <div>
      <Image src={alparslan_kulakac} alt="spearfishing" />
    </div>
  );
};

export default Spear;
