import { useLocation } from 'react-router-dom';

const pageTitlesMap = {
    '/about': 'ABOUT US',
    '/reviews': 'REVIEWS',
    '/contact-us': 'CONTACT US',
    '/gallery': 'GALLERY',
};

export const usePageTitle = () => {
    const location = useLocation();
    return pageTitlesMap[location.pathname] || null;
};
