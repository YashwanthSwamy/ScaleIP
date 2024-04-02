import React from 'react';
import { FiBarChart } from 'react-icons/fi';
import { BsBoxSeam } from 'react-icons/bs';
import { RiProfileFill } from "react-icons/ri";
import { IoCalendar } from "react-icons/io5";
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { FaThList } from "react-icons/fa";

export const links = [
  {
    name: 'MyList',
    icon: <FaThList />,
  },
  {
    name: 'calendar',
    icon: <IoCalendar />,
  },
  {
    name: 'profile',
    icon: <RiProfileFill />,
  },
];

export const companyList = [
  {
    id: '61b0cf293b74070001103a04',
    name: 'Bio Data Bridges',
    logo_url: 'https://zenprospect-production.s3.amazonaws.com/uploads/pictures/5fee1ca2f0a04300017a8f09/picture',
    website_url: 'http://www.biodatabridges.com',
    city: 'Seattle, Washington'
  },
  {
    id: '556949ad7369642161fb2900',
    name: 'BioAnalytics, Inc.',
    logo_url: 'https://zenprospect-production.s3.amazonaws.com/uploads/pictures/6550ef4c242f16000146d4a8/picture',
    website_url: 'http://www.bioanalyticsystems.com',
    city: 'Seattle, Washington'
  },
  {
    id: '54a1346b69702d48e2cd0900',
    name: 'CheckOrphan',
    logo_url: 'https://zenprospect-production.s3.amazonaws.com/uploads/pictures/63bc4e5b537af90001d14c25/picture',
    website_url: 'http://www.checkorphan.org',
    city: 'Seattle, Washington'
  },
  {
    id: '5e5679c1b6ef2f00012cf6e9',
    name: 'CrystalsFirst',
    logo_url: 'https://zenprospect-production.s3.amazonaws.com/uploads/pictures/654a93dc10455c00012b1db3/picture',
    website_url: 'http://www.crystalsfirst.com',
    city: 'Seattle, Washington'
  },
  {
    id: '61ec3e19111ee30001f5aec0',
    name: 'LifeSci Consulting',
    logo_url: 'https://zenprospect-production.s3.amazonaws.com/uploads/pictures/655de6bbc7049000013bad63/picture',
    website_url: 'http://www.lifesciconsulting.com',
    city: 'Seattle, Washington'
  },
  {
    id: '60116f8ba7177900e8acbd48',
    name: 'LumenAstra',
    logo_url: 'https://zenprospect-production.s3.amazonaws.com/uploads/pictures/654a7cadfbca6d0001f8a295/picture',
    website_url: 'http://www.lumenastra.io',
    city: 'Seattle, Washington'
  },
  {
    id: '63923f421f5b8800013c14b1',
    name: 'CoALA Biosciences',
    logo_url: '',
    website_url: 'http://www.coalabio.com',
    city: 'Seattle, Washington'
  }
]

export const companyDetailList = [
  {
    id: '61b0cf293b74070001103a04',
    name: 'Bio Data Bridges',
    logo_url: 'https://zenprospect-production.s3.amazonaws.com/uploads/pictures/5fee1ca2f0a04300017a8f09/picture',
    website_url: 'http://www.biodatabridges.com',
    linkedin_url: '',
    twitter_url: 'https://twitter.com/BioDataBridges',
    facebook_url: '',
    angellist_url: '',
    founded_year: '',
    publicly_traded_symbol: '',
    publicly_traded_exchange: '',
    alexa_ranking: '',
    industry: '',
    estimated_num_employees: '',
    raw_address: '815 1st Ave 178, Seattle, Washington, USA, 98104',
    short_description: '',
    annual_revenue_printed: '',
    total_funding_printed: '',
    last_funding_round: '',
    keywords: []
  },
  {
    id: '556949ad7369642161fb2900',
    name: 'BioAnalytics, Inc.',
    logo_url: 'https://zenprospect-production.s3.amazonaws.com/uploads/pictures/6550ef4c242f16000146d4a8/picture',
    website_url: 'http://www.bioanalyticsystems.com',
    linkedin_url: 'http://www.linkedin.com/company/bioanalytics-inc-',
    twitter_url: 'https://twitter.com/BioAnalyticsInc',
    facebook_url: 'https://facebook.com/bioanalyticsinc',
    angellist_url: '',
    founded_year: '2012',
    publicly_traded_symbol: '',
    publicly_traded_exchange: '',
    alexa_ranking: '',
    industry: 'research',
    estimated_num_employees: '10',
    raw_address: '60 Hazelwood Drive, Champaign, Illinois, USA, 61820',
    short_description: 'BioAnalytics is an early-stage biotechnology company focused on designing the next generation of immunoassay technology. BioAnalytics concentrates on improving test speed, sensitivity, and fidelity in order to further academic research, pharmaceutical development, clinical laboratory sample analysis, and medical point-of-care diagnostics.',
    annual_revenue_printed: '7.0M',
    total_funding_printed: '',
    last_funding_round: '',
    keywords: []
  },
  {
    id: '54a1346b69702d48e2cd0900',
    name: 'CheckOrphan',
    website_url: 'http://www.checkorphan.org',
    angellist_url: '',
    linkedin_url: 'http://www.linkedin.com/company/checkorphan',
    twitter_url: 'https://twitter.com/CheckOrphan',
    facebook_url: 'https://www.facebook.com/CheckOrphan',
    alexa_ranking: '',
    founded_year: '2007',
    publicly_traded_symbol: '',
    publicly_traded_exchange: '',
    logo_url: 'https://zenprospect-production.s3.amazonaws.com/uploads/pictures/63bc4e5b537af90001d14c25/picture',
    industry: 'online media',
    estimated_num_employees: '5',
    raw_address: '105 Esmeralda Ct., Santa Cruz, CA 95060, US',
    short_description: 'CheckOrphan is a dynamic and interactive platform dedicated to people working with or affected by rare, orphan or neglected diseases. The mission of CheckOrphan is to provide all the news about rare diseases and consolidate additional key information about rare disease and orphan products to better educate, unite and empower people affected by and working with rare diseases, to increase communication and understanding, and to hasten the development of treatments and cures. CheckOrphan is a 501(c)(3) nonprofit organization. Contributions to CheckOrphan in the United States and Switzerland are tax-exempt to the extent provided by law.',
    annual_revenue_printed: '3.7M',
    total_funding_printed: '',
    last_funding_round: '',
    keywords: ["orphan diseases", "orphan products", "rare diseases", "neglected diseases"]
  },
  {
    id: '5e5679c1b6ef2f00012cf6e9',
    name: 'CrystalsFirst',
    website_url: 'http://www.crystalsfirst.com',
    angellist_url: '',
    linkedin_url: 'http://www.linkedin.com/company/crystalsfirst',
    twitter_url: 'https://twitter.com/CheckOrphan',
    facebook_url: 'https://www.facebook.com/CheckOrphan',
    alexa_ranking: '',
    founded_year: '2018',
    publicly_traded_symbol: '',
    publicly_traded_exchange: '',
    logo_url: 'https://zenprospect-production.s3.amazonaws.com/uploads/pictures/654a93dc10455c00012b1db3/picture',
    industry: 'research',
    estimated_num_employees: '50',
    raw_address: '',
    short_description: 'Our mission is to provide the worlds most advanced platform to unlock chemical matter and help to bring the most innovative medicines to patients.',
    annual_revenue_printed: '',
    total_funding_printed: '',
    last_funding_round: '',
    keywords: ["drug discovery", "lead discovery", "hit finding", "structural biology", "fragmentbased drug discovery", "library design", "fragmentbased lead discovery", "crystallography", "lead optimization"]
  },
  {
    id: '61ec3e19111ee30001f5aec0',
    name: 'LifeSci Consulting',
    website_url: 'http://www.lifesciconsulting.com',
    angellist_url: '',
    linkedin_url: 'http://www.linkedin.com/company/lifesci-consulting-llc',
    twitter_url: 'https://twitter.com/corsicalsc',
    facebook_url: 'https://www.facebook.com/wordpress.slider.revolution',
    alexa_ranking: '',
    founded_year: '2018',
    publicly_traded_symbol: 'CCC',
    publicly_traded_exchange: 'nyse',
    logo_url: 'https://zenprospect-production.s3.amazonaws.com/uploads/pictures/655de6bbc7049000013bad63/picture',
    industry: 'management consulting',
    estimated_num_employees: '200',
    raw_address: '250 west 55th street, new york, new york, united states',
    short_description: 'LifeSci Consulting is a global strategy, operations, and transaction advisory firm serving clients across the life sciences industry. We are specialized in solving the most significant challenges faced by life science companies at each stage of their life-cycle and laser-focused on delivering real value. LifeSci Consulting leverages deep scientific acumen to assess commercial potential and positioning as well as to inform commercial strategy and market access. We partner with our clients to transform core business operations to maximize operational and organizational efficiencies. The firms transaction advisory practice focuses on securing non-dilutive capital and assets for clients through buy-side and sell-side strategic partnering transactions.',
    annual_revenue_printed: '3.4M',
    total_funding_printed: '',
    last_funding_round: '',
    keywords: []
  },
];

export const SparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },
];

export const earningData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: '39,354',
    percentage: '-4%',
    title: 'Customers',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
    pcColor: 'red-600',
  },
  {
    icon: <BsBoxSeam />,
    amount: '4,396',
    percentage: '+23%',
    title: 'Products',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
    pcColor: 'green-600',
  },
  {
    icon: <FiBarChart />,
    amount: '423,39',
    percentage: '+38%',
    title: 'Sales',
    iconColor: 'rgb(228, 106, 118)',
    iconBg: 'rgb(255, 244, 229)',

    pcColor: 'green-600',
  },
  {
    icon: <HiOutlineRefresh />,
    amount: '39,354',
    percentage: '-12%',
    title: 'Funding',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
    pcColor: 'red-600',
  },
];

export const stackedChartData = [
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
    { x: 'Apr', y: 159.9 },
    { x: 'May', y: 159.9 },
    { x: 'Jun', y: 159.9 },
    { x: 'July', y: 159.9 },
  ],
];

export const stackedCustomSeries = [

  {
    dataSource: stackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Profits',
    type: 'StackingColumn',
    background: 'blue',

  },

  {
    dataSource: stackedChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Expense',
    type: 'StackingColumn',
    background: 'red',

  },
];

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};