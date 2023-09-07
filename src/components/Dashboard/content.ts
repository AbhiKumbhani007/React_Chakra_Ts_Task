import laptopLogo from "../../icons/laptop.svg";
import dataStoreLogo from "../../icons/db.svg";
import connectLogo from "../../icons/connect.svg";
import docsLogo from "../../icons/documentation.svg";
import clusterLogo from "../../icons/cluster.svg";
import { dashboardCard1, dashboardCard2, dashboardCard3, dashboardCard4, dashboardCard5, dashboardCardText } from "../../constants/colors";

const contentArray = [
  {
    id: 1,
    title: "New App",
    bgColour: dashboardCard1,
    textColour: dashboardCardText,
    btnText: "Create App",
    logo: laptopLogo,
    span: 1,
    description:
      "Get started on building your app! Provide the details to begin the creation process. Our platform will generate the structure for your functional app aligned with your vision.",
  },
  {
    id: 2,
    title: "New Cluster",
    bgColour: dashboardCard2,
    textColour: dashboardCardText,
    btnText: "Create Cluster",
    logo: clusterLogo,
    span: 1,
    description:
      "Set up a scalable computing environment! Create a cluster for optimal performance, availability, and scalability. Handle traffic, respond faster, and scale effortlessly.",
  },
  {
    id: 3,
    title: "New Datastore",
    bgColour: dashboardCard3,
    textColour: dashboardCardText,
    btnText: "Create Datastore",
    logo: dataStoreLogo,
    span: 1,
    description:
      "Establish secure storage for your app's data. Create a datastore for managing critical information. Ensure integrity and accessibility for reliable app services.",
  },
  {
    id: 4,
    title: "Connect",
    bgColour: dashboardCard4,
    textColour: dashboardCardText,
    btnText: "Create Cluster",
    logo: connectLogo,
    span: 2,
    description: "Connect to your favourite Repositories wherever they are.",
  },
  {
    id: 4,
    title: "Documentation",
    bgColour: dashboardCard5,
    textColour: dashboardCardText,
    btnText: "View Docs",
    logo: docsLogo,
    span: 1,
    description:
      "Establish secure storage for your app's data. Create a datastore for managing critical information. Ensure integrity and accessibility for reliable app services.",
  },
];

export default contentArray;
