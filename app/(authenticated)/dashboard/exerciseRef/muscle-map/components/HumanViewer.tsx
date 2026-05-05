"use client";
import { useEffect, useRef } from "react";
import Script from "next/script";

export default function HumanViewer() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    iframe.onload = () => {
      const viewer = (iframe.contentWindow as any).HumanAPI;

      // Example: wait for viewer to load
      viewer.on("scene.ready", () => {
        console.log("BioDigital model ready");
        viewer.setCamera({ zoom: 1.2 });
      });
    };
  }, []);

  return (
    <>
      <iframe
        ref={iframeRef}
        // src="https://human.biodigital.com/viewer?modelId=YOUR_MODEL_ID"
        // src="https://human.biodigital.com/viewer/?id=production/maleAdult/beating_heart_02&dk=a5f69922a37bdf0be6ce772f0ad2287a5a2d567e"
        src="https://human.biodigital.com/viewer/?id=79cl&ui-anatomy-descriptions=true&ui-anatomy-pronunciations=true&ui-anatomy-labels=true&ui-audio=true&ui-chapter-list=false&ui-fullscreen=true&ui-help=true&ui-info=true&ui-label-list=true&ui-layers=true&ui-skin-layers=true&ui-loader=circle&ui-media-controls=full&ui-menu=true&ui-nav=true&ui-search=true&ui-tools=true&ui-tutorial=false&ui-undo=true&ui-whiteboard=true&initial.none=true&disable-scroll=false&uaid=MbKJO&paid=o_2cbd7b6a"
        style={{ width: "100%", height: "100vh", border: "none" }}
      />
      <Script src="https://developer.biodigital.com/builds/api/human-api-3.0.0.min.js" />
    </>
  );
}
