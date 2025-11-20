/**
 * Properties Page
 * Real estate properties listing page with mobile/desktop responsive views
 * Route: /properties
 */

"use client";

import React from "react";
import {
  PropertiesPageMobile,
  PropertiesPageDesktop,
} from "@/components/pages/properties";
import { getAllProperties } from "@/data/properties";

export default function PropertiesPage() {
  // Get properties from centralized data
  const properties = getAllProperties();

  return (
    <>
      {/* Mobile View */}
      <div className="lg:hidden">
        <PropertiesPageMobile properties={properties} />
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
        <PropertiesPageDesktop properties={properties} />
      </div>
    </>
  );
}
