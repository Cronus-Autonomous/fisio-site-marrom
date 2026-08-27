import React from "react";
import {
  Hand, Sparkles, Activity, Droplets, HeartPulse, ShieldPlus, Flower2,
  Ear, HeartHandshake, Leaf, UserRound, Layers, Heart, Target,
} from "lucide-react";

const map = {
  Hand, Sparkles, Activity, Droplets, HeartPulse, ShieldPlus, Flower2,
  Ear, HandHeart: HeartHandshake, HeartHandshake, Heart, Leaf, UserRound, Layers, Target,
};

export function Icon({ name, className = "", strokeWidth = 1.5 }) {
  const Cmp = map[name] || Hand;
  return <Cmp className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}