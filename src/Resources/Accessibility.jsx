import React, { useEffect } from 'react';
import "../css/Resources.css";

export default function AccessibilityStatement() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='privacy-policy-container'>
      <div className='privacy-policy-header'>
        <h1 className="head-text">Accessibility Statement</h1>
      </div>

      <div className='privacy-policy-content'>
        <section>
          <h2 className="sub-head-text">Introduction</h2>
          <p className="para-text">
            We’re committed to easy access for everyone. ThreatSenseAi.com is
            committed to making our website as accessible as possible to
            everyone, including those with visual, hearing, cognitive, and motor
            impairments. We’re constantly working towards improving the
            accessibility of our website to ensure we provide equal access to
            all of our users.
          </p>

          <p className="para-text">
            As part of our commitment to accessibility, we ensure that our
            website is compatible with recent versions of popular screen
            readers, operating system screen magnifiers, speech recognition
            software, and operating system speech packages.
          </p>

          <p className="para-text">
            We always make sure that our website follows accessibility best
            practices by following the principles of universal design. This
            ensures the site is flexible and adaptable to different users’ needs
            or preferences and is accessible through a variety of different
            technologies, including mobile devices or assistive technologies.
          </p>

          <p className="para-text">
            During the development phase, we endeavor to follow WebAIM’s
            Principles of Accessible Design and also try to help improve the
            accessibility of our website for users with disabilities by
            retaining the ability to adjust the font size, maintaining
            appropriate color and contrast ratios for text, providing
            keyboard-accessible navigation, providing skip-to-content links at
            the top of the page, and monitoring the accessibility of
            ThreatSenseAi.com through internally maintained tools.
          </p>
        </section>

        <section>
          <h2 className="sub-head-text">
            Web Content Accessibility Guidelines (WCAG) 2.1
          </h2>
          <p className="para-text">
            Wherever possible, the ThreatSenseAi.com site adheres to Level AA of
            the Web Content Accessibility Guidelines (WCAG 2.1). These guidelines
            outline four main principles stating that sites should be
            perceivable, operable, understandable, and robust.
          </p>

          <p className="para-text">
            This means that information and user interface components must be
            presentable in ways users can perceive, navigation and components
            must be operable, information and interface operation must be
            understandable, and content must be robust enough to be interpreted
            reliably by a wide variety of user agents, including assistive
            technologies.
          </p>
        </section>

        <section>
          <h2 className="sub-head-text">
            Optimizing Your Set-Up for Your Needs
          </h2>
          <p className="para-text">
            The website provides guides to help make your computer more
            accessible. It offers assistance with seeing the screen, using the
            keyboard and mouse, hearing sounds, and with reading and spelling.
          </p>

          <p className="para-text">
            The ThreatSense Ai website also provides accessibility help, enabling
            computer users to make the most of the internet regardless of their
            ability or disability.
          </p>
        </section>
      </div>
    </div>
  );
}
