// Footer - Conditional Rendering based on screen size

import FooterMobileComponent from "./FooterMobile";
import { FooterDesktop as FooterDesktopComponent } from "./FooterDesktop";

export { FooterMobileComponent as FooterMobile, FooterDesktopComponent as FooterDesktop };

export default function Footer() {
  return (
    <>
      <FooterMobileComponent />
      <FooterDesktopComponent />
    </>
  );
}
