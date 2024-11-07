import {
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon,
  CurrencyDollarIcon,
  DeviceTabletIcon,
  HomeIcon,
  NewspaperIcon,
  PhoneIcon,
  PlayCircleIcon,
  PresentationChartBarIcon,
  QuestionMarkCircleIcon,
  RectangleStackIcon,
  ServerStackIcon,
  Square2StackIcon,
  TicketIcon,
  TvIcon,
  WindowIcon,
} from '@heroicons/react/24/solid'
import { Home } from '@/pages/dashboard'
import { SignIn, SignUp } from '@/pages/auth'
import Stories from '@/pages/dashboard/stories'
import Tariffs from '@/pages/dashboard/tariffs/index.jsx'
import Categories from '@/pages/dashboard/categories/index.jsx'
import NavigationCards from '@/pages/dashboard/cards/index.jsx'
import News from '@/pages/dashboard/news/index.jsx'
import Chat from '@/pages/dashboard/chat/main/index.jsx'
import Devices from '@/pages/dashboard/devices/index.jsx'
import CallBackRequests from '@/pages/dashboard/requests/callBackRequst/index.jsx'
import TVChannels from '@/pages/dashboard/tvChannels/index.jsx'
import Offices from '@/pages/dashboard/offices/index.jsx'
import Banners from '@/pages/dashboard/banners/index.jsx'
import FAQs from '@/pages/dashboard/FAQ/index.jsx'
import Services from '@/pages/dashboard/services/index.jsx'
import FAQChat from '@/pages/dashboard/chat/FAQ/index.jsx'

const icon = {
  className: 'w-5 h-5 text-inherit',
}

export const routes = [
  {
    layout: 'dashboard',
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: 'dashboard',
        id: 'dashboard',
        path: '/home',
        element: <Home />,
      },
      {
        icon: <PlayCircleIcon {...icon} />,
        name: 'Истории',
        id: 'Истории',
        path: '/stories',
        element: <Stories />,
      },
      {
        icon: <Square2StackIcon {...icon} />,
        name: 'Навигационные карты',
        id: 'Навигационные карты',
        path: '/navigation-cards',
        element: <NavigationCards />,
      },
      {
        icon: <CurrencyDollarIcon {...icon} />,
        name: 'Категории',
        id: 'Категории',
        path: '/catalogs',
        element: <Categories />,
      },
      {
        icon: <TicketIcon {...icon} />,
        name: 'Тарифы',
        id: 'Тарифы',
        path: '/tariffs',
        element: <Tariffs />,
      },

      {
        icon: <NewspaperIcon {...icon} />,
        name: 'Новости',
        id: 'news',
        path: '/news',
        element: <News />,
      },

      {
        icon: <DeviceTabletIcon {...icon} />,
        name: 'Устройства',
        id: 'devices',
        path: '/devices',
        element: <Devices />,
      },
      {
        icon: <TvIcon {...icon} />,
        name: 'Цифровое ТВ',
        id: 'channels',
        path: '/channels',
        element: <TVChannels />,
      },
      {
        icon: <WindowIcon {...icon} />,
        name: 'Баннеры',
        id: 'banner',
        path: '/banner',
        element: <Banners />,
      },
      {
        icon: <BuildingOfficeIcon {...icon} />,
        name: 'Офисы',
        id: 'offices',
        path: '/offices',
        element: <Offices />,
      },
      {
        icon: <QuestionMarkCircleIcon {...icon} />,
        name: 'FAQ',
        id: 'faqs',
        path: '/faqs',
        element: <FAQs />,
      },
      {
        icon: <PresentationChartBarIcon {...icon} />,
        name: 'Services',
        id: 'services',
        path: '/services',
        element: <Services />,
      },

      {
        icon: <ChatBubbleLeftRightIcon {...icon} />,
        name: 'Чат',
        id: 'chat-common',
        children: [
          {
            icon: <ChatBubbleLeftRightIcon {...icon} />,
            name: 'чат пользователей',
            id: 'chat',
            path: '/chat',
            element: <Chat />,
          },
          {
            icon: <QuestionMarkCircleIcon {...icon} />,
            name: 'FAQ',
            id: 'chat-faqs',
            path: '/chat-faqs',
            element: <FAQChat />,
          },
        ],
      },
      {
        icon: <NewspaperIcon {...icon} />,
        name: 'Заявки',
        id: 'Заявки',
        children: [
          {
            icon: <PhoneIcon {...icon} />,
            name: 'Запросы вызова',
            id: 'Запросы вызова',
            path: '/call-back-requests',
            element: <CallBackRequests />,
          },
        ],
      },
    ],
  },
  {
    title: 'auth pages',
    layout: 'auth',
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: 'sign in',
        path: '/sign-in',
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: 'sign up',
        path: '/sign-up',
        element: <SignUp />,
      },
    ],
  },
]

export default routes
