import { particlesCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js';

const pc = particlesCursor({
    el: document.getElementById('app'),
    gpgpuSize: 512,
    color: 0x00FF00, // Light green
    colors: [0x00FF00, 0x00FF00], // Array of light green colors
    coordScale: 0.5,
    pointSize: 2,
    noiseIntensity: 0.005,
    noiseTimeCoef: 0.0001,
    pointDecay: 0.0025,
    sleepRadiusX: 250,
    sleepRadiusY: 250,
    sleepTimeCoefX: 0.001,
    sleepTimeCoefY: 0.002,
});
