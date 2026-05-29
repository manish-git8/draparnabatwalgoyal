import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWidgets from "@/components/layout/FloatingWidgets";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://draparna.in"),
  title: {
    default: "Dr. Aparna | Senior Radiologist in Indore | SNG Hospital",
    template: "%s | Dr. Aparna — Radiologist",
  },
  description:
    "Dr. Aparna is a leading radiologist in Indore with 10+ years of experience, specialized training in Oncology Imaging & Fetal Medicine. Book your appointment at SNG Hospital.",
  keywords: [
    "radiologist in Indore",
    "best diagnostic center in Indore",
    "CT scan specialist Indore",
    "USG specialist Indore",
    "MSK radiology expert",
    "fetal medicine specialist Indore",
    "SNG Hospital radiology",
    "diagnostic imaging Indore",
    "oncology imaging Indore",
    "ultrasound specialist Indore",
  ],
  authors: [{ name: "Dr. Aparna" }],
  icons: {
    icon: [{ url: "/dr-aparna-logo.png", type: "image/png", sizes: "any" }],
    apple: [{ url: "/dr-aparna-logo.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://draparna.in",
    siteName: "Dr. Aparna — Senior Radiologist",
    title: "Dr. Aparna | Senior Radiologist in Indore | SNG Hospital",
    description:
      "Advanced radiology and diagnostic care with precision and compassion. Specialist with 10+ years of experience.",
    images: [
      {
        url: "/doctor-profile.jpg",
        width: 800,
        height: 600,
        alt: "Dr. Aparna — Senior Radiologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Aparna | Senior Radiologist in Indore",
    description:
      "Advanced radiology and diagnostic care with precision and compassion.",
    images: ["/doctor-profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Dr. Aparna — Senior Radiologist",
    description:
      "Advanced radiology and diagnostic care with precision and compassion at SNG Hospital, Indore.",
    url: "https://draparna.in",
    telephone: "+917879803842",
    email: "contact@snghospital.com",
    image: "/doctor-profile.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Navkar II Apartment, Banwari Lal Jaju Marg, Near Jain Temple, South Tukoganj",
      addressLocality: "Indore",
      addressRegion: "Madhya Pradesh",
      postalCode: "452001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "22.7196",
      longitude: "75.8577",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "11:00",
      closes: "16:00",
    },
    medicalSpecialty: [
      "Radiology",
      "Diagnostic Imaging",
      "Musculoskeletal Radiology",
      "Oncology Imaging",
      "Fetal Medicine",
    ],
    priceRange: "$$",
    hasMap: "https://www.google.com/maps/dir//SNG+Hospital,+Navkar+-+II+Apartment,+Banwari+Lal+Jaju+Marg,+near+Jain+Temple,+South+Tukoganj,+Indore,+Madhya+Pradesh+452001/@22.7378602,75.8882503,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3962fdf0e614e0c5:0x728aa04c2a007156!2m2!1d75.8816224!2d22.7202848",
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/dr-aparna-logo.png" type="image/png" sizes="any" />
        <link rel="apple-touch-icon" href="/dr-aparna-logo.png" />
        <link rel="shortcut icon" href="/dr-aparna-logo.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWidgets />
      </body>
    </html>
  );
}
