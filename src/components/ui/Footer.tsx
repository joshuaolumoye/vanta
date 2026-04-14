import React from "react";

/* ========= DATA ========= */
const footerLinks = {
  platform: [
    "Explore Comics",
    "Creator Studio",
    "VantaPass",
    "Vanta Foundry",
  ],
  community: [
    "Events & Realm Wars",
    "Marketplace",
    "Leaderboards",
    "Help Center",
  ],
  support: [
    "Contact Us",
    "Terms of Service",
    "Privacy Policy",
    "About",
  ],
  socials: [
    "Discord",
    "X (Twitter)",
    "Instagram",
  ],
};

/* ========= FOOTER ========= */
const Footer: React.FC = () => {
  return (
    <footer className="relative w-full bg-slate-950 pt-24 pb-10 overflow-hidden">
      {/* faint background wordmark */}
      <div className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center">
        <span className="text-[140px] font-bold tracking-tight text-white/5 select-none">
          VantaOrigin
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* top */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-14 mb-14">
          {/* brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-emerald-400 font-semibold text-lg">
                ●
              </span>
              <span className="text-white font-semibold">
                VantaOrigin
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Where stories become gods. Create, read and battle in the
              ultimate mythic universe.
            </p>
          </div>

          {/* links */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-10">
            <FooterColumn title="Platform" items={footerLinks.platform} />
            <FooterColumn title="Community" items={footerLinks.community} />
            <FooterColumn title="Support" items={footerLinks.support} />
            <FooterColumn title="Socials" items={footerLinks.socials} />
          </div>
        </div>

        {/* divider */}
        <div className="h-px w-full bg-white/10 mb-6" />

        {/* bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2025 VantaOrigin. All rights reserved.</p>
          <p>Where all stories become legends.</p>
        </div>
      </div>
    </footer>
  );
};

/* ========= COLUMN ========= */
interface FooterColumnProps {
  title: string;
  items: string[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, items }) => {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white mb-4">
        {title}
      </h4>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="text-sm text-slate-400 hover:text-white transition cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
