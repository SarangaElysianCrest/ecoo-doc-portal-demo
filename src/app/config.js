import ComapyregIcon from "../assets/images/DashboardIcons/ComapyregIcon.png";
import EcooImage from "../assets/images/DashboardIcons/ecooImage.png";
import TrqqcIcon from "../assets/images/DashboardIcons/trqqcIcon.png";
import prifileIcon from "../assets/images/DashboardIcons/prifileIcon.png";
import logOutIcon from "../assets/images/DashboardIcons/logOutIcon.png";

const config = {
  drawer: [
    {
      icon: ComapyregIcon,
      label: "COMP. REG.",
      path: "/web/companyRegistration",
    },
    {
      icon: EcooImage,
      label: "ECoO",
      path: "/web/ecoo",
    },
    {
      icon: TrqqcIcon,
      label: "TRQC",
      path: "/web/trqc",
    },
    {
      icon: prifileIcon,
      label: "PROFILE",
      path: "/web/profile",
    },
    {
      icon: logOutIcon,
      label: "LOG OUT",
      path: "",
    },
    // {
    //   icon: "",
    //   label: "M5",
    //   path: "/web/shop",
    //   path2: "/web/shops/",
    // },
  ],
};

export default config;