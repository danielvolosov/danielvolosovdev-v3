import React from "react";
import ReactMarkdown from "react-markdown";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import "./UsesView.css";

// This is not pretty, but keeping it temporarily since react-markdown isn't reading directly from readme.
const title = "# Uses - Daniel Volosov";
const intro ="I use a lot of different hardware/software for different purposes. The following sections will break down some of my setup and favorites."
const tools ="## Software Tools";
const tool1 = "1. Visual Studio Code is my primary editor and go-to for any front-end work."
const tool2 = "2. Eclipse is my editor for most back end work. I've primarily worked with Java/Spring & enjoy the open nature of this IDE."
const tool3 = "3. iTerm 2 is my go-to terminal emulator. Love the customization!";
const tool4 = "4. Firefox is my primary browser. I enjoy the dev tools very much, and the layout is more effective than Chrome for me. I do test my apps on most browsers."
const hToolIntro = "## Hardware Setup";
const hTool1 = "1. I use an LG 34WN80C-B 34 Ultrawide for my work. I find it incredibly helptful to have all of my apps organized on a single display."
const hTool2 = '2. I use a 2019 16" MacBook Pro. I genuinely enjoy MacOS for just about everything. I also use a Magic Keyboard with the number pad. Those things can hold a charge for months!';
const hTool3 = "3. I just purchased a Logitech MX3 Master mouse. It's so comfortable!"
const hTool4 = "4. I also have a Custom built gaming PC. It's a monster, but I only use it for gaming.";
const hTool5 = "5. My current headset is a Bose QC35 II. I've had it since I started my first development job in 2017. I just replaced the ear cushions since they wore out completely, but it's still going.";
const hTool6="6. I use an iPhone XS 256GB for mobile purposes. I will likely never need that much storage and really overspent on it.";

function UsesView() {
  return (
    <div>
      <Header />
      <div className="readmeContainer">
        <ReactMarkdown source={title} />
        <ReactMarkdown source={intro} />
        <ReactMarkdown source={tools} />
        <ReactMarkdown source={tool1} />
        <ReactMarkdown source={tool2} />
        <ReactMarkdown source={tool3} />
        <ReactMarkdown source={tool4} />
        <ReactMarkdown source={hToolIntro} />
        <ReactMarkdown source={hTool1} />
        <ReactMarkdown source={hTool2} />
        <ReactMarkdown source={hTool3} />
        <ReactMarkdown source={hTool4} />
        <ReactMarkdown source={hTool5} />
        <ReactMarkdown source={hTool6} />
      </div>
      <Footer />
    </div>
  );
}

export default UsesView;
