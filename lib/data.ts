export const HOTEL = {
  name: "FARA Hotel & Suites",
  tagline: "Your Comfort, Our Priority in Lagos",
  phone: "0902 613 3762",
  phoneLink: "tel:+2349026133762",
  whatsapp: "https://wa.me/2349026133762",
  whatsappMsg:
    "https://wa.me/2349026133762?text=Hello%2C%20I'd%20like%20to%20make%20a%20reservation%20at%20FARA%20Hotel%20%26%20Suites.",
  address: "19 Oladapo Abudu, Alagbado, Ojokoro 101232, Lagos",
  rating: 3.9,
  reviews: 122,
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0!2d3.2733!3d6.6600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b94f5e3bcca59%3A0x0!2s19%20Oladapo%20Abudu%2C%20Alagbado%2C%20Ojokoro%20101232%2C%20Lagos!5e0!3m2!1sen!2sng!4v1",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export const ROOMS = [
  {
    id: 1,
    name: "Standard Room",
    tag: "Standard",
    tagBg: "bg-gold",
    tagText: "text-navy-dark",
    price: "₦15,000",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=700&q=80",
    imgFull: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=85",
    desc: "A cosy, fully air-conditioned room ideal for solo travellers and short stays. Clean, comfortable, and great value.",
    amenities: ["WiFi", "TV", "A/C", "Hot Water"],
    whatsappMsg:
      "https://wa.me/2349026133762?text=Hello%2C%20I%20want%20to%20book%20a%20Standard%20Room",
  },
  {
    id: 2,
    name: "Deluxe Room",
    tag: "Deluxe",
    tagBg: "bg-navy",
    tagText: "text-white",
    price: "₦22,000",
    img: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=700&q=80",
    imgFull: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=1200&q=85",
    desc: "Upgraded furnishings, extra space, and a premium feel for travellers who want that bit more without breaking the bank.",
    amenities: ["WiFi", "Smart TV", "A/C", "Hot Water", "Bathtub"],
    whatsappMsg:
      "https://wa.me/2349026133762?text=Hello%2C%20I%20want%20to%20book%20a%20Deluxe%20Room",
  },
  {
    id: 3,
    name: "Executive Suite",
    tag: "Executive",
    tagBg: "bg-gold-dark",
    tagText: "text-white",
    price: "₦35,000",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=700&q=80",
    imgFull: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=85",
    desc: "A spacious suite with a separate living area, work desk, and premium bedding — perfect for extended stays or business visitors.",
    amenities: ["WiFi", "Smart TV", "A/C", "Hot Water", "Bathtub", "Work Desk"],
    whatsappMsg:
      "https://wa.me/2349026133762?text=Hello%2C%20I%20want%20to%20book%20an%20Executive%20Suite",
  },
  {
    id: 4,
    name: "Family Suite",
    tag: "Family",
    tagBg: "bg-green-800",
    tagText: "text-white",
    price: "₦45,000",
    img: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=700&q=80",
    imgFull: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=1200&q=85",
    desc: "Generous living space with multiple beds, a dining nook, and everything a family needs for a memorable Lagos stay.",
    amenities: ["WiFi", "2× TV", "2× A/C", "Hot Water", "Lounge", "Mini-Kitchen"],
    whatsappMsg:
      "https://wa.me/2349026133762?text=Hello%2C%20I%20want%20to%20book%20a%20Family%20Suite",
  },
];

export const AMENITIES = [
  { icon: "wifi", label: "Free WiFi" },
  { icon: "zap", label: "24/7 Power Supply" },
  { icon: "car", label: "Secure Parking" },
  { icon: "bell", label: "Room Service" },
  { icon: "coffee", label: "Restaurant & Bar" },
  { icon: "monitor", label: "Conference Room" },
  { icon: "shirt", label: "Laundry Service" },
  { icon: "shield", label: "24/7 Security" },
];

export const REVIEWS = [
  {
    initials: "AO",
    name: "Adewale O.",
    meta: "Lagos, Nigeria · March 2025",
    stars: 5,
    text: "Great value for money! The room was clean, the AC worked perfectly, and the staff were super friendly. I'll definitely be coming back next time I'm in Lagos.",
    bg: "bg-navy",
  },
  {
    initials: "NK",
    name: "Ngozi K.",
    meta: "Abuja, Nigeria · January 2025",
    stars: 5,
    text: "I was worried about power supply but FARA never disappointed — lights on all night. The location near Alagbado is very convenient and the security gave me real peace of mind.",
    bg: "bg-gold-dark",
  },
  {
    initials: "EB",
    name: "Emeka B.",
    meta: "Port Harcourt · December 2024",
    stars: 4,
    text: "Took the Executive Suite for a 3-night work trip. Comfortable bed, fast WiFi, and room service was prompt. Good breakfast options too. Recommended for business travellers on a budget.",
    bg: "bg-green-800",
  },
];