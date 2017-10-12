// JavaScript Document
/*  jslint browser:true */
"use strict";


function tellStory() {

    // This creates three arrays - nouns, adjectives, and verbs
    var nounsArray = document.getElementById('list-nouns').value.toLowerCase().split(/\s+|\n/);
        if (nounsArray.length < 2) {
            alert('Please enter a minimum of 3 nouns!');
            document.location.reload(); // Refresh page
        }
    var adjectivesArray = document.getElementById('list-adjectives').value.toLowerCase().split(/\s+|\n/);
        if (adjectivesArray.length < 2) {
            alert('Please enter a minimum of 3 adjectives!');
            document.location.reload(); // Refresh page
        }
    var verbsArray = document.getElementById('list-verbs').value.toLowerCase().split(/\s+|\n/);
        if (verbsArray.length < 2) {
            alert('Please enter a minimum of 3 verbs!');
            document.location.reload(); // Refresh page
        }

    // This ouputs the final story with all the nouns, adjectives, and verbs
    var finalStory = "Twinkle, twinkle, " + adjectivesArray[0] + " " + nounsArray[0] + "! Oh how I wonder where you are! You know the " + nounsArray[1] + ", perhaps? I’ve heard something like it, said Alice. You begin to " + verbsArray[0] + " and " + verbsArray[1] + " away from this " + adjectivesArray[1] + " world. It goes on, you know, the Hatter continued, in this way— Up above the " + nounsArray[2] + " you " + verbsArray[2] + " like a " + adjectivesArray[2] + " " + "tea tray in the sky. Twinkle, twinkle.";

    document.getElementById('story').innerHTML = finalStory;
} // end of function
