function formatTime(overallDuration){
    let days = Math.floor(overallDuration / 1440);
    let hours = Math.floor((overallDuration - ( days * 1440 )) / 60 );
    let minutes = overallDuration - (days * 1440) - (hours *60);
    return `${days} day(s) ${hours} hour(s) ${minutes} minute(s).`;
}
formatTime(120);