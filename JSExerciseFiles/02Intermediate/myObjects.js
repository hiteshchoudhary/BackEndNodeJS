let myYoutubeVideoOne = {
    title: 'Loops in javascript',
    videoLength: 15,
    videoCreator: 'Hitesh Choudhary',
    videoDescription: 'this is a video description and a long one'

}

let myYoutubeVideoTwo = {
    title: 'functions in javascript',
    videoLength: 10,
    videoCreator: 'Hitesh Choudhary',
    videoDescription: 'this is a video description and a long one'

}

//console.log(myYoutubeVideo);

//console.log(`Hey new Video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`);

// myYoutubeVideo.title = 'ForEach loop in JS'
// console.log(`Hey new Video on ${myYoutubeVideo.title} by ${myYoutubeVideo.videoCreator}`);
// console.log(myYoutubeVideo);


//Assignment


let changeVideoLength = function(myObject) {
    return {
        formatOne: `Time of this video is: ${myObject.videoLength + 2}`,
        formatTwo: `Time of this video is: ${myObject.videoLength + 1}`
    }
    
}

let adOne = changeVideoLength(myYoutubeVideoTwo)
console.log(adOne.formatTwo);

