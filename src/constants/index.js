import homeIcon from "assets/images/icons/Group 46.png";
import watchLaterIcon from "assets/images/icons/Group 47.png";
import genresIcon from "assets/images/icons/Group 53.png";
import moviesIcon from "assets/images/icons/Group 54.png";
import tvShowsIcon from "assets/images/icons/Group 56.png";
import searchIcon from "assets/images/icons/ICON - Search.png";

export const USER_NAME = "Daniel";

export const SIDEBAR_MENU = [
  {
    id: 1,
    name: "search",
    icon: searchIcon,
  },
  {
    id: 2,
    name: "home",
    icon: homeIcon,
  },
  {
    id: 3,
    name: "tv shows",
    icon: tvShowsIcon,
  },
  {
    id: 4,
    name: "movies",
    icon: moviesIcon,
  },
  {
    id: 5,
    name: "genres",
    icon: genresIcon,
  },
  {
    id: 6,
    name: "watch later",
    icon: watchLaterIcon,
  },
]

export const SETTINGS = [
  {
    id: 1,
    name: "language",
  },
  {
    id: 2,
    name: "get help",
  },
  {
    id: 3,
    name: "exit",
  },
];

export const PLAY = "play";
export const PAUSE = "pause";
export const MORE_INFO = "more info";
export const TRENDING_NOW = "trending now";