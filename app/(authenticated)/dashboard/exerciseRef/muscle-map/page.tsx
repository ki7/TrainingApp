// app/muscle-map/page.tsx (Next.js 13+ app router)
"use client";

import React, { useState, useRef, useEffect, Children } from "react";
import { HumanBodySvg } from "./components/HumanBodySvg";
import { HumanBodyFrontSvg } from "./components/HumanBodyFrontSvg";
import { HumanViewer } from "./components/HumanViewer";
import { MUSCLE_BY_ID, type MuscleId } from "./types/muscles";
import Script from "next/script";

export default function MuscleMapPage() {
  const [selectedMuscle, setSelectedMuscle] = useState<MuscleId | null>(null);
  const [humanApi, setSelectedHuman] = useState<any | null>(null);

  const handleMuscleClick = (muscleId: MuscleId) => {
    setSelectedMuscle(muscleId);
  };

  const label =
    selectedMuscle != null
      ? MUSCLE_BY_ID[selectedMuscle].name
      : "Clique sur un muscle";

  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    iframe.onload = () => {
      // const viewer = (iframe.contentWindow as any).HumanAPI;
      const human = new (iframe.contentWindow as any).HumanAPI("myViewer");
      console.log({ human });
      // Example: wait for viewer to load



     
    };
  }, []);

  function iframeOnLoad(e: React.SyntheticEvent<HTMLIFrameElement, Event>) {
    // console.log("iframe loaded", { e }, window, window.HumanAPI);
    console.log("iframe loaded", window.HumanAPI);
    var human = new window.HumanAPI("myViewer");
    // const iframe = iframeRef.current;
    // const human = new (iframe.contentWindow as any).HumanAPI("myViewer");
    console.log({ human });

    setSelectedHuman(human);

    // human.send("timeline.pause");

    // human.send("timeline.play");
    (function rotateCamera() {
      requestAnimationFrame(rotateCamera);
      // human.send("camera.orbit", { yaw: 0.4 });
    })();

    human.on("labels.moved", (moved) => {
      console.log("label moved ", moved);
    });

    human.on("labels.entered", (entered) => {
      console.log("label entered ", entered);
    });

    human.on("labels.left", (left) => {
      console.log("label left ", left);
    });

    human.on("labels.picked", (picked) => {
      console.log("label picked ", picked);
    });
    // human.send("camera.set", {
    //   position: { z: -25 },
    //   animate: true,
    // });

    /*  
    // Example: wait for viewer to load
    
    human.on("scene.ready", () => {
      console.log("scene ready", { human });
  
      console.log("BioDigital model ready");
      human.setCamera({ zoom: 0.9 });
    }); */
  }

  function B({children, click}): {children: React.ReactNode, click: () => void} {
    return (
    <button
      onClick={click}
      className="bg-blue-600 text-white px-4 py-2 rounded text-sm mb-5"
    >
      {children}
    </button>,
  )};

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-50 p-4">
      <B click={() => {
 console.log("Get structures");
humanApi.on("scene.objectsSelected", function(event) {
    var selected = [];
    var deselected = [];

    // Event contains a map of objects that were selected
    // or deselected by this update.
    Object.keys(event).forEach(function(objectId) {
        if (event[objectId]) {
            selected.push(objectId);
        } else {
            deselected.push(objectId);
        }
    });

    console.log("Selected objects: " + selected.join(", "));
    console.log("Deslected objects: " + deselected.join(", "));
});
    humanApi.send("human.info", function(human) {
    console.log("Gathering human info:");
    console.log(JSON.stringify(human));
});
 
      }}>Get structures</B>
      <B click={() => {
        const objectId = "human_20_male_muscular_system-left_frontalis_ID";
        humanApi.send("scene.colorObject", {
            objectId,
            tintColor: [1, 0, 0],
            brightness: 0.1,
            saturation: -0.5,
            contrast: 0.5,
            opacity: 1.0
        });
        humanApi.send("camera.set", { objectId: objectId, animate: true });
      }}>Color Object</B>
      <B click={() => {
        console.log("Pick or hover over something!");
          // humanApi.send("camera.set", { objectId: "human_09_male_skeletal_system-bones_of_head_ID", animate: true });

          humanApi.on("scene.picked", function (pickEvent) {
            console.log("'scene.picked' event: " + JSON.stringify(pickEvent));
            console.log(pickEvent);
            // humanApi.send("camera.set", { objectId: pickEvent.objectId, animate: true });
          });

      }}>Scene.picked event</B>
      <button
        onClick={() => {
          humanApi.send("camera.set", {
            objectId:
              "human_09_male_skeletal_system-left_metatarsal_bones_of_left_ankle_and_foot_ID",
            animate: true,
          });
        }}
        className="bg-blue-600 text-white px-4 py-2 rounded text-sm"
      >
        Show foot
      </button>
      <h1 className="text-2xl font-semibold mb-4">
        Carte musculaire interactive
      </h1>
      {/* <HumanViewer /> */}

      <iframe
        ref={iframeRef}
        id="myViewer"
        onLoad={(e) => iframeOnLoad(e)}
        // src="https://human.biodigital.com/viewer?modelId=YOUR_MODEL_ID"
        // src="https://human.biodigital.com/viewer/?id=production/maleAdult/beating_heart_02&dk=a5f69922a37bdf0be6ce772f0ad2287a5a2d567e"
        src="https://human.biodigital.com/viewer/?id=79cl&ui-anatomy-descriptions=true&ui-anatomy-pronunciations=true&ui-anatomy-labels=true&ui-audio=true&ui-chapter-list=false&ui-fullscreen=true&ui-help=true&ui-info=true&ui-label-list=true&ui-layers=true&ui-skin-layers=true&ui-loader=circle&ui-media-controls=full&ui-menu=true&ui-nav=true&ui-search=true&ui-tools=true&ui-tutorial=false&ui-undo=true&ui-whiteboard=true&initial.none=true&disable-scroll=false&uaid=MbKJO&paid=o_2cbd7b6a"
        style={{ width: "100%", height: "100vh", border: "none" }}
      />
      <Script src="https://developer.biodigital.com/builds/api/human-api-3.0.0.min.js" />
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <HumanBodySvg onMuscleClick={handleMuscleClick} />
        <HumanBodyFrontSvg onMuscleClick={handleMuscleClick} />

        <div className="w-full max-w-xs rounded-lg border border-slate-700 bg-slate-900 p-4">
          <h2 className="text-lg font-medium mb-2">Muscle sélectionné</h2>
          <p className="text-xl font-semibold text-emerald-400">{label}</p>
        </div>
      </div>
    </main>
  );
}
