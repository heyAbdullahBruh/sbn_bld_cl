import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { useAuth } from "../../../context/AuthContext";
import { Droplet, Users, Activity, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";

// Custom hook for counting animation
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible]);

  return { count, ref: elementRef };
};

// Counter component
const Counter = ({ end, duration }: { end: number; duration: number }) => {
  const { count, ref } = useCountUp(end, duration);
  return <span ref={ref}>{count}</span>;
};

const BLDinfo = () => {
  const { isAuth } = useAuth();
  const { t } = useTranslation();

  const stats = [
    {
      label: t("home.stats.blood_types"),
      value: 8,
      icon: Droplet,
      color: "text-red-600",
    },
    {
      label: t("home.stats.donated_blood"),
      value: 245,
      icon: Activity,
      color: "text-blue-600",
    },
    {
      label: t("home.stats.patients_served"),
      value: 180,
      icon: CheckCircle2,
      color: "text-emerald-600",
    },
    {
      label: t("home.stats.total_donors"),
      value: 520,
      icon: Users,
      color: "text-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className={stat.color} size={32} />
              </div>
              <div className="text-4xl md:text-5xl font-black mb-2 tracking-tight">
                <Counter end={stat.value} duration={2500} />+
              </div>
              <p className="text-slate-400 font-medium uppercase tracking-widest text-xs md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {!isAuth && (
          <div className="mt-20 text-center">
            <Link to="/auth">
              <button className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95">
                {t("home.stats.join_btn")}
              </button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BLDinfo;
