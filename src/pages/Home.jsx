import Hero from '../components/Hero.jsx';
import StatsStrip from '../components/StatsStrip.jsx';
import Workflow from '../components/Workflow.jsx';
import Services from '../components/Services.jsx';
import Gallery from '../components/Gallery.jsx';
import Testimonials from '../components/Testimonials.jsx';
import { Helmet } from "react-helmet-async";

function Home() {
    return (
        <div>
        <Helmet>
        <title>NG Stellar - Transforming Business Through Innovation</title>
        <meta
          name="description"
          content="NG Stellar provides modern web development, React, and digital solutions. Transforming Business Through Innovation."
        />
        <meta
          name="keywords"
          content="Web Development, React, Software Company India, Digital Transformation, Business Solutions, NG Stellar"
        />
        <link rel="canonical" href="https://ngstellar.com/" />
        </Helmet>

            <Hero />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <StatsStrip />
                <Workflow />
                <Services />
                <Gallery />
                <Testimonials />
            </div>
        </div>
    );
}

export default Home;
