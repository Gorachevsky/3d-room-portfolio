import * as THREE from "three";

import GSAP from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger.js";

import Experience from "../Experience.js";

export default class Controls {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.camera = this.experience.camera;
    this.room = this.experience.world.room.actualRoom;

    GSAP.registerPlugin(ScrollTrigger);
    this.setPath();
  }

  setPath() {
    this.timeline = new GSAP.timeline();
    this.timeline.to(this.room.position, {
      x: 0.5,
      scrollTrigger: {
        trigger: ".first-move",
        markers: true,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
      },
    });
  }

  resize() {}

  update() {}
}
