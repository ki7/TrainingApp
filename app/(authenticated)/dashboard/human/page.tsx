"use client";
import { useEffect, useRef } from "react";

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
    <iframe
      ref={iframeRef}
      src="https://human.biodigital.com/viewer?modelId=YOUR_MODEL_ID"
      style={{ width: "100%", height: "100vh", border: "none" }}
    />
  );
}
