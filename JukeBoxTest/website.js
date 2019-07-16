var artists = ["Madonna", "Michael Jackson", "Lionel Richie", "Prince", "Billy Joel"];//, [], []

var urlParams = new URLSearchParams(window.location.search);
var currentArtist = urlParams.get('artist');

//var madonna = ["https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/10594383&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/87949809&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/10594986&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/10594743&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"];
var madonna = ["../JukeBoxTest/La Isla Bonita.mp3", "../JukeBoxTest/Like a Virgin.mp3", "../JukeBoxTest/Crazy for You.mp3", "../JukeBoxTest/Take a Bow.mp3"];
var madonnaTitles = ["La Isla Bonita", "Like a Virgin", "Crazy for You", "Take a Bow"];

//var lionelRichie = ["https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/340690154&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/256150927&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/18921644&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/256151056&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"];
var lionelRichie = ["../JukeBoxTest/LIONEL RICHIE - HELLO LYRICS.mp3", "../JukeBoxTest/Say You, Say Me.mp3", "../JukeBoxTest/Lionel Richie - You Are.mp3", "../JukeBoxTest/Diana Ross & Lionel Richie Endless Love 1981.mp3"];
var lionelrichieSongs = ["Hello", "Say You, Say Me", "You Are", "Endless Love"];

//var michaelJackson = ["https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/226521380&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/96159101&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/329829734&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/308950076&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"]; 
var michaelJackson = ["../JukeBoxTest/Michael Jackson & Paul McCartney - Say Say Say [Audio HQ] HD.mp3", "../JukeBoxTest/Billie Jean.mp3", "../JukeBoxTest/Beat It.mp3","../JukeBoxTest/Rock with You.mp3"];

//var prince = ["https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/208700153&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/259325525&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/260304610&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/337579783&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"];
var prince = ["../JukeBoxTest/When Doves Cry.mp3", "../JukeBoxTest/Kiss (45 Version).mp3", "../JukeBoxTest/Let's Go Crazy.mp3", "../JukeBoxTest/Cream.mp3"];

//var billyJoel = ["https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/262564298&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/218650239&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/135727064&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/475015872&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"];
var billyJoel = ["../JukeBoxTest/The Longest Time.mp3", "../JukeBoxTest/Billy Joel - It's Still Rock And Roll To Me (Audio).mp3", "../JukeBoxTest/We Didn't Start the Fire.mp3", "../JukeBoxTest/Uptown Girl.mp3"];

var stevieWonder = ["https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/259001650&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/216180399&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/215068293&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/259001996&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"];
var backstreet = ["https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/79715707&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/412291350&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/326623418&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/335855731&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"];
var spiceGirls = ["https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/254780044&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/258269665&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/265680796&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/424754301&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"];
var nsync = ["https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/137983897&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/492102279&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/123041100&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/171862560&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"];
var aceOfBase = ["https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/230451035&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/225044776&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/230451774&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/225048024&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"]; 

//1980

if (currentArtist == "lionelRichie") {

    document.querySelector("title").innerHTML = "Lionel Richie";
    document.querySelector(".back").innerHTML = "<a href = 'eight.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Lionel Richie";
    document.querySelector(".century").innerHTML = "Lionel Richie's Hits";

    for (var i = 0; i < lionelRichie.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", lionelRichie[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = lionelrichieSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "lionelRichie") {

    document.querySelector("title").innerHTML = "Lionel Richie";
    document.querySelector(".back").innerHTML = "<a href = 'eight.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Lionel Richie";
    document.querySelector(".century").innerHTML = "Lionel Richie's Hits";

    for (var i = 0; i < lionelRichie.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", lionelRichie[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = lionelrichieSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "lionelRichie") {

    document.querySelector("title").innerHTML = "Lionel Richie";
    document.querySelector(".back").innerHTML = "<a href = 'eight.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Lionel Richie";
    document.querySelector(".century").innerHTML = "Lionel Richie's Hits";

    for (var i = 0; i < lionelRichie.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", lionelRichie[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = lionelrichieSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "lionelRichie") {

    document.querySelector("title").innerHTML = "Lionel Richie";
    document.querySelector(".back").innerHTML = "<a href = 'eight.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Lionel Richie";
    document.querySelector(".century").innerHTML = "Lionel Richie's Hits";

    for (var i = 0; i < lionelRichie.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", lionelRichie[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = lionelrichieSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "lionelRichie") {

    document.querySelector("title").innerHTML = "Lionel Richie";
    document.querySelector(".back").innerHTML = "<a href = 'eight.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Lionel Richie";
    document.querySelector(".century").innerHTML = "Lionel Richie's Hits";

    for (var i = 0; i < lionelRichie.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", lionelRichie[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = lionelrichieSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}
//1990

if (currentArtist == "lionelRichie") {

    document.querySelector("title").innerHTML = "Lionel Richie";
    document.querySelector(".back").innerHTML = "<a href = 'eight.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Lionel Richie";
    document.querySelector(".century").innerHTML = "Lionel Richie's Hits";

    for (var i = 0; i < lionelRichie.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", lionelRichie[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = lionelrichieSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "lionelRichie") {

    document.querySelector("title").innerHTML = "Lionel Richie";
    document.querySelector(".back").innerHTML = "<a href = 'eight.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Lionel Richie";
    document.querySelector(".century").innerHTML = "Lionel Richie's Hits";

    for (var i = 0; i < lionelRichie.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", lionelRichie[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = lionelrichieSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "lionelRichie") {

    document.querySelector("title").innerHTML = "Lionel Richie";
    document.querySelector(".back").innerHTML = "<a href = 'eight.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Lionel Richie";
    document.querySelector(".century").innerHTML = "Lionel Richie's Hits";

    for (var i = 0; i < lionelRichie.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", lionelRichie[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = lionelrichieSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "lionelRichie") {

    document.querySelector("title").innerHTML = "Lionel Richie";
    document.querySelector(".back").innerHTML = "<a href = 'eight.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Lionel Richie";
    document.querySelector(".century").innerHTML = "Lionel Richie's Hits";

    for (var i = 0; i < lionelRichie.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", lionelRichie[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = lionelrichieSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "lionelRichie") {

    document.querySelector("title").innerHTML = "Lionel Richie";
    document.querySelector(".back").innerHTML = "<a href = 'eight.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Lionel Richie";
    document.querySelector(".century").innerHTML = "Lionel Richie's Hits";

    for (var i = 0; i < lionelRichie.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", lionelRichie[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = lionelrichieSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}