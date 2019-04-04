import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard/main', title: 'Dashboard', icon: 'mdi mdi-chart-arc', class: '', label: '', labelClass: '', extralink: false, submenu: [],
  },
  {
    path: '/outlet/outlets', title: 'Restaurant', icon: 'mdi mdi-bullseye', class: '', label: '', labelClass: '', extralink: false, submenu: [],
  },
  {
    path: '/brand/users/list', title: 'Users', icon: 'mdi mdi-chart-arc', class: '', label: '', labelClass: '', extralink: false, submenu: [],
  },
  {
    path: '/brand/reports/list', title: 'Reports', icon: 'mdi mdi-chart-arc', class: '', label: '', labelClass: '', extralink: false, submenu: [],
  },
  {
    path:'/payment',title:'Payment',icon:'mdi mdi-chart-arc',class:'',label:'',labelClass:'',extralink:false,submenu:[]
  },

  {
    path: '', title: 'Settings', icon: 'mdi mdi-bullseye', class: 'has-arrow', label: '', labelClass: '', extralink: false,
    submenu: [
      { path: '/brand/brands/setting', title: 'Brand', icon: 'mdi mdi-widgets', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
      { path: '/brand/ad-banner/list', title: 'Ad Banner', icon: 'mdi mdi-widgets', class: '', label: '', labelClass: '', extralink: false, submenu: [] },
    ],
  },
];
