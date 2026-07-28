import { memo, lazy, Suspense } from 'react';
import Hero from '../components/Hero.jsx';
import StatsStrip from '../components/StatsStrip.jsx';
import LazySection from '../components/LazySection.jsx';
import { Helmet } from "react-helmet-async";

const Workflow = lazy(() => import('../components/Workflow.jsx'));
const Services = lazy(() => import('../components/Services.jsx'));
const Gallery = lazy(() => import('../components/Gallery.jsx'));
const Testimonials = lazy(() => import('../components/Testimonials.jsx'));
const WebsitePlans = lazy(() => import('../components/WebsitePlans.jsx'));

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
                <LazySection>
                    <Suspense fallback={<div className="h-64" />}>
                        <Workflow />
                    </Suspense>
                </LazySection>
                <LazySection>
                    <Suspense fallback={<div className="h-64" />}>
                        <Services />
                    </Suspense>
                </LazySection>
                <LazySection>
                    <Suspense fallback={<div className="h-64" />}>
                        <Gallery />
                    </Suspense>
                </LazySection>
            </div>
            
            <LazySection>
                <Suspense fallback={<div className="h-64" />}>
                    <WebsitePlans />
                </Suspense>
            </LazySection>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <LazySection>
                    <Suspense fallback={<div className="h-64" />}>
                        <Testimonials />
                    </Suspense>
                </LazySection>
            </div>
        </div>
    );
}

export default memo(Home);
