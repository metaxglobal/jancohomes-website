// Inquiry Form - Conditional Rendering based on screen size

import InquiryFormMobileComponent from "./InquiryFormMobile";
import { InquiryFormDesktop as InquiryFormDesktopComponent } from "./InquiryFormDesktop";

export { InquiryFormMobileComponent as InquiryFormMobile, InquiryFormDesktopComponent as InquiryFormDesktop };

export default function InquiryForm() {
  return (
    <>
      <InquiryFormMobileComponent />
      <InquiryFormDesktopComponent />
    </>
  );
}
