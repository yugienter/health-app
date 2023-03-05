import { NavType } from "../types/Header/types";

import MEMO from "../assets/icons/icon_memo.svg";
import CHALLENGE from "../assets/icons/icon_challenge.svg";
import INFO from "../assets/icons/icon_info.svg";

export const NavList: NavType[] = [
  {
    path: "/myrecord",
    title: "自分の記録",
    active: "myrecord",
    icon: MEMO,
  },
  {
    path: "#",
    title: "チャレンジ",
    active: "challenge",
    icon: CHALLENGE,
  },
  {
    path: "#",
    title: "お知らせ",
    active: "news",
    icon: INFO,
  },
];
