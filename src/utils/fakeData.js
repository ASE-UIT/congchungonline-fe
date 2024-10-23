import { AddCircleOutline, DocumentScanner, Groups2Rounded, Search, Settings } from '@mui/icons-material';

export const services = [
  {
    title: 'Dịch vụ vay tài sản',
    description: 'Dịch vụ vay tài sản cho phép bạn vay tiền để mua tài sản mới.',
    href: '/create-notarization-profile',
  },
  {
    title: 'Dịch vụ mượn tài sản',
    description: 'Dịch vụ mượn tài sản cho phép bạn mượn tài sản để sử dụng ngắn hạn.',
    href: '/create-notarization-profile',
  },
  {
    title: 'Dịch vụ cho thuê tài sản',
    description: 'Dịch vụ cho thuê tài sản cho phép bạn thuê tài sản dài hạn.',
    href: '/create-notarization-profile',
  },
  {
    title: 'Dịch vụ cầm cố tài sản',
    description: 'Dịch vụ cầm cố cho phép bạn vay tiền bằng cách cầm cố tài sản.',
    href: '/create-notarization-profile',
  },
  {
    title: 'Dịch vụ mua bán tài sản',
    description: 'Dịch vụ mua bán tài sản giúp bạn mua và bán tài sản an toàn.',
    href: '/create-notarization-profile',
  },
];

export const sidebarItems = [
  {
    type: 'create-notarization-profile',
    title: 'Tạo hồ sơ công chứng',
    href: '/notarization',
    icon: <AddCircleOutline />,
  },
  {
    type: 'history',
    title: 'Lịch sử',
    href: '/history',
    icon: <DocumentScanner />,
  },
  {
    type: 'create-notarization-session',
    title: 'Tạo phiên công chứng',
    href: '/create-notarization-session',
    icon: <Groups2Rounded />,
  },
  {
    type: 'settings',
    title: 'Cài đặt',
    href: '/settings',
    icon: <Settings />,
  },
];
