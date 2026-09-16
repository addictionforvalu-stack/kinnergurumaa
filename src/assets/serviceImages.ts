import imgExLoveBack from './services/photo_6147413831123146518_x.jpg';
import imgBreakup from './services/photo_6147413831123146519_y.jpg';
import imgIntercaste from './services/photo_6147413831123146520_x.jpg';
import imgDivorce from './services/photo_6147413831123146521_x.jpg';
import imgLoveMarriage from './services/photo_6147413831123146522_x.jpg';
import imgMarriageProblem from './services/photo_6147413831123146523_x.jpg';
import imgHusbandWife from './services/photo_6147413831123146524_x.jpg';
import imgLoveProblem from './services/photo_6147413831123146525_x.jpg';
import imgGetLoveBack from './services/photo_6147413831123146526_x.jpg';

export const USER_SERVICE_IMAGES: Record<string, string> = {
  'get-your-ex-love-back': imgExLoveBack,
  'breakup-problem-solution': imgBreakup,
  'intercast-marriage-solution': imgIntercaste,
  'divorce-problem-solution': imgDivorce,
  'love-marriage-solution': imgLoveMarriage,
  'marriage-problem-solution': imgMarriageProblem,
  'husband-wife-solution': imgHusbandWife,
  'love-problem-solution': imgLoveProblem,
  'get-your-love-back': imgGetLoveBack,
};

export const PUBLIC_SERVICE_FALLBACKS: Record<string, string> = {
  'get-your-ex-love-back': '/services/photo_6147413831123146518_x.jpg',
  'breakup-problem-solution': '/services/photo_6147413831123146519_y.jpg',
  'intercast-marriage-solution': '/services/photo_6147413831123146520_x.jpg',
  'divorce-problem-solution': '/services/photo_6147413831123146521_x.jpg',
  'love-marriage-solution': '/services/photo_6147413831123146522_x.jpg',
  'marriage-problem-solution': '/services/photo_6147413831123146523_x.jpg',
  'husband-wife-solution': '/services/photo_6147413831123146524_x.jpg',
  'love-problem-solution': '/services/photo_6147413831123146525_x.jpg',
  'get-your-love-back': '/services/photo_6147413831123146526_x.jpg',
};

export const getServiceImage = (serviceId: string, fallbackUrl?: string): string => {
  return USER_SERVICE_IMAGES[serviceId] || PUBLIC_SERVICE_FALLBACKS[serviceId] || fallbackUrl || '';
};
