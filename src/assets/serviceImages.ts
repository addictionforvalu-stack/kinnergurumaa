import imgExLoveBack from './services/photo_6147413831123146504_y.jpg';
import imgBreakup from './services/photo_6147413831123146505_y.jpg';
import imgIntercaste from './services/photo_6147413831123146506_y.jpg';
import imgDivorce from './services/photo_6147413831123146507_y.jpg';
import imgLoveMarriage from './services/photo_6147413831123146508_y.jpg';
import imgMarriageProblem from './services/photo_6147413831123146509_y.jpg';
import imgHusbandWife from './services/photo_6147413831123146510_y.jpg';
import imgLoveProblem from './services/photo_6147413831123146511_y.jpg';
import imgGetLoveBack from './services/photo_6147413831123146512_y.jpg';

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

export const getServiceImage = (serviceId: string, fallbackUrl?: string): string => {
  return USER_SERVICE_IMAGES[serviceId] || fallbackUrl || '';
};
