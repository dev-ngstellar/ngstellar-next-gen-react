import React from 'react';
import { motion } from 'framer-motion';
import { getImg } from '../../utils/images';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const TeamCard = ({ name, role, bio, image, socials, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col rounded-xl overflow-hidden border border-border bg-white shadow-md hover:shadow-xl transition-all duration-300 text-left"
    >
      <div className="relative h-72 overflow-hidden bg-slate-100">
        <img
          src={getImg(image)}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Social Overlay */}
        {socials && (
          <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
            {socials.linkedin && (
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white hover:bg-primary text-text-primary hover:text-white flex items-center justify-center shadow-lg transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn />
              </a>
            )}
            {socials.twitter && (
              <a
                href={socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white hover:bg-primary text-text-primary hover:text-white flex items-center justify-center shadow-lg transition-colors"
                aria-label="Twitter Profile"
              >
                <FaTwitter />
              </a>
            )}
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-text-primary group-hover:text-primary transition-colors">
          {name}
        </h3>
        <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-3 block">
          {role}
        </span>
        <p className="text-text-secondary text-sm leading-relaxed mt-1">
          {bio}
        </p>
      </div>
    </motion.div>
  );
};

export default TeamCard;
