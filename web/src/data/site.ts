import homeScreen from '../assets/screens/home.png';
import pitsScreen from '../assets/screens/pits.png';
import syncScreen from '../assets/screens/sync.png';

export const links = {
  github: 'https://github.com/FIRST1939/Scout-a-lot',
  docs: 'https://docs.scoutalot.com',
  team: 'https://www.frcteam1939.com/',
  blueAlliance: 'https://www.thebluealliance.com/',
};

export const screenshots = [
  {
    name: 'Match setup',
    image: homeScreen,
    alt: 'Scout a Lot home screen with the current event, match number, and assigned team.',
  },
  {
    name: 'Pit scouting',
    image: pitsScreen,
    alt: 'Scout Pits screen listing teams with complete, incomplete, and not started statuses.',
  },
  {
    name: 'Data sync',
    image: syncScreen,
    alt: 'Bluetooth sync screen with paired devices and buttons to send pit and match data.',
  },
];

export const features = [
  {
    title: 'Match scouting',
    description: "Record each robot's performance as the match plays out.",
    icon: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 11h6M9 15h6"/>',
  },
  {
    title: 'Pit scouting',
    description: 'Capture robot details directly from teams in the pits.',
    icon: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6Z"/>',
  },
  {
    title: 'Custom forms',
    description: "Build your own forms to fit each season's game.",
    icon: '<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',
  },
  {
    title: 'Bluetooth and file sync',
    description: 'Move data between devices without relying on venue Wi-Fi.',
    icon: '<path d="m7 7 10 10-5 5V2l5 5L7 17"/>',
  },
  {
    title: 'Team stats',
    description: 'See how each team performs across an event.',
    icon: '<path d="M3 3v18h18M8 17v-7M13 17V6M18 17v-4"/>',
  },
  {
    title: 'Match reports',
    description: 'Prepare for upcoming matches with reports built from your data.',
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6M8 13h8M8 17h8"/>',
  },
];

export const availability = [
  { name: 'GitHub', status: 'Available now', available: true },
  { name: 'Google Play and docs', status: 'December 2026', available: false },
  { name: 'iOS', status: 'Date to be announced', available: false },
];
