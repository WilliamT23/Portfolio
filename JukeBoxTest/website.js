var artists = ["Madonna", "Michael Jackson", "Lionel Richie", "Prince", "Billy Joel"];

var urlParams = new URLSearchParams(window.location.search);
var currentArtist = urlParams.get('artist');

//Artists

//1980
var madonna = ["../JukeBoxTest/La Isla Bonita.mp3", "../JukeBoxTest/Like a Virgin.mp3", "../JukeBoxTest/Crazy for You.mp3", "../JukeBoxTest/Take a Bow.mp3"];
var madonnaTitles = ["La Isla Bonita", "Like a Virgin", "Crazy for You", "Take a Bow"];

var lionelRichie = ["../JukeBoxTest/LIONEL RICHIE - HELLO LYRICS.mp3", "../JukeBoxTest/Say You, Say Me.mp3", "../JukeBoxTest/Lionel Richie - You Are.mp3", "../JukeBoxTest/Diana Ross & Lionel Richie Endless Love 1981.mp3"];
var lionelrichieSongs = ["Hello", "Say You, Say Me", "You Are", "Endless Love"];

var michaelJackson = ["../JukeBoxTest/Michael Jackson & Paul McCartney - Say Say Say [Audio HQ] HD.mp3", "../JukeBoxTest/Billie Jean.mp3", "../JukeBoxTest/Beat It.mp3","../JukeBoxTest/Rock with You.mp3"];
var michaeljacksonSongs = ["Say Say Say", "Billie Jean", "Beat It", "Rock With You"];

var prince = ["../JukeBoxTest/When Doves Cry.mp3", "../JukeBoxTest/Kiss (45 Version).mp3", "../JukeBoxTest/Let's Go Crazy.mp3", "../JukeBoxTest/Cream.mp3"];
var princeSongs = ["When Doves Cry", "Kiss", "Let's Go Crazy", "Cream"];

var billyJoel = ["../JukeBoxTest/The Longest Time.mp3", "../JukeBoxTest/Billy Joel - It's Still Rock And Roll To Me (Audio).mp3", "../JukeBoxTest/We Didn't Start the Fire.mp3", "../JukeBoxTest/Uptown Girl.mp3"];
var billyjoelSongs = ["Longest Time", "It's Still Rock and Roll to Me", "We Didn't Start The Fire", "Uptown Girl"];

//1990
var stevieWonder = ["../JukeBoxTest/I Just Called To Say I Love You.mp3", "../JukeBoxTest/Ebony And Ivory.mp3", "../JukeBoxTest/Dionne Warwick - That's What Friends Are For.mp3", "../JukeBoxTest/Part-Time Lover.mp3"];
var steviewonderSongs = ["I Just Called to Say I Love You", "Ebony and Ivory", "That's What Friends Are For", "Part-Time Lover"];

var backstreet = ["../JukeBoxTest/I Want It That Way.mp3", "../JukeBoxTest/Backstreet Boys - Quit Playing Games (With My Heart) (Official Music Video).mp3", "../JukeBoxTest/Backstreet Boys - Everybody.mp3", "../JukeBoxTest/All I Have to Give.mp3"];
var backstreetSongs = ["I Want it That Way", "Quit Playing Games (With My Heart)", "Everybody", "All I Have to Give"];

var spiceGirls = ["../JukeBoxTest/Spice Girls - Spice - 1. Wannabe.mp3", "../JukeBoxTest/Say You'll Be There - Spice Girls (Spice).mp3", "../JukeBoxTest/Spice Up Your Life.mp3", "../JukeBoxTest/2 Become 1.mp3"];
var spicegirlsSongs = ["Wanna Be", "Say You'll Be There", "Spice Up Your Life", "2 Becomes 1"];

var nsync = ["../JukeBoxTest/Nsync - Bye Bye Bye.mp3", "../JukeBoxTest/It's Gonna Be Me.mp3", "../JukeBoxTest/[God Must Have Spent] A Little More Time On You (Remix).mp3", "../JukeBoxTest/Nsync - This I Promise You.mp3"];
var nsyncSongs = ["Bye Bye Bye", "It's Gonna Be Me", "(God Must Have Spent) A Little More Time On You", "This I Promise You"];

var aceofBase = ["../JukeBoxTest/The Sign.mp3", "../JukeBoxTest/All That She Wants (12 Version).mp3", "../JukeBoxTest/Don't Turn Around.mp3", "../JukeBoxTest/Cruel Summer.mp3"];
var aceofbaseSongs = ["The Sign", "All That She Wants", "Don't Turn Around","Cruel Summer"];

//2000
var beyonce = ["../JukeBoxTest/Independent Women, Pt. 1.mp3", "../JukeBoxTest/Irreplaceable.mp3", "../JukeBoxTest/Beyoncé - Baby Boy.mp3", "../JukeBoxTest/Crazy In Love.mp3"];
var beyonceSongs = ["Independent Women", "Irreplaceable", "Baby Boy", "Crazy For You"];

var mnm = ["../JukeBoxTest/Rap God.mp3", "../JukeBoxTest/The Real Slim Shady.mp3", "../JukeBoxTest/Stan.mp3", "../JukeBoxTest/Lose Yourself (Soundtrack Version).mp3"];
var mnmSongs = ["Rap God", "The Real Slim Shady", "Stan", "Lose Yourself"];

var ladyGaga = ["../JukeBoxTest/Lady Gaga - Poker Face (Audio).mp3", "../JukeBoxTest/Lady Gaga - Bad Romance (Audio).mp3", "../JukeBoxTest/Lady Gaga - Born This Way (Audio).mp3", "../JukeBoxTest/Lady Gaga - Just Dance (Audio).mp3"];
var ladygagaSongs = ["Poker Face", "Bad Romance", "Born This Way", "Just Dance"];

var coldplay = ["../JukeBoxTest/Shiver - Coldplay.mp3", "../JukeBoxTest/Parachutes.mp3", "../JukeBoxTest/Sparks.mp3", "../JukeBoxTest/We Never Change.mp3"];
var coldplaySongs = ["Shiver", "Parachutes", "Sparks", "We Never Change"];

var usher = ["../JukeBoxTest/Usher - U got it bad.mp3", "../JukeBoxTest/Yeah!.mp3", "../JukeBoxTest/OMG - Usher.mp3", "../JukeBoxTest/Burn (Confession Special Edition Version).mp3"];
var usherSongs = ["U Got It Bad", "Yeah!", "OMG", "Burn"];

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

if (currentArtist == "madonna") {

    document.querySelector("title").innerHTML = "Madonna";
    document.querySelector(".back").innerHTML = "<a href = 'eight.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Madonna";
    document.querySelector(".century").innerHTML = "Madonna's Hits";

    for (var i = 0; i < madonna.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", madonna[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = madonnaTitles [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "michaelJackson") {

    document.querySelector("title").innerHTML = "Michael Jackson";
    document.querySelector(".back").innerHTML = "<a href = 'eight.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Michael Jackson";
    document.querySelector(".century").innerHTML = "Michael Jackson's Hits";

    for (var i = 0; i < michaelJackson.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", michaelJackson[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = michaeljacksonSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "prince") {

    document.querySelector("title").innerHTML = "Prince";
    document.querySelector(".back").innerHTML = "<a href = 'eight.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Prince";
    document.querySelector(".century").innerHTML = "Prince's Hits";

    for (var i = 0; i < prince.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", prince[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = princeSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "billyJoel") {

    document.querySelector("title").innerHTML = "Billy Joel";
    document.querySelector(".back").innerHTML = "<a href = 'eight.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Billy Joel";
    document.querySelector(".century").innerHTML = "Billy Joel's Hits";

    for (var i = 0; i < billyJoel.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", billyJoel[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = billyjoelSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}
//1990

if (currentArtist == "stevieWonder") {

    document.querySelector("title").innerHTML = "Stevie Wonder";
    document.querySelector(".back").innerHTML = "<a href = 'nine.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Stevie Wonder";
    document.querySelector(".century").innerHTML = "Stevie Wonder's Hits";

    for (var i = 0; i < stevieWonder.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", stevieWonder[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = steviewonderSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "backstreet") {

    document.querySelector("title").innerHTML = "Backstreet Boys";
    document.querySelector(".back").innerHTML = "<a href = 'nine.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Backstreet Boys";
    document.querySelector(".century").innerHTML = "Backstreet Boys' Hits";

    for (var i = 0; i < backstreet.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", backstreet[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = backstreetSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "spiceGirls") {

    document.querySelector("title").innerHTML = "Spice Girls";
    document.querySelector(".back").innerHTML = "<a href = 'nine.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Spice Girls";
    document.querySelector(".century").innerHTML = "Spice Girls' Hits";

    for (var i = 0; i < spiceGirls.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", spiceGirls[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = spicegirlsSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "nsync") {

    document.querySelector("title").innerHTML = "NSYNC";
    document.querySelector(".back").innerHTML = "<a href = 'nine.html'> Back </a>";
    document.querySelector(".title").innerHTML = "NSYNC";
    document.querySelector(".century").innerHTML = "NSYNC's Hits";

    for (var i = 0; i < nsync.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", nsync[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = nsyncSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "aceofBase") {

    document.querySelector("title").innerHTML = "Ace of Base";
    document.querySelector(".back").innerHTML = "<a href = 'nine.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Ace of Base";
    document.querySelector(".century").innerHTML = "Ace of Base's Hits";

    for (var i = 0; i < aceofBase.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", aceofBase[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = aceofbaseSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

//2000

if (currentArtist == "beyonce") {

    document.querySelector("title").innerHTML = "Beyonce";
    document.querySelector(".back").innerHTML = "<a href = 'twothousand.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Beyonce";
    document.querySelector(".century").innerHTML = "Beyonce's Hits";

    for (var i = 0; i < beyonce.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", beyonce[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = beyonceSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "mnm") {

    document.querySelector("title").innerHTML = "Eminem";
    document.querySelector(".back").innerHTML = "<a href = 'twothousand.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Eminem";
    document.querySelector(".century").innerHTML = "Eminem's Hits";

    for (var i = 0; i < beyonce.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", mnm[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = mnmSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "ladyGaga") {

    document.querySelector("title").innerHTML = "Lady Gaga";
    document.querySelector(".back").innerHTML = "<a href = 'twothousand.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Lady Gaga";
    document.querySelector(".century").innerHTML = "Lady Gaga's Hits";

    for (var i = 0; i < beyonce.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", ladyGaga[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = ladygagaSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "coldplay") {

    document.querySelector("title").innerHTML = "Coldplay";
    document.querySelector(".back").innerHTML = "<a href = 'twothousand.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Coldplay";
    document.querySelector(".century").innerHTML = "Coldplay's Hits";

    for (var i = 0; i < beyonce.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", coldplay[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = coldplaySongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "usher") {

    document.querySelector("title").innerHTML = "Usher";
    document.querySelector(".back").innerHTML = "<a href = 'twothousand.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Usher";
    document.querySelector(".century").innerHTML = "Usher's Hits";

    for (var i = 0; i < usher.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", usher[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = usherSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}