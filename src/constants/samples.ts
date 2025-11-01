import sample1 from "../assets/videos/sample1.mp4";
import sample7 from "../assets/videos/sample7.mp4";
import sample8 from "../assets/videos/sample8.mp4";
import sample9 from "../assets/videos/sample9.mp4";

import sample1Thumb from "../assets/thumbnails/sample1.png";
import sample8Thumb from "../assets/thumbnails/sample8.png";
import sample7Thumb from "../assets/thumbnails/sample7.png";
import sample9Thumb from "../assets/thumbnails/sample9.png";

import { InstagramIcon, TikTokIcon } from "../icons";

export default [
  {
    url: sample1,
    icon: sample1Thumb,
    links: [
      {
        icon: InstagramIcon,
        url: "https://www.instagram.com/reel/DP_k17mE9JX/?igsh=cmtlZGs0aTBqNXhz",
      },
    ],
    className: "left",
  },
  {
    url: sample7,
    icon: sample7Thumb,
    links: [
      {
        icon: TikTokIcon,
        url: "https://vt.tiktok.com/ZSy2yaxuU/",
      },
    ],
    className: "bottom",
  },
  { url: sample8, icon: sample8Thumb, className: "right" },
  {
    url: sample9,
    icon: sample9Thumb,
    links: [
      {
        icon: TikTokIcon,
        url: "https://vt.tiktok.com/ZSy2Qk9Ms/",
      },
    ],
    className: "top",
  },
].map((item, i) => ({
  ...item,
  id: i,
  links: item.links || [],
}));
