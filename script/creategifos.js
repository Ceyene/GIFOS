/* ------------------------ Create Gifos JS ---------------------- */
//Variables
const begin_btn = document.getElementById("begin_btn");
const record_btn = document.getElementById("record_btn");
const end_btn = document.getElementById("end_btn");
const upload_btn = document.getElementById("upload_btn");

const step_first = document.getElementById("creategifo_step_first");
const step_second = document.getElementById("creategifo_step_second");
const step_third = document.getElementById("creategifo_step_third");

const counter_recording = document.getElementById("counter_recording");
const counter_repeat = document.getElementById("counter_repeat");

const overlay_video = document.getElementById("overlay_video");
const overlay_icon = document.getElementById("overlay_video_icon");
const overlay_text = document.getElementById("overlay_video_text");
const overlay_actions = document.getElementById("overlay_video_actions");

let recorder;
let blob;
let dateStarted;
let form = new FormData();
let myGifosArray = [];
let myGifosString = localStorage.getItem("myGifos");
let video = document.getElementById("recording_video");
let recorded_gifo = document.getElementById("recorded_gifo");


/* -------------------- End of Create Gifos JS ------------------- */