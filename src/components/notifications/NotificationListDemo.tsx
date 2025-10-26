"use client";

import React, { useState, useEffect } from 'react';
import { motion, type Transition } from 'framer-motion';
import { RotateCcw, ArrowUpRight, X } from 'lucide-react';
import { SECTION_COLORS } from '@/styles/colors';

const notifications = [
  {
    id: 1,
    title: 'Newsletter update',
    subtitle: 'click to read more',
    time: 'just now',
    count: 2,
    href: '/announcements#1',
    },
  {
    id: 2,
    title: 'NEW EIE Event Posted',
    subtitle: 'hackathon coming up',
    time: '1m 11s',
    href: '/announcements#2',
  },
//   {
//     id: 3,
//     title: 'Join the Change Maker Society',
//     subtitle: 'club registrations open',
//     time: '5m',
//     href: '/announcements#3',
//   },
];

const transition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 26,
};

const getCardVariants = (i: number) => ({
  collapsed: {
    y: i * 6,
    scale: 1 - i * 0.003,
  },
  expanded: {
    y: i * 64,
    scale: 1,
  },
});

const textSwitchTransition: Transition = {
  duration: 0.22,
  ease: 'easeInOut',
};

const notificationTextVariants = {
  collapsed: { opacity: 1, y: 0, pointerEvents: 'auto' },
  expanded: { opacity: 0, y: -16, pointerEvents: 'none' },
};

const viewAllTextVariants = {
  collapsed: { opacity: 0, y: 16, pointerEvents: 'none' },
  expanded: { opacity: 1, y: 0, pointerEvents: 'auto' },
};

export const NotificationListDemo: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  // Reflect the notification widget state onto the document so other page
  // elements can adapt (for example add right padding to avoid overlap).
  // Usage (in your global stylesheet):
  //   :root { --notification-width: 0rem; --notification-height: 0rem; }
  //   .main-content { padding-right: var(--notification-width); transition: padding 160ms ease; }
  // When visible, we set --notification-width to the widget width (Tailwind `w-80` == 20rem).
  useEffect(() => {
    const root = document.documentElement;
      try {
      if (visible) {
        root.classList.add('has-notification');
        // width of the widget (w-80)
        root.style.setProperty('--notification-width', '20rem');
        // collapsed and expanded heights (approximate) so consumer can adapt vertically if needed
        root.style.setProperty('--notification-collapsed-height', '3.5rem');
        root.style.setProperty('--notification-expanded-height', '12rem');
        // background alpha for the inner box
        root.style.setProperty('--notification-bg-alpha', '0.92');
        // border radius for inner box
        root.style.setProperty('--notification-radius', '1rem');
        // card opacity defaults: first card slightly more opaque
        root.style.setProperty('--notification-card-opacity-first', '0.5');
        root.style.setProperty('--notification-card-opacity-other', '0.22');
        root.setAttribute('data-notification-expanded', isExpanded ? 'true' : 'false');
      } else {
        root.classList.remove('has-notification');
        root.style.setProperty('--notification-width', '0rem');
        root.style.setProperty('--notification-collapsed-height', '0rem');
        root.style.setProperty('--notification-expanded-height', '0rem');
        root.style.setProperty('--notification-bg-alpha', '0');
        root.style.setProperty('--notification-radius', '0');
        root.style.setProperty('--notification-card-opacity-first', '0');
        root.style.setProperty('--notification-card-opacity-other', '0');
        root.removeAttribute('data-notification-expanded');
      }
    } catch (err) {
      // ignore if document isn't available (shouldn't happen in client component)
    }

    return () => {
      try {
        const root = document.documentElement;
  root.classList.remove('has-notification');
  root.style.removeProperty('--notification-width');
  root.style.removeProperty('--notification-collapsed-height');
  root.style.removeProperty('--notification-expanded-height');
  root.style.removeProperty('--notification-bg-alpha');
  root.style.removeProperty('--notification-radius');
  root.style.removeProperty('--notification-card-opacity-first');
  root.style.removeProperty('--notification-card-opacity-other');
  root.removeAttribute('data-notification-expanded');
      } catch (e) {
        // noop
      }
    };
  }, [visible, isExpanded]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className={`rounded-3xl p-1 border border-white/8 shadow-lg bg-gradient-to-br ${SECTION_COLORS.landing.gradient.tailwind} w-80 w-[var(--notification-width,20rem)]`}
      >
        <motion.div
          className="relative rounded-2xl overflow-hidden text-white pt-4 px-3 pb-3 bg-[rgba(62,60,107,var(--notification-bg-alpha,0.92))] rounded-[var(--notification-radius,1rem)]"
          initial="collapsed"
          animate={isExpanded ? 'expanded' : 'collapsed'}
          onHoverStart={() => setIsExpanded(true)}
          // NOTE: intentionally do NOT collapse on hover end; user must close via the X button
          transition={{ type: 'tween', duration: 0.18 }}
        >
          {/* Close button */}
          <button
            type="button"
            aria-label="Close notifications"
            title="Close"
            onClick={(e) => {
              e.stopPropagation();
              setVisible(false);
            }}
            className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/90 z-50"
          >
            <X className="w-4 h-4" />
          </button>

          <motion.div className="relative overflow-hidden" layout>
            {/* Collapsed: absolutely stacked, overlapping cards. Expanded: normal flow list so container auto-sizes to content. */}
            {!isExpanded ? (
              <div className="relative h-14">{/* height to contain collapsed stack */}
                {notifications.map((notification, i) => (
                  <motion.button
                    key={notification.id}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      // if not expanded yet, expand instead of navigating
                      if (!isExpanded) {
                        setIsExpanded(true);
                        return;
                      }
                      globalThis.location.href = notification.href;
                    }}
                    className="absolute left-3 right-3 h-14 text-left bg-[#2B9EB3]/8 rounded-lg px-3 py-2 shadow-sm transition-all duration-200 border border-white/8"
                    variants={getCardVariants(i)}
                    transition={transition}
                    style={{
                      zIndex: notifications.length - i,
                      opacity: i === 0 ? 'var(--notification-card-opacity-first,0.5)' : 'var(--notification-card-opacity-other,0.22)',
                      WebkitTransform: 'translateZ(0)'
                    }}
                    whileHover={{ opacity: 1 }}
                    whileTap={{ scale: 0.995 }}
                  >
                    <div className="flex justify-between items-start">
                      <h1 className="text-sm font-semibold text-white leading-tight truncate">{notification.title}</h1>
                      {notification.count && (
                        <div className="flex items-center text-xs gap-0.5 font-medium text-white/90">
                          <RotateCcw className="w-3 h-3" />
                          <span>{notification.count}</span>
                        </div>
                      )}
                    </div>
                    <div className="text-xs text-white/70 font-medium mt-1 truncate">
                      <span>{notification.time}</span>
                      {' \u2022 '}
                      <span>{notification.subtitle}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            ) : (
              <div className="flex flex-col gap-2 py-1">
                {notifications.map((notification) => (
                  <button
                    key={notification.id}
                    type="button"
                    onClick={() => (globalThis.location.href = notification.href)}
                    className="w-full text-left bg-[#2B9EB3]/8 rounded-lg px-3 py-2 shadow-sm transition-all duration-200 border border-white/8"
                  >
                    <div className="flex justify-between items-start">
                      <h1 className="text-sm font-semibold text-white leading-tight truncate">{notification.title}</h1>
                      {notification.count && (
                        <div className="flex items-center text-xs gap-0.5 font-medium text-white/90">
                          <RotateCcw className="w-3 h-3" />
                          <span>{notification.count}</span>
                        </div>
                      )}
                    </div>
                    <div className="text-xs text-white/70 font-medium mt-1 truncate">
                      <span>{notification.time}</span>
                      {' \u2022 '}
                      <span>{notification.subtitle}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-white/10 text-white text-xs flex items-center justify-center font-medium">
              {notifications.length}
            </div>
            <span className="grid">
              <motion.span
                className="text-sm font-medium text-white/80 row-start-1 col-start-1"
                variants={notificationTextVariants}
                transition={textSwitchTransition}
              >
                Notifications
              </motion.span>
              <motion.span
                onClick={() => (globalThis.location.href = '/announcements')}
                className="text-sm font-medium text-white/80 flex items-center gap-1 cursor-pointer select-none row-start-1 col-start-1"
                variants={viewAllTextVariants}
                transition={textSwitchTransition}
              >
                View all <ArrowUpRight className="w-3 h-3" />
              </motion.span>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotificationListDemo;
