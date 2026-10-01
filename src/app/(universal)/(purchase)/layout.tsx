import type { Metadata } from "next";
import "@/app/globals.css";
import SiteLayout from "@/components/SiteLayout";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Vardhman Traders",
  description: "Welcome to Vardhman Traders, a trusted name serving customers from the heart of Jalandhar. Located at E.P. 333, Inside Saidan Gate",
  other: {
    google: "notranslate",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
   
        <div translate="no" className="mt-40">
          <SiteLayout>{children}</SiteLayout>

          {/*  Toast Notification System */}
          <Toaster
            position="top-center"
            containerStyle={{ top: "30%" }}
            toastOptions={{
              style: {
                borderRadius: "10px",
                padding: "12px 16px",
                background: "#1e293b",
                color: "#f8fafc",
              },
              success: { style: { background: "#10b981", color: "#fff" } },
              error: { style: { background: "#ef4444", color: "#fff" } },
              loading: { style: { background: "#f59e0b", color: "#fff" } },
            }}
            reverseOrder={false}
          />
        </div>
    
  );
}
