import heartIcon from "../assets/media-assets/Cast Details/Icons/PNG/Status.png";

import speciesIcon from "../assets/media-assets/Cast Details/Icons/PNG/Species.png";

import genderIcon from "../assets/media-assets/Cast Details/Icons/PNG/Gender.png";

import LocationIcon from "../assets/media-assets/Cast Details/Icons/PNG/Location.png";

import originIcon from "../assets/media-assets/Cast Details/Icons/PNG/origin.png";

import RedirectIcon from "../assets/media-assets/Cast Details/Icons/PNG/Redirect.png";

// character details data
export const characterDetails = [
  { id: 1, icon: heartIcon, statusName: "Status", statusValue: "Alive" },
  { id: 2, icon: speciesIcon, statusName: "Species", statusValue: "Human" },

  { id: 3, icon: genderIcon, statusName: "Gender", statusValue: "Male" },
];

// charcter more infos

export const moreInfos = [
  {
    id: 1,
    icon: originIcon,
    title: "Origin",
    subTitle: "Earth(c-137)",
    redirectIcon: RedirectIcon,
  },
  {
    id: 2,
    icon: LocationIcon,
    title: "Last Known Location",
    subTitle: "Citadel of Ricks",
    redirectIcon: RedirectIcon,
  },
];
