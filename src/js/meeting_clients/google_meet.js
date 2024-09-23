import {getElement, muteStatus} from '../utils.js';
import {Clients} from './clients.js';

export class GoogleMeet extends Clients {
    constructor() {
        super();
        this.targetUrls = ["meet.google.com"];
    }

    getStatus() {
        let newMuteButton = getElement("[data-is-muted]");
        let videoButton = (
            getElement('[aria-label="Turn off camera (ctrl + e)"]') || 
            getElement('[aria-label="Turn on camera (ctrl + e)"]')
        );
        let status = `chromeMute:${muteStatus(newMuteButton, "data-is-muted")},`

        if(videoButton){
            videoButton = videoButton.getAttribute("data-is-muted") == "true" ? "stopped" : "started";
            status +=`chromeVideo:${videoButton},`;
        }else{
            status +=`chromeVideo:disabled,`;
        }

        return status
    }

    toggleMute() {
        let newMuteButton = getElement("[data-is-muted]");

        if(!newMuteButton){
            return "chromeMute:disabled"
        }

        newMuteButton.click();
    }

    toggleVideo() {
        let videoButton = (
            getElement('[aria-label="Turn off camera (ctrl + e)"]') || 
            getElement('[aria-label="Turn on camera (ctrl + e)"]')
        );
    
        if(videoButton){
            videoButton.click();
            return "done";
        }else{
            console.error("Could not find google meet's video button");
            return "chromeVideo:disabled,"
        }
    }
}