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

//2001

var lifehouse = ["../JukeBoxTest/Whatever It Takes.mp3", "../JukeBoxTest/Lifehouse - First Time.mp3", "../JukeBoxTest/Lifehouse - Hanging By A Moment (Official Video).mp3", "../JukeBoxTest/Lifehouse - You and Me (Audio).mp3"];
var lifehouseSongs = ["Whatever It Takes", "First Time", "Hanging By A Moment", "You And Me"];

var alicia = ["../JukeBoxTest/No One.mp3", "../JukeBoxTest/Gangsta Lovin' (Edited).mp3", "../JukeBoxTest/Fallin'.mp3", "../JukeBoxTest/Empire State of Mind (Part II) Broken Down.mp3"];
var aliciaSongs = ["No One", "Gangsta Lovin", "Fallin", "Empire State of Mind"];

var janet = ["../JukeBoxTest/If.mp3", "../JukeBoxTest/Janet Jackson - Black Cat.mp3", "../JukeBoxTest/What Have You Done For Me Lately.mp3", "../JukeBoxTest/Miss You Much.mp3"];
var janetSongs = ["If", "Black Cat", "What Have You Done For Me Lately", "Miss You Much"];

var train = ["../JukeBoxTest/Train - Calling All Angels.mp3", "../JukeBoxTest/Train - Drive By.mp3", "../JukeBoxTest/Train - Drops Of Jupiter.mp3", "../JukeBoxTest/Train - Hey, Soul Sister (Official Music Video).mp3"];
var trainSongs = ["Calling All Angles", "Drive By", "Drops of Jupiter", "Hey Soul Sister"];

var jennifer = ["../JukeBoxTest/Jennifer Lopez - Ain't It Funny (Alt Version).mp3", "../JukeBoxTest/Secretly.mp3", "../JukeBoxTest/Dance With Me.mp3", "../JukeBoxTest/I'm Gonna Be Alright.mp3"];
var jenniferSongs = ["Ain't It Funny", "Secretly", "Dance With Me", "I'm Gonna Be Alright"];

//2002

var nickel = ["../JukeBoxTest/How You Remind Me.mp3", "../JukeBoxTest/Nickelback - Photograph [Audio].mp3", "../JukeBoxTest/Figured You Out.mp3", "../JukeBoxTest/Someday.mp3"];
var nickelSongs = ["How You Remind Me", "Photograph", "Figured You Out", "Someday"];

var ashanti = ["../JukeBoxTest/Foolish.mp3", "../JukeBoxTest/What's Luv (feat. Ashanti).mp3", "../JukeBoxTest/Rock Wit U (Awww Baby).mp3", "../JukeBoxTest/Ja Rule (Mesmerize) ft.Ashanti (HQ).mp3"];
var ashantiSongs = ["Foolish", "What's Luv", "Rock Wit U", "Mesmerize"];

var nelly = ["../JukeBoxTest/Where the Party At.mp3", "../JukeBoxTest/Dilemma.mp3", "../JukeBoxTest/Hot In Herre.mp3", "../JukeBoxTest/Call On Me - Janet Jackson feat. Nelly.mp3"];
var nellySongs = ["Where The Party At", "Dilemma", "Hot in Herre", "Call On Me"];

var calling = ["../JukeBoxTest/Wherever You Will Go.mp3", "../JukeBoxTest/The Calling - Our Lives (VIDEO).mp3", "../JukeBoxTest/The Calling - Anything (VIDEO).mp3", "../JukeBoxTest/The Calling - Adrienne.mp3"];
var callingSongs = ["Wherever You Will Go", "Our Lives", "Anything", "Adrienne"];

var vanessa = ["../JukeBoxTest/A Thousand Miles (Interlude).mp3", "../JukeBoxTest/Vanessa Carlton - Ordinary Day.mp3", "../JukeBoxTest/White Houses.mp3", "../JukeBoxTest/Big Yellow Taxi.mp3"];
var vanessaSongs = ["A Thousand Miles", "Ordinary Day", "White Houses", "Big Yellow Taxi"];

//2003

var cent = ["../JukeBoxTest/50 Cent - In Da Club (Squeaky Clean Version).mp3", "../JukeBoxTest/21 Questions.mp3", "../JukeBoxTest/Candy Shop.mp3", "../JukeBoxTest/Eminem Crack a Bottle (feat. Dr. Dre & 50 Cent) [CLEAN].mp3"];
var centSong = ["In Da Club", "21 Questions", "Candy Shop", "Crack A Bottle"];

var kelly = ["../JukeBoxTest/I'm Your Angel.mp3", "../JukeBoxTest/I Believe I Can Fly.mp3", "../JukeBoxTest/Ignition.mp3", "../JukeBoxTest/Satisfy You.mp3"];
var kellySongs = ["I'm Your Angel", "I Believe I Can Fly", "Ignition", "Satisfy You"];

var sean = ["../JukeBoxTest/Sia - Cheap Thrills (feat Sean Paul) [with download link].mp3", "../JukeBoxTest/Get Busy.mp3", "../JukeBoxTest/Temperature.mp3", "../JukeBoxTest/Baby Boy (feat. Beyoncé).mp3"];
var seanSongs = ["Cheap Thrills ft. Sean Paul", "Get Busy", "Temperature", "Baby Boy ft. Beyoncé"];

var doors = ["../JukeBoxTest/Kryptonite.mp3", "../JukeBoxTest/When I'm Gone.mp3", "../JukeBoxTest/Here Without You.mp3", "../JukeBoxTest/Let Me Go.mp3"];
var doorsSongs = ["Kryptonite", "When I'm Gone", "Here Without You", "Let Me Go"];

var matchBox = ["../JukeBoxTest/Bent.mp3", "../JukeBoxTest/Unwell.mp3", "../JukeBoxTest/If You're Gone.mp3", "../JukeBoxTest/How Far We've Come (Soundtrack Version).mp3"];
var matchboxSongs = ["Bent", "Unwell", "If You're Gone", "How Far We've Come"];

//2004

var spears = ["../JukeBoxTest/Sometimes.mp3", "../JukeBoxTest/Lucky (Remastered).mp3", "../JukeBoxTest/I'm a Slave 4 U (Remastered).mp3", "../JukeBoxTest/Pretty Girls.mp3"];
var spearsSongs = ["Sometimes", "Lucky", "I'm A Slave 4 U", "Pretty Girls"];

var maroon = ["../JukeBoxTest/Payphone.mp3", "../JukeBoxTest/Sugar.mp3", "../JukeBoxTest/One More Night.mp3", "../JukeBoxTest/Maroon 5 - Moves Like Jagger (Clean Version).mp3"];
var maroonSongs = ["Payphone", "Sugar", "One More Night", "Moves Like Jagger"];

var avril = ["../JukeBoxSongs/Complicated.mp3", "../JukeBoxSongs/I'm with You.mp3", "../JukeBoxSongs/My Happy Ending.mp3", "../JukeBoxSongs/Sk8er Boi.mp3"];
var avrilSongs = ["Complicated", "I'm With You", "My Happy Ending", "Sk8er Boi"];

var evanescence = ["../JukeBoxSongs/Bring Me To Life.mp3", "../JukeBoxSongs/My Immortal.mp3", "../JukeBoxSongs/What You Want.mp3", "../JukeBoxSongs/Call Me When You're Sober.mp3"];
var evanescenceSongs = ["Bring Me To Life", "My Immoral", "What You Want", "Call Me When You're Sober"];

var linkin = ["../JukeBoxSongs/In the End.mp3", "../JukeBoxSongs/New Divide.mp3", "../JukeBoxSongs/What I've Done.mp3", "../JukeBoxSongs/Numb.mp3"];
var linkinSongs = ["In the End", "New Divide", "What I've Done", "Numb"];

//2005

var mariah = ["../JukeBoxSongs/We Belong Together.mp3", "../JukeBoxSongs/One Sweet Day.mp3", "../JukeBoxSongs/Vision of Love.mp3", "../JukeBoxSongs/Love Takes Time.mp3"];
var mariahSongs = ["We Belong Together", "One Sweet Day", "Vision of Love", "Love Takes Time"];

var gwen = ["../JukeBoxSongs/Let Me Blow Ya Mind.mp3", "../JukeBoxSongs/Gwen Stefani - Hollaback Girl (Clean Radio Mix).mp3", "../JukeBoxSongs/The Sweet Escape.mp3", "../JukeBoxSongs/Rich Girl.mp3"];
var gwenSongs = ["Let Me Blow Ya Mind", "Hollaback Girl", "The Sweet Escape", "Rich Girl"];

var mario = ["../JukeBoxSongs/Let Me Love You.mp3", "../JukeBoxSongs/Break Up.mp3", "../JukeBoxSongs/Mario - Crying Out For Me.mp3", "../JukeBoxSongs/Mario - Just a Friend 2002.mp3"];
var marioSongs = ["Let Me Love You", "Break Up", "Crying Out For Me", "Just a Friend"];

var kellyy = ["../JukeBoxSongs/Since U Been Gone.mp3", "../JukeBoxSongs/My Life Would Suck Without You.mp3", "../JukeBoxSongs/Kelly Clarkson - Stronger (What Doesn't Kill You) [Official Audio].mp3", "../JukeBoxSongs/Behind These Hazel Eyes.mp3"];
var kellyySongs = ["Since U Been Gone", "My Life Would Suck Without You", "Stronger", "Behind These Hazel Eyes"];

var ciara = ["../JukeBoxSongs/Goodies.mp3", "../JukeBoxSongs/One, Two Step.mp3", "../JukeBoxSongs/Oh.mp3", "../JukeBoxSongs/Lose Control (feat. Ciara & Fat Man Scoop).mp3"];
var ciaraSongs = ["Goodies", "One, Two Step", "Oh", "Lose Control ft. Ciara & Fat Man Scoop"];

//2006

var chris = ["../JukeBoxSongs/Chris Brown - No Guidance (Audio) ft. Drake.mp3", "../JukeBoxSongs/Don't Wake Me Up.mp3", "../JukeBoxSongs/Say Goodbye.mp3", "../JukeBoxSongs/Turn Up the Music.mp3"];
var chrisSongs = ["No Guidance", "Don't Wake Me Up", "Say Goodbye", "Turn Up The Music"];

var rascal = ["../JukeBoxSongs/These Days (Remastered Version).mp3", "../JukeBoxSongs/Mayberry.mp3", "../JukeBoxSongs/Bless The Broken Road.mp3", "../JukeBoxSongs/Fast Cars And Freedom.mp3"];
var rascalSongs = ["These Days", "Mayberry", "Bless the Broken Road", "Fast Cars and Freedom"];

var neyo = ["../JukeBoxSongs/Ne-Yo - Because of You (Audio).mp3", "../JukeBoxSongs/Ne-Yo - Tonight ( Give Me Everything ) HQ 2011.mp3", "../JukeBoxSongs/So Sick.mp3", "../JukeBoxSongs/Keri Hilson - Knock You Down (feat. Kanye West and Ne-Yo) [HQ].mp3"];
var neyoSongs = ["Because of You", "Give Me Everything", "So Sick", "Knock You Down ft. Kanye West and Ne-Yo"];

var rihanna = ["../JukeBoxSongs/We Found Love.mp3", "../JukeBoxSongs/Umbrella.mp3", "../JukeBoxSongs/Love On The Brain.mp3", "../JukeBoxSongs/FourFiveSeconds.mp3"];
var rihannaSongs = ["We Found Love", "Umbrella", "Love on the Brain", "Four Five Seconds"];

var mary = ["../JukeBoxSongs/Gonna Breakthrough.mp3", "../JukeBoxSongs/Share My World.mp3", "../JukeBoxSongs/Be Without You - Mary J. Blige.mp3", "../JukeBoxSongs/Just Fine.mp3"];
var marySongs = ["Gonna Break Through", "Share My World", "Be Without You", "Just Fine"];

//2007

var akon = ["../JukeBoxSongs/The Sweet Escape.mp3", "../JukeBoxSongs/Dangerous (Clean Version).mp3", "../JukeBoxSongs/Don't Matter.mp3", "../JukeBoxSongs/Right Now (Na Na Na).mp3"];
var akonSong = ["The Sweet Escape", "Dangerous", "Don't Matter", "Right Now"];

var fergie = ["../JukeBoxSongs/Big Girls Don't Cry (Personal).mp3", "../JukeBoxSongs/Clumsy.mp3", "../JukeBoxSongs/Glamorous.mp3", "../JukeBoxSongs/L.A.LOVE (la la) (feat. YG).mp3"];
var fergieSongs = ["Big Girls Don't Cry", "Clumsy", "Glamorous", "L.A. Love"];

var justin = ["../JukeBoxSongs/Medley Summer Love Set the Mood (Prelude) (Clean).mp3", "../JukeBoxSongs/My Love.mp3", "../JukeBoxSongs/Rock Your Body.mp3", "../JukeBoxSongs/What Goes Around... Comes Around (Radio Edit).mp3"];
var justinSongs = ["Summer Love Set the Mood", "My Love", "Rock Your Body", "What Goes Around ... Comes Around"];

var daughtry = ["../JukeBoxSongs/It's Not Over.mp3", "../JukeBoxSongs/Daughtry - Home (Official).mp3", "../JukeBoxSongs/Daughtry - No Surprise (Official).mp3", "../JukeBoxSongs/Daughtry - Over You (Official).mp3"];
var daughtrySongs = ["It's Not Over", "Home", "No Surprise", "Over You"]; 

var carrie = ["../JukeBoxSongs/Before He Cheats.mp3", "../JukeBoxSongs/Carrie Underwood - Something in the Water (Audio).mp3", "../JukeBoxSongs/Heartbeat.mp3", "../JukeBoxSongs/Jesus Take The Wheel.mp3"]; 
var carrieSongs = ["Before He Cheats", "Something in the Water", "Heartbeat", "Jesus, Take The Wheel"];

//2008

var lil = ["../JukeBoxSongs/Look At Me Now.mp3", "../JukeBoxSongs/Motivation.mp3", "../JukeBoxSongs/You.mp3", "../JukeBoxSongs/The Motto.mp3"];
var lilSongs = ["Look At Me Now", "Motivation", "You", "The Motto"];
 
var leona = ["../JukeBoxSongs/Better in Time (Single Mix).mp3", "../JukeBoxSongs/Calum Scott, Leona Lewis - You Are The Reason (Duet Version) (Audio).mp3", "../JukeBoxSongs/Bleeding Love.mp3", "../JukeBoxSongs/Leona Lewis - One More Sleep (Official Audio).mp3"];
var leonaSongs = ["Better in Time", "You Are The Reason (Duet With Calum Scott)", "Bleeding Love", "One More Sleep"]

var jordin = ["../JukeBoxSongs/Jordin Sparks - One Wing.mp3", "../JukeBoxSongs/This Is My Now (Main Version).mp3", "../JukeBoxSongs/Tattoo (Main Version).mp3", "../JukeBoxSongs/No Air.mp3"];
var jordinSongs = ["One Wing", "This Is My Now", "Tattoo", "No Air"];

var ti = ["../JukeBoxSongs/Live Your Life (feat. Rihanna).mp3", "../JukeBoxSongs/I'm Serious By T.I..mp3", "../JukeBoxSongs/T.I. - King - Paperwork 01.mp3", "../JukeBoxSongs/T.I. - Trap Muzik (feat. Mac Boney).mp3"];
var tiSongs = ["Live Your Life ft. Rihanna", "I'm Serious", "King", "Trap Muzik"];

var flo = ["../JukeBoxSongs/Me & U - Flo Rida.mp3", "../JukeBoxSongs/All My Life.mp3", "../JukeBoxSongs/In The Ayer (Clean).mp3", "../JukeBoxSongs/Low (feat. T-Pain).mp3"];
var floSongs = ["Me and You", "All My Life", "In The Ayer", "Low ft. T-Pain"];

//2009

var taylor = ["../JukeBoxSongs/Fifteen.mp3", "../JukeBoxSongs/Taylor Swift - Eyes Open (Audio).mp3", "../JukeBoxSongs/Untouchable.mp3", "../JukeBoxSongs/22.mp3"];
var taylorSongs = ["Fifteen", "Eyes Open", "Untouchable", "22"];

var peas = ["../JukeBoxSongs/My Humps.mp3", "../JukeBoxSongs/Imma Be.mp3", "../JukeBoxSongs/Boom Boom Pow.mp3", "../JukeBoxSongs/I Gotta Feeling.mp3"];
var peasSongs = ["My Humps", "Imma Be", "Boom Boom Pow", "I Gotta Feeling"];

var miley = ["../JukeBoxSongs/Adore You.mp3", "../JukeBoxSongs/Send It On - (Lyrics) Feat. Miley Cyrus, Demi Lovato, Selena Gomez, And the Jonas Brothers.mp3", "../JukeBoxSongs/Miley Cyrus - Hoedown Throwdown (HQ).mp3", "../JukeBoxSongs/Miley Cyrus - When I Look At You ( lyrics ).mp3"];
var mileySongs = ["Adore You", "Send It On ft. Demi Lovato, Selena Gomez, and the Jonas Brothers", "Hoedown Throwdown", "When I Look At You "];

var pink = ["../JukeBoxSongs/Christina Aguilera, Pink, Mya and Lil Kim - Lady Marmalade Lyrics.mp3", "../JukeBoxSongs/Just Give Me a Reason.mp3", "../JukeBoxSongs/Raise Your Glass.mp3", "../JukeBoxSongs/P!nk - So What (Official Music Video).mp3"];
var pinkSongs = ["Lady Marmalade ft. Christina Aguilera, Mya, and Lil Kim", "Just Give Me a Reason", "Raise Your Glass", "So What"];

var leon = ["../JukeBoxSongs/Kings Of Leon - Waste A Moment (Audio).mp3", "../JukeBoxSongs/Use Somebody.mp3", "../JukeBoxSongs/Find Me - Kings Of Leon.mp3", "../JukeBoxSongs/WALLS.mp3"];
var leonSongs = ["Waste a Moment", "Use Somebody", "Find Me", "Walls"];

//2010

var direction = ["../JukeBoxSongs/Hey Angel.mp3", "../JukeBoxSongs/Infinity.mp3", "../JukeBoxSongs/Perfect.mp3", "../JukeBoxSongs/One Direction - Illusion (Audio).mp3"]; 
var directionSongs = ["Hey Angel", "Infinity", "Perfect", "Illusion"];

var ladyy = ["../JukeBoxSongs/American Honey.mp3", "../JukeBoxSongs/Need You Now.mp3", "../JukeBoxSongs/Lady Antebellum - Compass (Single).mp3", "../JukeBoxSongs/I Run To You.mp3"];
var ladyySongs = ["American Honey", "Need You Now", "Compass", "I Run to You"];

var kesha = ["../JukeBoxSongs/We R Who We R.mp3", "../JukeBoxSongs/Die Young.mp3", "../JukeBoxSongs/TiK ToK.mp3", "../JukeBoxSongs/Pitbull - Timber (Audio) ft. Ke$ha.mp3"];
var keshaSongs = ["We R Who We R", "Die Young", "TiK ToK", "Pitbull - Timber ft. Kesha"];

var justinn = ["../JukeBoxSongs/Baby.mp3", "../JukeBoxSongs/DJ Khaled No Brainer (Lyrics) ft. Justin Bieber, Chance the Rapper, Quavo.mp3", "../JukeBoxSongs/As Long As You Love Me.mp3", "../JukeBoxSongs/Where Are Ü Now (with Justin Bieber).mp3"];
var justinnSongs = ["Baby", "DJ Khaled - No Brainer ft. Justin Bieber, Chance the Rapper, and Quavo", "As Long As You Love Me", "Where Are Ü Now ft. Justin Bieber"];

var susan = ["../JukeBoxSongs/Susan Boyle - Someone to watch over me.mp3", "../JukeBoxSongs/Susan Boyle - Wish You Were Here.mp3", "../JukeBoxSongs/Susan Boyle- I dreamed a dream lyrics (CD Album).mp3", "../JukeBoxSongs/I Can Only Imagine.mp3"];
var susanSongs = ["Someone to Watch Over Me", "Wish You Were Here", "I Dreamed a Dream", "I Can Only Imagine"];

//2011

var cage = ["../JukeBoxSongs/In One Ear.mp3",  "../JukeBoxSongs/James Brown.mp3", "../JukeBoxSongs/Ain't No Rest for the Wicked.mp3", "../JukeBoxSongs/Tiny Little Robots.mp3"];
var cageSongs = ["In One Ear", "James Brown", "Ain't No Rest For The Wicked", "Tiny Little Robots"];

var sleeper = ["../JukeBoxSongs/Sleeper Agent - Get Burned (Official).mp3", "../JukeBoxSongs/Sleeper Agent - Get It Daddy.mp3", "../JukeBoxSongs/Sleeper Agent - That's My Baby (Official Video).mp3", "../JukeBoxSongs/Sleeper Agent - Waves (Official Video).mp3"];
var sleeperSongs = ["Get Burned", "Get It Daddy", "That's My Baby", "Waves"];

var foster = ["../JukeBoxSongs/Foster The People - Houdini.mp3", "../JukeBoxSongs/Foster the People - Helena Beat.mp3", "../JukeBoxSongs/I Would Do Anything For You - Foster The People.mp3", "../JukeBoxSongs/Waste - Foster The People.mp3", ];
var fosterSongs = ["Houdini", "Helena Beat", "I Would Do Anything For You", "Waste"];

var weekend = ["../JukeBoxSongs/High For This.mp3", "../JukeBoxSongs/The Weeknd - House Of Balloons Glass Table Girls.mp3", "../JukeBoxSongs/Till Dawn (Here Comes The Sun).mp3", "../JukeBoxSongs/The Weeknd - The Zone (without drake).mp3"];
var weekendSongs = ["High For This", "House Of Balloons", "Till Dawn", "The Zone"];

var tyler = ["../JukeBoxSongs/[CLEAN] Tyler, The Creator - EARFQUAKE.mp3", "../JukeBoxSongs/November - Tyler The Creator (Clean).mp3", "../JukeBoxSongs/Tyler, the Creator - Sandwitches.mp3", "../JukeBoxSongs/TYLER, THE CREATOR - SLATER (CLEAN).mp3"];
var tylerSongs = ["Earfquake", "November", "Sandwitches", "Slater"];

//2012

var nicki = ["../JukeBoxSongs/Va Va Voom.mp3", "../JukeBoxSongs/Curious George - Nicki Minaj.mp3", "../JukeBoxSongs/Masquerade.mp3", "../JukeBoxSongs/Massive Attack.mp3"];
var nickiSongs = ["Va Va Voom", "Curious George", "Masquerade", "Massive Attack"];

var lmfao = ["../JukeBoxSongs/LMFAO - Sorry For Party Rocking.mp3", "../JukeBoxSongs/LMFAO - Yes.mp3", "../JukeBoxSongs/I'm In Miami Trick (Edited).mp3", "../JukeBoxSongs/Shots.mp3"];
var lmfaoSongs = ["Sorry For Party Rocking", "Yes", "I'm In Miami", "Shots"];

var jason = ["../JukeBoxSongs/Rearview Town.mp3", "../JukeBoxSongs/Take A Little Ride.mp3", "../JukeBoxSongs/Night Train.mp3", "../JukeBoxSongs/Wheels Rollin'.mp3"];
var jasonSongs = ["Rearview Town", "Take A Little Ride", "Night Train", "Wheels Rollin'"];

var luke = ["../JukeBoxSongs/Luke Bryan - Suntan City.mp3", "../JukeBoxSongs/Little Bit Later On.mp3", "../JukeBoxSongs/Shake The Sand.mp3", "../JukeBoxSongs/Spring Break-Up.mp3"];
var lukeSongs = ["Suntan City", "Little Bit Later", "Shake The Sand", "Spring Break-Up"];
 
var carly = ["../JukeBoxSongs/Call Me Maybe.mp3", "../JukeBoxSongs/Carly Rae Jepsen - Just A Step Away.mp3", "../JukeBoxSongs/Carly Rae Jepsen - Melt with you.mp3", "../JukeBoxSongs/Carly Rae Jepsen This Kiss (Official Audio).mp3"];
var carlySongs = ["Call Me Maybe", "Just A Step Away", "Melt With You", "This Kiss"];

//2013

var bruno = ["../JukeBoxSongs/When I Was Your Man.mp3", "../JukeBoxSongs/Grenade.mp3", "../JukeBoxSongs/Locked Out of Heaven.mp3", "../JukeBoxSongs/Just the Way You Are.mp3"];
var brunoSongs = ["When I Was Your Man", "Grenade", "Locked Out of Heaven", "Just The Way You Are"];

var imagine = ["../JukeBoxSongs/Imagine Dragons - Radioactive.mp3", "../JukeBoxSongs/Imagine Dragons - Amsterdam.mp3", "../JukeBoxSongs/Imagine Dragons - Demons.mp3", "../JukeBoxSongs/Hear Me.mp3"];
var imagineSongs = ["Radioactive", "Amsterdam", "Demons", "Hear Me"];

var selena = ["../JukeBoxSongs/Come & Get It.mp3", "../JukeBoxSongs/Slow Down.mp3", "../JukeBoxSongs/Forget Forever.mp3", "../JukeBoxSongs/Write Your Name.mp3"];
var selenaSongs = ["Come and Get It", "Slow Down", "Forget Forever", "Write Your Name"];

var demi = ["../JukeBoxSongs/give me love -demi lovato (audio).mp3", "../JukeBoxSongs/Demi Lovato - In Case (Audio).mp3", "../JukeBoxSongs/Demi Lovato - Nightingale (Audio).mp3", "../JukeBoxSongs/Demi Lovato - Warrior (Audio).mp3"];
var demiSongs = ["Give Me Love", "In Case", "Nightingale", "Warrior"];

var ed = ["../JukeBoxSongs/Thinking out Loud.mp3", "../JukeBoxSongs/The A Team.mp3", "../JukeBoxSongs/Shape of You.mp3", "../JukeBoxSongs/Sing.mp3"];
var edSongs = ["Thinking Out Loud", "The A Team", "Shape of You", "Sing"];

//2014

var ariana = ["../JukeBoxSongs/Intro.mp3", "../JukeBoxSongs/Jessie J, Ariana Grande, Nicki Minaj - Bang Bang (Audio).mp3", "../JukeBoxSongs/One Last Time.mp3", "../JukeBoxSongs/Break Free.mp3"];
var arianaSongs = ["Intro", "Bang Bang ft . Nicki Manaj and Jessie J", "One Last Time", "Break Free"];

var iggy = ["../JukeBoxSongs/Iggy Azalea Million Dollar Dream Lyrics HD.mp3", "../JukeBoxSongs/Impossible Is Nothing.mp3", "../JukeBoxSongs/Me, Myself, My Money.mp3", "../JukeBoxSongs/Work.mp3"];
var iggySongs = ["Million Dollar Dream", "Impossible Is Nothing", "Me, Myself, and Money", "Work"];

var john = ["../JukeBoxSongs/Work.mp3", "../JukeBoxSongs/All of Me.mp3", "../JukeBoxSongs/Ordinary People.mp3", "../JukeBoxSongs/Green Light.mp3"];
var johnSongs = ["Work", "All of Me", "Ordinary People", "Green Light"];

var pharrell = ["../JukeBoxSongs/Pharrell Williams - Happy (Official Music Video).mp3", "../JukeBoxSongs/Lost Queen.mp3", "../JukeBoxSongs/Pharrell Williams - Brand New (GIRL).mp3", "../JukeBoxSongs/Pharrell Williams - Hunter.mp3"];
var pharrellSongs = ["Happy", "Lost Queen", "Brand New", "Hunter"];

var republic = ["../JukeBoxSongs/Counting Stars.mp3", "../JukeBoxSongs/Apologize.mp3", "../JukeBoxSongs/Good Life.mp3", "../JukeBoxSongs/Love Runs Out.mp3"];
var republicSongs = ["Counting Stars", "Apologize", "Good Life", "Love Runs Out"];

//2015

var fetty = ["../JukeBoxSongs/Trap Queen.mp3", "../JukeBoxSongs/679 (feat. Remy Boyz).mp3", "../JukeBoxSongs/My Way (Feat. Monty).mp3", "../JukeBoxSongs/Again.mp3"];
var fettySongs = ["Trap Queen", "679", "My Way", "Again"];

var meghan = ["../JukeBoxSongs/All About That Bass.mp3", "../JukeBoxSongs/Meghan Trainor - Like I'm Gonna Lose You (Official Audio) ft. John Legend.mp3", "../JukeBoxSongs/MEGHAN TRAINOR - AFTER YOU (Audio).mp3", "../JukeBoxSongs/3am.mp3"];
var meghanSongs = ["All About That Bass", "Like I'm Gonna Lose You", "After You", "3am"];

var sam = ["../JukeBoxSongs/Writing's On The Wall.mp3", "../JukeBoxSongs/Freddy Verano ft. Sam Smith - Moments.mp3", "../JukeBoxSongs/Sam Smith- My Funny Valentine [Mp3 Download].mp3", "../JukeBoxSongs/Disclosure ft Sam Smith- Hotline Bling + Lyrics HQ.mp3"];
var samSongs = ["Writing's On The Wall", "Freddy Verano - Moments ft. Sam Smith", "My Funny Valentine", "Hotline Bling"];

var mark = ["../JukeBoxSongs/Mark Ronson - I Can't Lose (With Lyrics).mp3", "../JukeBoxSongs/Uptown's First Finale.mp3", "../JukeBoxSongs/Leaving Los Feliz.mp3", "../JukeBoxSongs/Feel Right.mp3"];
var markSongs = ["I Can't Lose", "Uptown's First Finale", "Leaving Los Feliz", "Feel Right"];

var hozier = ["../JukeBoxSongs/Take Me to Church.mp3", "../JukeBoxSongs/From Eden.mp3", "../JukeBoxSongs/Like Real People Do (Live in America).mp3", "../JukeBoxSongs/Nina Cried Power.mp3"];
var hozierSongs = ["Take Me to Church", "From Eden", "Like Real People Do", "Nina Cried Power"];

//2016

var adele = ["../JukeBoxSongs/Send My Love (To Your New Lover).mp3", "../JukeBoxSongs/Million Years Ago.mp3", "../JukeBoxSongs/Remedy.mp3", "../JukeBoxSongs/All I Ask.mp3"];
var adeleSongs = ["Send My Love", "Million Years Ago", "Remedy", "All I Ask"];

var pilots = ["../JukeBoxSongs/Stressed Out.mp3", "../JukeBoxSongs/Lane Boy.mp3", "../JukeBoxSongs/Heavydirtysoul.mp3", "../JukeBoxSongs/Goner.mp3"];
var pilotsSongs = ["Stressed Out", "Lane Boy", "Heavydirtysoul", "Goner"];

var shawn = ["../JukeBoxSongs/Shawn Mendes - Bring It Back (Audio).mp3", "../JukeBoxSongs/Shawn Mendes - I Don't Even Know Your Name (Audio).mp3", "../JukeBoxSongs/Shawn Mendes - Never Be Alone (Audio).mp3", "../JukeBoxSongs/Shawn Mendes - Show You (Audio).mp3"];
var shawnSongs = ["Bring It Back", "I Don't Know Your Name", "Never Be Alone", "Show You"];

var future = ["../JukeBoxSongs/Kno The Meaning.mp3", "../JukeBoxSongs/Slave Master.mp3", "../JukeBoxSongs/DRAKE FEAT FUTURE PLASTIC BAG (OFFICIAL AUDIO).mp3", "../JukeBoxSongs/Colossal.mp3"];
var futureSongs = ["Kno The Meaning", "Slave Master", "Drake - Plastic Bags ft. Future", "Colossal"];

var bruce = ["../JukeBoxSongs/Born in the U.S.A..mp3", "../JukeBoxSongs/Glory Days.mp3", "../JukeBoxSongs/War (Live at LA Coliseum, Los Angeles, CA - September 1985).mp3", "../JukeBoxSongs/This Land is Your Land (Live at Nassau Coliseum, Uniondale, NY - December 1980).mp3"];
var bruceSongs = ["Born in the U.S.A", "Glory Days", "War (Live)", "This is Your Land (Live)"];

//2017

var bts = ["../JukeBoxSongs/Go Go.mp3", "../JukeBoxSongs/BTS - Come Back Home (Color Coded HanRomEng Lyrics) correction in subs.mp3", "../JukeBoxSongs/Spring Day.mp3", "../JukeBoxSongs/Pied Piper.mp3"];
var btsSongs = ["Go Go", "Come Back Home", "Spring Day", "Pied Piper"];

var astro = ["../JukeBoxSongs/ASTRO (아스트로) - ALWAYS YOU (너잖아) LYRICS (Color Coded EngRomHan가사).mp3",  "../JukeBoxSongs/ASTRO (아스트로) - All Night (전화해)('The 1st Album'[All Light]).mp3", "../JukeBoxSongs/ASTRO (아스트로) - CRAZY SEXY COOL (니가 불어와) Lyrics [Color CodedHanRomEng].mp3", "../JukeBoxSongs/[ COLOR CODED LYRICS ] ASTRO - INNOCENTFIRST LOVE ( 아스트로- 픗사랑 ) [ HANROMENG ] AUDIO BASED.mp3"];
var astroSongs = ["Always You", "All Night", "Crazy Sexy Cool", "Innocent First Love"];

var chainsmokers = ["../JukeBoxSongs/The Chainsmokers - Bloodstream (Audio).mp3", "../JukeBoxSongs/The Chainsmokers - Break Up Every Night (Audio).mp3", "../JukeBoxSongs/The Chainsmokers - It Won't Kill Ya ft. Louane (Audio).mp3", "../JukeBoxSongs/The Chainsmokers - Wake Up Alone ft. Jhené Aiko (Audio).mp3"];
var chainsmokersSongs = ["Bloodstream", "Break Up Every Night", "It Won't Kill Ya ft. Louane", "Wake Up Alone ft. Jhené Aiko"];

var migos = ["../JukeBoxSongs/Brown Paper Bag.mp3", "../JukeBoxSongs/Migos - Call Casting [CLEAN VERSION].mp3", "../JukeBoxSongs/Migos - What It Do.mp3", "../JukeBoxSongs/Migos ft. Gucci Mane Slippery (clean).mp3"];
var migosSongs = ["Brown Paper Bag", "Call Casting", "What It Do", "Slippery ft. Gucci Mane"];

var u2 = ["../JukeBoxSongs/Book Of Your Heart.mp3", "../JukeBoxSongs/Love Is Bigger Than Anything In Its Way.mp3", "../JukeBoxSongs/U2 - Landlady.mp3", "../JukeBoxSongs/U2 - Youre The Best Thing About Me (Lyric Video).mp3"];
var u2Songs = ["Book Of Your Heart", "Love Is Bigger Than Anything In Its Way", "Landlady", "You're The Best Thing About Me"];

//2018

var drake = ["../JukeBoxSongs/In My Feelings.mp3", "../JukeBoxSongs/Drake - After Dark (Lyrics).mp3", "../JukeBoxSongs/Drake - Ratchet Happy Birthday (OFFICIAL).mp3", "../JukeBoxSongs/Nonstop.mp3"];
var drakeSongs = ["In My Feelings", "After Dark", "Ratchet Happy Birthday", "Nonstop"];

var post = ["../JukeBoxSongs/Sunflower (Spider-Man Into the Spider-Verse).mp3", "../JukeBoxSongs/Spoil My Night.mp3", "../JukeBoxSongs/Jonestown (Interlude).mp3", "../JukeBoxSongs/Rich & Sad.mp3"];
var postSongs = ["Sunflower", "Spoil My Night", "Jonestown", "Rich and Sad"];

var xxx = ["../JukeBoxSongs/before I close my eyes.mp3", "../JukeBoxSongs/the remedy for a broken heart (why am I so in love).mp3", "../JukeBoxSongs/XXXTENTACION - Moonlight (clean).mp3", "../JukeBoxSongs/XXXTENTACION - changes.mp3"];
var xxxSongs = ["Before I Close My Eyes", "The Remedy For a Broken Heart", "Moonlight", "Changes"];

var camila = ["../JukeBoxSongs/Camila Cabello - Havana (Official Live Audio).mp3", "../JukeBoxSongs/Inside Out.mp3", "../JukeBoxSongs/Camila Cabello - Into It (Official Audio).mp3", "../JukeBoxSongs/Camila Cabello ft. Pharrell - Sangria Wine (Official Audio).mp3"];
var camilaSongs = ["Havana", "Inside Out", "Into It", "Sangria Wine ft. Pharrell"];

var dua = ["../JukeBoxSongs/Calvin Harris, Dua Lipa - One Kiss (Official Video).mp3", "../JukeBoxSongs/Silk City, Dua Lipa - Electricity (Lyrics) ft. Diplo, Mark Ronson.mp3", "../JukeBoxSongs/New Rules.mp3", "../JukeBoxSongs/IDGAF.mp3"];
var duaSongs = ["Calvin Harris - One Kiss ft. Dua Lipa", "Silk City, Dua Lipa - Electricity ft. Diplo, Mark Ronson", "New Rules", "IDGAF"];

//2019

var billie = ["../JukeBoxSongs/listen before i go.mp3", "../JukeBoxSongs/Billie Eilish - When I Was Older (Lyrics).mp3", "../JukeBoxSongs/Billie Eilish - you should see me in a crown (Vertical Video).mp3", "../JukeBoxSongs/Billie Eilish - bad guy (Official Audio).mp3"];
var billieSongs = ["Listen Before I Go", "When I Was Older", "You Should See Me In A Crown", "Bad Guy"];

var jonas = ["../JukeBoxSongs/Sucker.mp3", "../JukeBoxSongs/Cool.mp3", "../JukeBoxSongs/Strangers.mp3", "../JukeBoxSongs/Hesitate.mp3"];
var jonasSongs = ["Sucker", "Cool", "Strangers", "Hesitate"];

var panic = ["../JukeBoxSongs/High Hopes.mp3", "../JukeBoxSongs/ME! (feat. Brendon Urie of Panic! At The Disco).mp3", "../JukeBoxSongs/Death of a Bachelor.mp3", "../JukeBoxSongs/I Write Sins Not Tragadies- Panic! At The Disco.mp3"];
var panicSongs = ["High Hopes", "Taylor Swift - ME! ft. Panic at the Disco and Brendon Urie", "Death of a Bachelor", "I Write Sins Not Tragadies"];

var cardi = ["../JukeBoxSongs/Maroon 5, Cardi B - Girls Like You (Lyrics).mp3", "../JukeBoxSongs/Bruno Mars ft. Cardi B - Finesse (Lyrics).mp3", "../JukeBoxSongs/I Like It.mp3", "../JukeBoxSongs/Please Me.mp3"];
var cardiSongs = ["Girls Like You - Maroon 5 and Cardi B", "Bruno Mars - Finesse ft. Cardi B  ", "I Like It", "Please Me"];

var dj = ["../JukeBoxSongs/You Stay.mp3", "../JukeBoxSongs/DJ Khaled - Higher (Audio) ft. Nipsey Hussle, John Legend.mp3", "../JukeBoxSongs/DJ Khaled - Holy Ground (Audio) ft. Buju Banton.mp3", "../JukeBoxSongs/DJ Khaled - Thank You (Audio) ft. Big Sean.mp3"];
var djSongs = ["You Stay", "Higher ft. Nipsey Hussle and John Legend", "Holy Ground ft. Buju Banton", "Thank You ft. Big Sean"];

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

        var imgNode = document.createElement("IMG");
        
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


//2001


if (currentArtist == "lifehouse") {

    document.querySelector("title").innerHTML = "LifeHouse";
    document.querySelector(".back").innerHTML = "<a href = 'one.html'> Back </a>";
    document.querySelector(".title").innerHTML = "LifeHouse";
    document.querySelector(".century").innerHTML = "LifeHouse's Hits";

    for (var i = 0; i < lifehouse.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", lifehouse[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = lifehouseSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "alicia") {

    document.querySelector("title").innerHTML = "Alicia Keys";
    document.querySelector(".back").innerHTML = "<a href = 'one.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Alicia Keys";
    document.querySelector(".century").innerHTML = "Alicia Key's Hits";

    for (var i = 0; i < alicia.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", alicia[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = aliciaSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "janet") {

    document.querySelector("title").innerHTML = "Janet Jackson";
    document.querySelector(".back").innerHTML = "<a href = 'one.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Janet Jackson";
    document.querySelector(".century").innerHTML = "Janet Jackson's Hits";

    for (var i = 0; i < janet.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", janet[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = janetSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "train") {

    document.querySelector("title").innerHTML = "Train";
    document.querySelector(".back").innerHTML = "<a href = 'one.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Train";
    document.querySelector(".century").innerHTML = "Train's Hits";

    for (var i = 0; i < train.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", train[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = trainSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "jennifer") {

    document.querySelector("title").innerHTML = "Jennifer Lopez";
    document.querySelector(".back").innerHTML = "<a href = 'one.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Jennifer Lopez";
    document.querySelector(".century").innerHTML = "Jennifer Jopez's Hits";

    for (var i = 0; i < jennifer.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", jennifer[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = jenniferSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}


//2002


if (currentArtist == "nickel") {

    document.querySelector("title").innerHTML = "NickelBack";
    document.querySelector(".back").innerHTML = "<a href = 'two.html'> Back </a>";
    document.querySelector(".title").innerHTML = "NickelBack";
    document.querySelector(".century").innerHTML = "NickelBack's Hits";

    for (var i = 0; i < nickel.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", nickel[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = nickelSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "ashanti") {

    document.querySelector("title").innerHTML = "Ashanti";
    document.querySelector(".back").innerHTML = "<a href = 'two.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Ashanti";
    document.querySelector(".century").innerHTML = "Ashanti's Hits";

    for (var i = 0; i < ashanti.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", ashanti[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = ashantiSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "nelly") {

    document.querySelector("title").innerHTML = "Nelly";
    document.querySelector(".back").innerHTML = "<a href = 'two.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Ashanti";
    document.querySelector(".century").innerHTML = "Ashanti's Hits";

    for (var i = 0; i < nelly.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", nelly[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = nellySongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "calling") {

    document.querySelector("title").innerHTML = "The Calling";
    document.querySelector(".back").innerHTML = "<a href = 'two.html'> Back </a>";
    document.querySelector(".title").innerHTML = "The Calling";
    document.querySelector(".century").innerHTML = "The Calling's Hits";

    for (var i = 0; i < calling.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", calling[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = callingSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "vanessa") {

    document.querySelector("title").innerHTML = "Vanessa Carlton";
    document.querySelector(".back").innerHTML = "<a href = 'two.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Vanessa Carlton";
    document.querySelector(".century").innerHTML = "Vanessa Carlton's Hits";

    for (var i = 0; i < vanessa.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", vanessa[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = vanessaSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}


//2003


if (currentArtist == "cent") {

    document.querySelector("title").innerHTML = "50 Cents";
    document.querySelector(".back").innerHTML = "<a href = 'three.html'> Back </a>";
    document.querySelector(".title").innerHTML = "50 Cents";
    document.querySelector(".century").innerHTML = "50 Cents's Hits";

    for (var i = 0; i < cent.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", cent[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = centSong [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "kelly") {

    document.querySelector("title").innerHTML = "R. Kelly";
    document.querySelector(".back").innerHTML = "<a href = 'three.html'> Back </a>";
    document.querySelector(".title").innerHTML = "R. Kelly";
    document.querySelector(".century").innerHTML = "R. Kelly's Hits";

    for (var i = 0; i < kelly.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", kelly[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = kellySongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "sean") {

    document.querySelector("title").innerHTML = "Sean Paul";
    document.querySelector(".back").innerHTML = "<a href = 'three.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Sean Paul";
    document.querySelector(".century").innerHTML = "Sean Paul's Hits";

    for (var i = 0; i < sean.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", sean[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = seanSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "doors") {

    document.querySelector("title").innerHTML = "3 Doors Down";
    document.querySelector(".back").innerHTML = "<a href = 'three.html'> Back </a>";
    document.querySelector(".title").innerHTML = "3 Doors Down";
    document.querySelector(".century").innerHTML = "3 Doors Down's Hits";

    for (var i = 0; i < doors.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", doors[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = doorsSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "matchBox") {

    document.querySelector("title").innerHTML = "3 Doors Down";
    document.querySelector(".back").innerHTML = "<a href = 'three.html'> Back </a>";
    document.querySelector(".title").innerHTML = "3 Doors Down";
    document.querySelector(".century").innerHTML = "3 Doors Down's Hits";

    for (var i = 0; i < matchBox.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", matchBox[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = matchboxSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}


//2004


if (currentArtist == "spears") {

    document.querySelector("title").innerHTML = "Brittney Spears";
    document.querySelector(".back").innerHTML = "<a href = 'four.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Brittney Spears";
    document.querySelector(".century").innerHTML = "Brittney Spears's Hits";

    for (var i = 0; i < spears.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
        

        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", spears[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = spearsSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "maroon") {

    document.querySelector("title").innerHTML = "Maroon 5";
    document.querySelector(".back").innerHTML = "<a href = 'four.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Maroon 5";
    document.querySelector(".century").innerHTML = "Maroon 5's Hits";

    for (var i = 0; i < maroon.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", maroon[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = maroonSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "avril") {

    document.querySelector("title").innerHTML = "Avril Lavigne";
    document.querySelector(".back").innerHTML = "<a href = 'four.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Avril Lavigne";
    document.querySelector(".century").innerHTML = "Avril Lavigne's Hits";

    for (var i = 0; i < avril.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", avril[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = avrilSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "evanescence") {

    document.querySelector("title").innerHTML = "Evanescence";
    document.querySelector(".back").innerHTML = "<a href = 'four.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Evanescence";
    document.querySelector(".century").innerHTML = "Evanescence's Hits";

    for (var i = 0; i < evanescence.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", evanescence[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = evanescenceSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "linkin") {

    document.querySelector("title").innerHTML = "Linkin Park";
    document.querySelector(".back").innerHTML = "<a href = 'four.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Linkin Park";
    document.querySelector(".century").innerHTML = "Linkin Park's Hits";

    for (var i = 0; i < linkin.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", linkin[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = linkinSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}


//2005


if (currentArtist == "mariah") {

    document.querySelector("title").innerHTML = "Mariah Carey";
    document.querySelector(".back").innerHTML = "<a href = 'five.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Mariah Carey";
    document.querySelector(".century").innerHTML = "Mariah Carey's Hits";

    for (var i = 0; i < mariah.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", mariah[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = mariahSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "gwen") {

    document.querySelector("title").innerHTML = "Gwen Stefani";
    document.querySelector(".back").innerHTML = "<a href = 'five.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Gwen Stefani";
    document.querySelector(".century").innerHTML = "Gwen Stefani's Hits";

    for (var i = 0; i < gwen.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", gwen[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = gwenSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "mario") {

    document.querySelector("title").innerHTML = "Mario";
    document.querySelector(".back").innerHTML = "<a href = 'five.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Mario";
    document.querySelector(".century").innerHTML = "Mario's Hits";

    for (var i = 0; i < mario.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", mario[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = marioSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "kellyy") {

    document.querySelector("title").innerHTML = "Kelly Clarkson";
    document.querySelector(".back").innerHTML = "<a href = 'five.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Kelly Clarkson";
    document.querySelector(".century").innerHTML = "Kelly Clarkson's Hits";

    for (var i = 0; i < kellyy.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", kellyy[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = kellyySongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "ciara") {

    document.querySelector("title").innerHTML = "Kelly Clarkson";
    document.querySelector(".back").innerHTML = "<a href = 'five.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Kelly Clarkson";
    document.querySelector(".century").innerHTML = "Kelly Clarkson's Hits";

    for (var i = 0; i < ciara.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", ciara[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = ciaraSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}


//2006


if (currentArtist == "chris") {

    document.querySelector("title").innerHTML = "Chris Brown";
    document.querySelector(".back").innerHTML = "<a href = 'six.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Chris Brown";
    document.querySelector(".century").innerHTML = "Chris Brown's Hits";

    for (var i = 0; i < chris.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", chris[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = chrisSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "rascal") {

    document.querySelector("title").innerHTML = "Chris Brown";
    document.querySelector(".back").innerHTML = "<a href = 'six.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Chris Brown";
    document.querySelector(".century").innerHTML = "Chris Brown's Hits";

    for (var i = 0; i < rascal.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", rascal[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = rascalSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "neyo") {

    document.querySelector("title").innerHTML = "Ne-Yo";
    document.querySelector(".back").innerHTML = "<a href = 'six.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Ne-Yo";
    document.querySelector(".century").innerHTML = "Ne-Yo's Hits";

    for (var i = 0; i < neyo.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", neyo[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = neyoSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "rihanna") {

    document.querySelector("title").innerHTML = "Rihanna";
    document.querySelector(".back").innerHTML = "<a href = 'six.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Rihanna";
    document.querySelector(".century").innerHTML = "Rihanna's Hits";

    for (var i = 0; i < rihanna.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", rihanna[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = rihannaSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "mary") {

    document.querySelector("title").innerHTML = "Mary J. Blige";
    document.querySelector(".back").innerHTML = "<a href = 'six.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Mary J. Blige";
    document.querySelector(".century").innerHTML = "Mary J. Blige's Hits";

    for (var i = 0; i < mary.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", mary[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = marySongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}


//2007


if (currentArtist == "akon") {

    document.querySelector("title").innerHTML = "Akon";
    document.querySelector(".back").innerHTML = "<a href = 'seven.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Akon";
    document.querySelector(".century").innerHTML = "Akon's Hits";

    for (var i = 0; i < akon.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", akon[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = akonSong [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "fergie") {

    document.querySelector("title").innerHTML = "Fergie";
    document.querySelector(".back").innerHTML = "<a href = 'seven.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Fergie";
    document.querySelector(".century").innerHTML = "Fergie's Hits";

    for (var i = 0; i < fergie.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", fergie[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = fergieSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "justin") {

    document.querySelector("title").innerHTML = "Justin Timberlake";
    document.querySelector(".back").innerHTML = "<a href = 'seven.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Justin Timberlake";
    document.querySelector(".century").innerHTML = "Justin Timberlake's Hits";

    for (var i = 0; i < justin.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", justin[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = justinSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "daughtry") {

    document.querySelector("title").innerHTML = "Justin Timberlake";
    document.querySelector(".back").innerHTML = "<a href = 'seven.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Justin Timberlake";
    document.querySelector(".century").innerHTML = "Justin Timberlake's Hits";

    for (var i = 0; i < daughtry.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", daughtry[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = daughtrySongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "carrie") {

    document.querySelector("title").innerHTML = "Carrie Underwood";
    document.querySelector(".back").innerHTML = "<a href = 'seven.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Carrie Underwood";
    document.querySelector(".century").innerHTML = "Carrie Underwood's Hits";

    for (var i = 0; i < carrie.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", carrie[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = carrieSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}


//2008


if (currentArtist == "lil") {

    document.querySelector("title").innerHTML = "Lil Wayne";
    document.querySelector(".back").innerHTML = "<a href = 'eightt.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Lil Wayne";
    document.querySelector(".century").innerHTML = "Lil Wayne's Hits";

    for (var i = 0; i < lil.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", lil[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = lilSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "leona") {

    document.querySelector("title").innerHTML = "Leona Lewis";
    document.querySelector(".back").innerHTML = "<a href = 'eightt.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Leona Lewis";
    document.querySelector(".century").innerHTML = "Leona Lewis's Hits";

    for (var i = 0; i < leona.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", leona[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = leonaSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "jordin") {

    document.querySelector("title").innerHTML = "Jordin Sparks";
    document.querySelector(".back").innerHTML = "<a href = 'eightt.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Jording Sparks";
    document.querySelector(".century").innerHTML = "Jordin Sparks's Hits";

    for (var i = 0; i < jordin.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", jordin[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = jordinSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "ti") {

    document.querySelector("title").innerHTML = "T.I.";
    document.querySelector(".back").innerHTML = "<a href = 'eightt.html'> Back </a>";
    document.querySelector(".title").innerHTML = "T.I";
    document.querySelector(".century").innerHTML = "T.I's Hits";

    for (var i = 0; i < ti.length; i++) {

        var bodyNode = document.querySelector("body");

        bodyNode.setAttribute("H3", "Caution: Author Applied Explicit Language")

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", ti[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = tiSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "flo") {

    document.querySelector("title").innerHTML = "Flo Rida";
    document.querySelector(".back").innerHTML = "<a href = 'eightt.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Flo Rida";
    document.querySelector(".century").innerHTML = "Flo Rida's Hits";

    for (var i = 0; i < flo.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", flo[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = floSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}


//2009


if (currentArtist == "taylor") {

    document.querySelector("title").innerHTML = "Taylor Swift";
    document.querySelector(".back").innerHTML = "<a href = 'ninee.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Taylor Swift";
    document.querySelector(".century").innerHTML = "Taylor Swift's Hits";

    for (var i = 0; i < taylor.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", taylor[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = taylorSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "peas") {

    document.querySelector("title").innerHTML = "The Black Eyed Peas";
    document.querySelector(".back").innerHTML = "<a href = 'ninee.html'> Back </a>";
    document.querySelector(".title").innerHTML = "The Black Eyed Peas";
    document.querySelector(".century").innerHTML = "The Black Eyed Peas's Hits";

    for (var i = 0; i < peas.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", peas[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = peasSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "miley") {

    document.querySelector("title").innerHTML = "Miley Syrus";
    document.querySelector(".back").innerHTML = "<a href = 'ninee.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Miley Syrus";
    document.querySelector(".century").innerHTML = "Miley Syrus's Hits";

    for (var i = 0; i < miley.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", miley[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = mileySongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "pink") {

    document.querySelector("title").innerHTML = "Pink";
    document.querySelector(".back").innerHTML = "<a href = 'ninee.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Pink";
    document.querySelector(".century").innerHTML = "Pink's Hits";

    for (var i = 0; i < pink.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", pink[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = pinkSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "leon") {

    document.querySelector("title").innerHTML = "King on Leon";
    document.querySelector(".back").innerHTML = "<a href = 'ninee.html'> Back </a>";
    document.querySelector(".title").innerHTML = "King of Leon";
    document.querySelector(".century").innerHTML = "King of Leon's Hits";

    for (var i = 0; i < leon.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", leon[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = leonSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}


//2010


if (currentArtist == "direction") {

    document.querySelector("title").innerHTML = "One Direction";
    document.querySelector(".back").innerHTML = "<a href = 'ten.html'> Back </a>";
    document.querySelector(".title").innerHTML = "One Direction";
    document.querySelector(".century").innerHTML = "One Direction's Hits";

    for (var i = 0; i < direction.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", direction[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = directionSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "ladyy") {

    document.querySelector("title").innerHTML = "Lady Antebellum";
    document.querySelector(".back").innerHTML = "<a href = 'ten.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Lady Antebellum";
    document.querySelector(".century").innerHTML = "Lady Antebellum's Hits";

    for (var i = 0; i < ladyy.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", ladyy[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = ladyySongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "kesha") {

    document.querySelector("title").innerHTML = "Kesha";
    document.querySelector(".back").innerHTML = "<a href = 'ten.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Kesha";
    document.querySelector(".century").innerHTML = "Kesha's Hits";

    for (var i = 0; i < kesha.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", kesha[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = keshaSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "justinn") {

    document.querySelector("title").innerHTML = "Justin Bieber";
    document.querySelector(".back").innerHTML = "<a href = 'ten.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Justin Bieber";
    document.querySelector(".century").innerHTML = "Justin Bieber's Hits";

    for (var i = 0; i < justinn.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", justinn[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = justinnSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "susan") {

    document.querySelector("title").innerHTML = "Susan Boyle";
    document.querySelector(".back").innerHTML = "<a href = 'ten.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Susan Boyle";
    document.querySelector(".century").innerHTML = "Susan Boyle's Hits";

    for (var i = 0; i < justinn.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", justinn[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = justinnSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}


//2011


if (currentArtist == "cage") {

    document.querySelector("title").innerHTML = "Cage The Elephant";
    document.querySelector(".back").innerHTML = "<a href = 'eleven.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Cage The Elephant";
    document.querySelector(".century").innerHTML = "Cage The Elephant's Hits";

    for (var i = 0; i < cage.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", cage[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = cageSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "sleeper") {

    document.querySelector("title").innerHTML = "Sleeper Agent";
    document.querySelector(".back").innerHTML = "<a href = 'eleven.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Sleeper Agent";
    document.querySelector(".century").innerHTML = "Sleeper Agent's Hits";

    for (var i = 0; i < sleeper.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", sleeper[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = sleeperSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "foster") {

    document.querySelector("title").innerHTML = "Foster The People";
    document.querySelector(".back").innerHTML = "<a href = 'eleven.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Foster The People";
    document.querySelector(".century").innerHTML = "Foster The People's Hits";

    for (var i = 0; i < foster.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", foster[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = fosterSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "weekend") {

    document.querySelector("title").innerHTML = "Weeknd";
    document.querySelector(".back").innerHTML = "<a href = 'eleven.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Weeknd";
    document.querySelector(".century").innerHTML = "Weeknd's Hits";

    for (var i = 0; i < weekend.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", weekend[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = weekendSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "tyler") {

    document.querySelector("title").innerHTML = "Tyler, The Creator";
    document.querySelector(".back").innerHTML = "<a href = 'eleven.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Tyler, The Creator";
    document.querySelector(".century").innerHTML = "Tyler, The Creator's Hits";

    for (var i = 0; i < tyler.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", tyler[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = tylerSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}


//2012


if (currentArtist == "nicki") {

    document.querySelector("title").innerHTML = "Nicki Minaj";
    document.querySelector(".back").innerHTML = "<a href = 'twelve.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Nicki Minaj";
    document.querySelector(".century").innerHTML = "Nicki Minaj's Hits";

    for (var i = 0; i < nicki.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", nicki[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = nickiSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "lmfao") {

    document.querySelector("title").innerHTML = "LMFAO";
    document.querySelector(".back").innerHTML = "<a href = 'twelve.html'> Back </a>";
    document.querySelector(".title").innerHTML = "LMFAO";
    document.querySelector(".century").innerHTML = "LMFAO's Hits";

    for (var i = 0; i < lmfao.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", lmfao[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = lmfaoSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "jason") {

    document.querySelector("title").innerHTML = "Jason Aldean";
    document.querySelector(".back").innerHTML = "<a href = 'twelve.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Jason Aldean";
    document.querySelector(".century").innerHTML = "Jason Aldean's Hits";

    for (var i = 0; i < nicki.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", jason[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = jasonSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "luke") {

    document.querySelector("title").innerHTML = "Luke Bryan";
    document.querySelector(".back").innerHTML = "<a href = 'twelve.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Luke Bryan";
    document.querySelector(".century").innerHTML = "Luke Bryan's Hits";

    for (var i = 0; i < luke.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", luke[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = lukeSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "carly") {

    document.querySelector("title").innerHTML = "Carly Rae Jepsen";
    document.querySelector(".back").innerHTML = "<a href = 'twelve.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Carly Rae Jepsen";
    document.querySelector(".century").innerHTML = "Carly Rae Jepsen's Hits";

    for (var i = 0; i < carly.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", carly[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = carlySongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}


//2013


if (currentArtist == "bruno") {

    document.querySelector("title").innerHTML = "Bruno Mars";
    document.querySelector(".back").innerHTML = "<a href = 'thirteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Bruno Mars";
    document.querySelector(".century").innerHTML = "Bruno Mars's Hits";

    for (var i = 0; i < bruno.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", bruno[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = brunoSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "imagine") {

    document.querySelector("title").innerHTML = "Imagine Dragons";
    document.querySelector(".back").innerHTML = "<a href = 'thirteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Imagine Dragons";
    document.querySelector(".century").innerHTML = "Imagine Dragons's Hits";

    for (var i = 0; i < imagine.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", imagine[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = imagineSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "selena") {

    document.querySelector("title").innerHTML = "Selena Gomez";
    document.querySelector(".back").innerHTML = "<a href = 'thirteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Selena Gomez";
    document.querySelector(".century").innerHTML = "Selena Gomez's Hits";

    for (var i = 0; i < selena.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", selena[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = selenaSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "demi") {

    document.querySelector("title").innerHTML = "Demi Lovato";
    document.querySelector(".back").innerHTML = "<a href = 'thirteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Demi Lovato";
    document.querySelector(".century").innerHTML = "Demi Lovato's Hits";

    for (var i = 0; i < demi.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", demi[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = demiSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "ed") {

    document.querySelector("title").innerHTML = "Ed Sheeran";
    document.querySelector(".back").innerHTML = "<a href = 'thirteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Ed Sheeran";
    document.querySelector(".century").innerHTML = "Ed Sheeran's Hits";

    for (var i = 0; i < ed.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", ed[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = edSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}


//2014


if (currentArtist == "ariana") {

    document.querySelector("title").innerHTML = "Ariana Grande";
    document.querySelector(".back").innerHTML = "<a href = 'fourteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Ariana Grande";
    document.querySelector(".century").innerHTML = "Ariana Grande's Hits";

    for (var i = 0; i < ariana.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", ariana[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = arianaSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "iggy") {

    document.querySelector("title").innerHTML = "Iggy Azalea";
    document.querySelector(".back").innerHTML = "<a href = 'fourteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Iggy Azalea";
    document.querySelector(".century").innerHTML = "Iggy Azalea's Hits";

    for (var i = 0; i < iggy.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", iggy[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = iggySongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "john") {

    document.querySelector("title").innerHTML = "John Legend";
    document.querySelector(".back").innerHTML = "<a href = 'fourteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "John Legend";
    document.querySelector(".century").innerHTML = "John Legend's Hits";

    for (var i = 0; i < john.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", john[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = johnSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "pharrell") {

    document.querySelector("title").innerHTML = "Pharrell Williams";
    document.querySelector(".back").innerHTML = "<a href = 'fourteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Pharrell Williams";
    document.querySelector(".century").innerHTML = "Pharrell Williams' Hits";

    for (var i = 0; i < pharrell.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", pharrell[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = pharrellSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "republic") {

    document.querySelector("title").innerHTML = "OneRepublic";
    document.querySelector(".back").innerHTML = "<a href = 'fourteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "OneRepublic";
    document.querySelector(".century").innerHTML = "OneRepublic's Hits";

    for (var i = 0; i < republic.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", republic[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = republicSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}


//2015


if (currentArtist == "fetty") {

    document.querySelector("title").innerHTML = "Fetty Wap";
    document.querySelector(".back").innerHTML = "<a href = 'fifteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Fetty Wap";
    document.querySelector(".century").innerHTML = "Fetty Wap's Hits";

    for (var i = 0; i < fetty.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", fetty[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = fettySongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "meghan") {

    document.querySelector("title").innerHTML = "Meghan Trainor";
    document.querySelector(".back").innerHTML = "<a href = 'fifteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Meghan Trainor";
    document.querySelector(".century").innerHTML = "Fetty Wap's Hits";

    for (var i = 0; i < meghan.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", meghan[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = meghanSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "sam") {

    document.querySelector("title").innerHTML = "Sam Smith";
    document.querySelector(".back").innerHTML = "<a href = 'fifteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Sam Smith";
    document.querySelector(".century").innerHTML = "Sam Smith's Hits";

    for (var i = 0; i < sam.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", sam[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = samSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "mark") {

    document.querySelector("title").innerHTML = "Mark Ronson";
    document.querySelector(".back").innerHTML = "<a href = 'fifteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Mark Ronson";
    document.querySelector(".century").innerHTML = "Mark Ronson's Hits";

    for (var i = 0; i < mark.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", mark[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = markSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "hozier") {

    document.querySelector("title").innerHTML = "Hozier";
    document.querySelector(".back").innerHTML = "<a href = 'fifteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Hozier";
    document.querySelector(".century").innerHTML = "Hozier's Hits";

    for (var i = 0; i < hozier.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", hozier[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = hozierSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}


//2016


if (currentArtist == "adele") {

    document.querySelector("title").innerHTML = "Adele";
    document.querySelector(".back").innerHTML = "<a href = 'sixteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Adele";
    document.querySelector(".century").innerHTML = "Adele's Hits";

    for (var i = 0; i < adele.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", adele[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = adeleSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "pilots") {

    document.querySelector("title").innerHTML = "Twenty One Pilots";
    document.querySelector(".back").innerHTML = "<a href = 'sixteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Tewnty One Pilots";
    document.querySelector(".century").innerHTML = "Twenty One Pilots' Hits";

    for (var i = 0; i < pilots.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", pilots[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = pilotsSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "shawn") {

    document.querySelector("title").innerHTML = "Shawn Mendez";
    document.querySelector(".back").innerHTML = "<a href = 'sixteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Shawn Menddez";
    document.querySelector(".century").innerHTML = "Shawn Mendez's Hits";

    for (var i = 0; i < shawn.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", shawn[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = shawnSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "future") {

    document.querySelector("title").innerHTML = "Future";
    document.querySelector(".back").innerHTML = "<a href = 'sixteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Future";
    document.querySelector(".century").innerHTML = "Future's Hits";

    for (var i = 0; i < future.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", future[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = futureSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "bruce") {

    document.querySelector("title").innerHTML = "Bruce Springteen";
    document.querySelector(".back").innerHTML = "<a href = 'sixteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Bruce Springteen";
    document.querySelector(".century").innerHTML = "Bruce Springteen's Hits";

    for (var i = 0; i < bruce.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", bruce[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = bruceSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

//2017

if (currentArtist == "bts") {

    document.querySelector("title").innerHTML = "BTS";
    document.querySelector(".back").innerHTML = "<a href = 'seventeen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "BTS";
    document.querySelector(".century").innerHTML = "BTS's Hits";

    for (var i = 0; i < bts.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", bts[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = btsSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "astro") {

    document.querySelector("title").innerHTML = "Astro";
    document.querySelector(".back").innerHTML = "<a href = 'seventeen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Astro";
    document.querySelector(".century").innerHTML = "Astro's Hits";

    for (var i = 0; i < astro.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", astro[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = astroSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "chainsmokers") {

    document.querySelector("title").innerHTML = "The Chainsmokers";
    document.querySelector(".back").innerHTML = "<a href = 'seventeen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "The Chainsmokers";
    document.querySelector(".century").innerHTML = "The Chainsmokers' Hits";

    for (var i = 0; i < chainsmokers.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", chainsmokers[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = chainsmokersSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "migos") {

    document.querySelector("title").innerHTML = "Migos";
    document.querySelector(".back").innerHTML = "<a href = 'seventeen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Migos";
    document.querySelector(".century").innerHTML = "Migos's Hits";

    for (var i = 0; i < migos.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", migos[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = migosSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "u2") {

    document.querySelector("title").innerHTML = "U2";
    document.querySelector(".back").innerHTML = "<a href = 'seventeen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "U2";
    document.querySelector(".century").innerHTML = "U2's Hits";

    for (var i = 0; i < u2.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", u2[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = u2Songs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

//2018

if (currentArtist == "drake") {

    document.querySelector("title").innerHTML = "Drake";
    document.querySelector(".back").innerHTML = "<a href = 'eighteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Drake";
    document.querySelector(".century").innerHTML = "Drake's Hits";

    for (var i = 0; i < bts.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", bts[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = btsSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "post") {

    document.querySelector("title").innerHTML = "Post Malone";
    document.querySelector(".back").innerHTML = "<a href = 'eighteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Post Malone";
    document.querySelector(".century").innerHTML = "Post Malone's Hits";

    for (var i = 0; i < post.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", post[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = postSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "xxx") {

    document.querySelector("title").innerHTML = "XXXTENTACION";
    document.querySelector(".back").innerHTML = "<a href = 'eighteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "XXXTENTACION";
    document.querySelector(".century").innerHTML = "XXXTENTACION's Hits";

    for (var i = 0; i < xxx.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", xxx[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = xxxSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "camila") {

    document.querySelector("title").innerHTML = "Camila Cabello";
    document.querySelector(".back").innerHTML = "<a href = 'eighteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Camila Cabello";
    document.querySelector(".century").innerHTML = "Camila Cabello's Hits";

    for (var i = 0; i < migos.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", migos[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = migosSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "dua") {

    document.querySelector("title").innerHTML = "Dua Lipa";
    document.querySelector(".back").innerHTML = "<a href = 'eighteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Dua Lipa";
    document.querySelector(".century").innerHTML = "Dua Lipa's Hits";

    for (var i = 0; i < dua.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", dua[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = duaSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

//2019

if (currentArtist == "billie") {

    document.querySelector("title").innerHTML = "Billie Ellish";
    document.querySelector(".back").innerHTML = "<a href = 'nineteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Billie Ellish";
    document.querySelector(".century").innerHTML = "Billie Ellish's Hits";

    for (var i = 0; i < billie.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", billie[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = billieSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "jonas") {

    document.querySelector("title").innerHTML = "The Jonas Brothers";
    document.querySelector(".back").innerHTML = "<a href = 'nineteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "The Jonas Brothers";
    document.querySelector(".century").innerHTML = "The Jonas Brothers's Hits";

    for (var i = 0; i < jonas.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", jonas[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = jonasSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "panic") {

    document.querySelector("title").innerHTML = "Panic at the Disco";
    document.querySelector(".back").innerHTML = "<a href = 'nineteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Panic at the Disco";
    document.querySelector(".century").innerHTML = "Panic at the Disco's Hits";

    for (var i = 0; i < panic.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", panic[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = panicSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "cardi") {

    document.querySelector("title").innerHTML = "Cardi B";
    document.querySelector(".back").innerHTML = "<a href = 'nineteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "Cardi B";
    document.querySelector(".century").innerHTML = "Cardi B's Hits";

    for (var i = 0; i < cardi.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", cardi[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = cardiSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}

if (currentArtist == "dj") {

    document.querySelector("title").innerHTML = "DJ Khalid";
    document.querySelector(".back").innerHTML = "<a href = 'nineteen.html'> Back </a>";
    document.querySelector(".title").innerHTML = "DJ Khalid";
    document.querySelector(".century").innerHTML = "DJ Khalid's Hits";

    for (var i = 0; i < dj.length; i++) {

        var bodyNode = document.querySelector("body");

        var divNode = document.createElement("div");
    
        var audioNode = document.createElement("AUDIO");
        audioNode.setAttribute("controls", "controls")

        divNode.setAttribute("class", "song");

        var sourceNode = document.createElement("SOURCE")
        
        sourceNode.setAttribute("src", dj[i]);
        sourceNode.setAttribute("type", "audio/mpeg");

        var h2Node = document.createElement("H2");
        h2Node.innerHTML = djSongs [i];

        divNode.appendChild(h2Node);
    
        audioNode.appendChild(sourceNode);

        divNode.appendChild(audioNode);

        bodyNode.appendChild(divNode);

        }

}