import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectsData } from '../../data/projects';
import { getImg } from '../../utils/images';
import { MdArrowBack, MdLocationOn, MdAttachMoney, MdAccessTime, MdSquareFoot } from 'react-icons/md';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pt-32 pb-20 text-center max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-text-primary">Project Not Found</h2>
        <p className="text-text-secondary mt-2 mb-6">The project you are looking for does not exist or has been removed from the portfolio database.</p>
        <Link to="/projects" className="px-5 py-2.5 bg-primary text-white font-bold rounded-lg shadow">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full pt-24 text-left">
      {/* Back to Projects banner link */}
      <div className="bg-slate-50 border-b border-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-primary/80 transition-colors">
            <MdArrowBack />
            <span>Back to Projects</span>
          </Link>
        </div>
      </div>

      {/* Main Details */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content Info */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            <div>
              <span className="text-xs font-extrabold text-primary uppercase tracking-widest bg-primary/10 px-2.5 py-1 rounded">
                {project.category}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-text-primary mt-3 mb-4 tracking-tight">
                {project.title}
              </h1>
              <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                {project.longDesc}
              </p>
            </div>

            {/* Image Showcase */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.detailImages?.map((img, index) => (
                <img
                  key={index}
                  src={getImg(img)}
                  alt={`${project.title} detailed snapshot ${index + 1}`}
                  className="rounded-xl w-full object-cover h-64 shadow-md border border-border"
                />
              ))}
            </div>

            {/* Challenges & Solutions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-border">
              <div>
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-red-600 mb-2">The Challenges</h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{project.challenges}</p>
              </div>
              <div className="border-l-0 sm:border-l border-border pl-0 sm:pl-6 pt-6 sm:pt-0">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-green-700 mb-2">Our Solutions</h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">{project.solutions}</p>
              </div>
            </div>

            {/* Outcome */}
            <div>
              <h3 className="text-base font-extrabold text-text-primary mb-3">Project Outcome & Value Delivered</h3>
              <p className="text-sm text-text-secondary leading-relaxed bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                {project.outcome}
              </p>
            </div>
          </div>

          {/* Sidebar Metrics and Timelines */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Metrics Box */}
            <div className="p-6 bg-secondary text-white rounded-2xl border-l-4 border-primary shadow-lg">
              <h3 className="text-base font-bold mb-5 border-b border-white/10 pb-3">Project Metrics</h3>
              
              <div className="flex flex-col gap-4 text-xs">
                <div className="flex items-center gap-3">
                  <MdLocationOn className="text-primary text-xl" />
                  <div>
                    <span className="block text-slate-400 font-medium">Location</span>
                    <span className="font-semibold">{project.metrics.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MdAttachMoney className="text-primary text-xl" />
                  <div>
                    <span className="block text-slate-400 font-medium">Estimated Budget</span>
                    <span className="font-semibold">{project.metrics.value}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MdAccessTime className="text-primary text-xl" />
                  <div>
                    <span className="block text-slate-400 font-medium">Execution Duration</span>
                    <span className="font-semibold">{project.metrics.duration}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MdSquareFoot className="text-primary text-xl" />
                  <div>
                    <span className="block text-slate-400 font-medium">Total Floor Area</span>
                    <span className="font-semibold">{project.metrics.size}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Execution Timeline */}
            <div className="p-6 bg-white border border-border rounded-2xl">
              <h3 className="text-base font-bold text-text-primary mb-5 border-b border-border pb-3">Construction Stages</h3>
              <div className="flex flex-col gap-4 text-xs">
                {project.timeline.map((item, idx) => (
                  <div key={item.label} className="flex gap-3 text-left">
                    <span className="font-bold text-primary shrink-0 min-w-[70px]">{item.date}</span>
                    <span className="text-text-primary font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
