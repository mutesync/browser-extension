import { getElement } from "../utils.js";
import { Clients } from "./clients.js";

export class Webex extends Clients {
  constructor() {
    super();
    this.targetUrls = [
      "web.webex.com",
    ];
  }

  getStatus() {
    let status = "";
    if (getElement('[aria-label="Microphone is currently muted - click to unmute"]')) {
      status += "chromeMute:muted,";
    } else if (getElement('[aria-label="Microphone is currently unmuted - click to mute"]')) {
      status += "chromeMute:unmuted,";
    } else {
      status += "chromeMute:disabled,";
    }

    if (getElement('[aria-label="Sending video is currently disabled - click to enable"]')) {
      status += "chromeVideo:stopped,";
    } else if (getElement('[aria-label="Sending video is currently enabled - click to disable"]')) {
      status += "chromeVideo:started,";
    } else {
      status += "chromeVideo:disabled,";
    }

    return status;
  }

  toggleMute() {
    let muteButton =
      getElement('[aria-label="Microphone is currently muted - click to unmute"]') ||
      getElement('[aria-label="Microphone is currently unmuted - click to mute"]');

    if (muteButton) {
      muteButton.click();
    } else {
      console.error("Could not find Webex's mute button");
    }
  }

  toggleVideo() {
    let videoButton =
      getElement('[aria-label="Sending video is currently disabled - click to enable"]') ||
      getElement('[aria-label="Sending video is currently enabled - click to disable"]');
      
    if (videoButton) {
      videoButton.click();
    } else {
      console.error("Could not find Webex's video button");
    }
    return;
  }
}

