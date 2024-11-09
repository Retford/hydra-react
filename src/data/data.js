import {
  BsFacebook,
  BsLinkedin,
  BsMessenger,
  BsShare,
  BsSnapchat,
  BsTwitterX,
  BsWhatsapp,
} from 'react-icons/bs';
import { RiLink } from 'react-icons/ri';
import { TfiEmail } from 'react-icons/tfi';

export const mainButtons = [
  {
    name: 'Menu',
    videoId: 'xXB86WbaNMA',
    image: '/Linktree.webp',
    subTitle: 'Linktree: Link everything you are',
    text: 'Linktree makes room for all of you. Get everything you create, curate and share, wherever it’s scattered online, and put it back together again in one place – your Linktree – where it can be discovered with ease.',
  },
  {
    name: 'Our recipes',
    url: 'www.youtube.com/watch?v=2Le29GzSz8I',
    videoId: 'pWZQAf1MLZU',
  },
  {
    name: 'Find Us',
    videoId: 'J7SbRZNmc90',
    image: '/Linktree.webp',
    subTitle: 'Linktree: Link everything you are',
    text: 'Linktree makes room for all of you. Get everything you create, curate and share, wherever it’s scattered online, and put it back together again in one place – your Linktree – where it can be discovered with ease.',
  },
];

export const iconsSocialNetworks = [
  { IconComponent: RiLink, label: 'Copy link' },
  { IconComponent: BsTwitterX, label: 'X' },
  { IconComponent: BsFacebook, label: 'Facebook' },
  { IconComponent: BsWhatsapp, label: 'WhatsApp' },
  { IconComponent: BsLinkedin, label: 'LinkedIn' },
  { IconComponent: BsMessenger, label: 'Messenger' },
  { IconComponent: BsSnapchat, label: 'Snapchat' },
  { IconComponent: TfiEmail, label: 'Email' },
  { IconComponent: BsShare, label: 'More' },
];
