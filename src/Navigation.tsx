import { OurOperation } from './Pages/OurOperation';
import { Stakhanovite } from './Pages/Stakhanovite';
import { What } from './Pages/What';
import { Who } from './Pages/Who';
import { WhyUs } from './Pages/WhyUs';
import { Faq } from './Faq';

export const items = {
  '/': {title: "Stakhanovite", element: Stakhanovite},
  '/what': {title: "What", element: What},
  '/who': {title: "Who", element: Who},
  '/why-us': {title: "Why Us", element: WhyUs},
  '/our-operation': {title: "Our Operation", element: OurOperation},
  '/faq': {title: "FAQ", element: Faq}
}