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
  { name: 'Menu' },
  { name: 'Our recipes' },
  { name: 'Find Us' },
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
