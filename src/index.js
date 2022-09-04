import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import Navigation from './Navigation';
import Carousel from './Carousel';
import Marketing from './Marketing';
import Footer from './Footer'





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<StrictMode>
<Navigation />,
<Carousel />,
<Marketing />,
<Footer />
</StrictMode>
);


