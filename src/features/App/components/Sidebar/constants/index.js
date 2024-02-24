import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';
import { colors } from 'constants/styles';

export const navigationLinks = [
  {
    title: 'Dashboard',
    href: '/main',
    icon: HomeOutlinedIcon,
    subItems: [
      {
        title: 'Analytics',
        href: '/main/analytics'
      },
      {
        title: 'Visits',
        href: '/main/visits'
      },
      {
        title: 'Widgets',
        href: '/main/widgets'
      }
    ]
  },
  {
    title: 'Users',
    subTitle: {
      text: 'Real App'
    },
    href: '/users',
    icon: PersonOutlineOutlinedIcon,
    subItems: [
      {
        title: 'User Management',
        href: '/users/management'
      },
      {
        title: 'My Profile',
        href: '/users/profile'
      },
      {
        title: 'Edit Profile',
        href: '/users/edit'
      },
      {
        title: 'Change Password',
        href: '/users/password'
      }
    ]
  },
  {
    title: 'Chat',
    subTitle: {
      text: 'Awesome',
      color: colors.blue.light
    },
    href: '/chat',
    icon: GroupOutlinedIcon
  },
  {
    title: 'E-commerce',
    subTitle: {
      text: 'NodeJs'
    },
    href: '/commerce',
    icon: StorefrontOutlinedIcon,
    subItems: [
      {
        title: 'Product Management',
        href: '/commerce/3'
      },
      {
        title: 'Products Grid',
        href: '/commerce/2'
      },
      {
        title: 'Product Page',
        href: '/commerce/1'
      }
    ]
  },
  {
    title: 'Sing Package',
    href: '/package',
    icon: CollectionsBookmarkOutlinedIcon
  }
];
