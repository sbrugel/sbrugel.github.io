toggleAll(true);
var freesims, paidsims;

freesims = ['Aston', 'Brighton', 'Carlisle', 'Chicago L', 'Derby', 'Exeter', 'Kings Cross', 'Lancing', 'Liverpool Lime St', 'London Liverpool St', 'Llangollen', 'LUL Victoria Line',
        'North East Wales', 'North Wales Coastal', 'Oxted', 'Peterborough', 'Royston', 'Saltley', 'Stafford', 'Swindon', 'Waterloo', 'Wembley Sub', 'Westbury'];

paidsims = ['Birmingham New St', 'Cardiff', 'Cardiff Vale of Glamorgan', 'Cardiff Valleys', 'Cathcart', 'Central Scotland', 'Cheshire Lines', 'Chester', 'Coventry', 'Cowlairs',
        'East Coastway', 'Edge Hill', 'Edinburgh', 'Feltham', 'Fenchurch', 'Hereford', 'Horsham', 'Huddersfield', 'Hunts Cross', 'Huyton & St Helens', 'Leamington Spa',
        'Leeds Ardsley', 'Leeds East/West', 'Leeds Northwest', 'London Bridge', 'London Bridge ASC Mini Sim', 'LTS', 'Maidstone East', 'Manchester East', 'Manchester North',
        'Manchester Piccadilly', 'Manchester South', 'Marylebone', 'Motherwell', 'Newport', 'North East Scotland', 'Oxford', 'Paisley', 'Peak District', 'Penzance',
        'Plymouth', 'Port Talbot', 'Portsmouth', 'Rugby South', 'Rugby Centre', 'Rugby North', 'Salisbury', 'Sandhills', 'Sheffield', 'Shrewsbury', 'Staffordshire',
        'Stockport', 'Three Bridges', 'Tyneside', 'Victoria Central', 'Victoria South East', 'Warrington', 'Watford', 'Wembley Mainline', 'West Anglia', 'West Hampstead',
        'West Yorkshire', 'Wigan Wallgate', 'Wimbledon', 'Wolverhampton', 'York North/South'];

function run() {
    //all sims always default to all enabled - adjusted based on settings
    resetSims();
    //modify as needed based on user input
    let tsr = -1, adversewc = -1, ars = -1, torr = -1, ab = -1, lc = -1; //-1 if there is no setting available for the sim, otherwise set to true, false or a value of an array
    let difficulties = -1, eras = -1, scenarios = -1; //arrays set based on options available, set to an array of options, -1 if there are none

    let misc1 = -1, misc2 = -1, misc3 = -1, misc4 = -1, misc5 = -1, misc6 = -1; //for sims which have non-standard options
    let string1, string2, string3, string4, string5, string6 = ""; //captions for above misc settings

    let scaleofproblems = ['None', 'Low', 'Medium', 'High']; //constant array for sims which use this

    var paidindex = -1;
    var freeindex = -1;

    checkSimParameters();

    if (identical(paidsims) && identical(freesims)) { //check if everything is an X, based on checkSimParameters
        alert("You have no simulations enabled!");
    } else {
        var index = getRandomInt(validSims(freesims) + validSims(paidsims));
        if (index >= validSims(freesims)) {
            do {
                paidindex = Math.floor(Math.random() * paidsims.length);
            } while (paidsims[paidindex] == "X");
        } else {
            do {
                freeindex = Math.floor(Math.random() * freesims.length);
            } while (freesims[freeindex] == "X");
        }
        switch (paidindex) {
            case 0: //birmingham new st
                torr = getRandomBool();

                eras = getRandomVal(['1976-1991', '1991-2001', '2001-2020']);
                scenarios = getRandomVal(['Easy mode', 'Normal mode', 'Hard mode']);
                break;
            case 1: //cardiff
                torr = getRandomBool();

                difficulties = getRandomVal(scaleofproblems);
                scenarios = getRandomVal(['None', 'Pontyclun Closure', 'Cardiff Up Side Closure']);
                misc1 = getRandomBool();
                string1 = "St. Fagans Crossing Box";
                break;
            case 2: //cardiff vog
                ab = getRandomBool();
                torr = getRandomBool();

                difficulties = getRandomVal(scaleofproblems);
                break;
            case 3: //cardiff valleys
                torr = getRandomBool();

                difficulties = getRandomVal(scaleofproblems);
                break;
            case 4: //cathcart
                scenarios = getRandomVal(['Perfect', 'Beginner', 'Standard', 'Difficult', 'Bad Weather']);
                misc1 = getRandomBool();
                string1 = "One button route setting";
                break;
            case 5: //cscot
                torr = getRandomBool();
                eras = getRandomVal(['Pre SAK line', 'Old Cowlairs', 'Post SAK line', 'EGIP']);
            
                scenarios = getRandomVal(['Perfect', 'Beginner', 'Standard', 'Difficult', 'Bad Weather']);
                misc1 = getRandomBool();
                string1 = "Mechanical interlocking";
                break;
            case 6: //cheshire
                lc = getRandomBool();
                ab = getRandomBool();
                torr = getRandomBool();

                eras = getRandomVal(['1991 Onwards', 'Pre-1991']);
                difficulties = getRandomVal(scaleofproblems);
                break;
            case 7: //chester
                ab = getRandomBool();
                torr = getRandomBool();

                difficulties = getRandomVal(scaleofproblems);
                eras = getRandomVal(['2006', '2018']);
                misc1 = getRandomBool();
                string1 = "Extra TD Interpose";
                break;
            case 8: //coventry
                eras = getRandomVal(['1987-2003', '2004-2007']);
                scenarios = getRandomVal(['Easy mode', 'Normal mode', 'Hard mode']);
                break;
            case 9: //cowlairs
                eras = getRandomVal(['Old Cowlairs', 'New Cowlairs', 'EGIP']);
                scenarios = getRandomVal(['Perfect', 'Beginner', 'Standard', 'Difficult', 'Bad Weather']);
                break;
            case 10: //ecw
                scenarios = getRandomVal(['Beginner', 'Standard Simulation', 'Difficult', 'Time for the gremlins', 'Leaf fall season', 'P5 closed at Lewes', 'P1 closed at Eastbourne', 
                'P2 closed at Eastbourne', 'P3 closed at Eastbourne', 'Random shift', '15th October 2009']);
                ab = getRandomBool();
                break;
            case 11: //edge hill
                scenarios = getRandomVal(['None', 'Platform Clousre', 'Fast lines blocked, Lime St - Edge Hill', 'Slow lines blocked, Lime St - Edge Hill', 'Fast lines blocked, Allerton to Ditton', 'Slow lines blocked, Allerton to Ditton', '15th October 2009']);
                adversewc = getRandomBool();
                difficulties = getRandomVal(scaleofproblems);
                break;
            case 12: //edinburgh
                scenarios = getRandomVal(['Perfect', 'Beginner', 'Standard', 'Difficult', 'Bad Weather']);
                ars = getRandomBool();
                torr = getRandomBool();
                misc1 = getRandomBool();
                string1 = "ACI on";
                break;
            case 13: //feltham
                difficulties = getRandomVal(['Beginner', 'Standard', 'Difficult', 'One of those days', 'Gremlins at work']);
                tsr = getRandomBool();
                adversewc = getRandomBool();
                torr = getRandomBool();
                lc = getRandomBool();
                break;
            case 14: //fenchurch
                scenarios = getRandomVal(['Normal', 'Fenchurch Street platform closed', 'Barking platform closed', 'Single line working']);
                misc1 = getRandomBool();
                misc2 = getRandomBool();
                misc3 = getRandomBool();
                misc4 = getRandomBool();
                misc5 = getRandomBool();
                misc6 = getRandomBool();
                string1 = "New layout";
                string2 = "Full signalling controls";
                string3 = "Add missing routes";
                string4 = "Add missing paths";
                string5 = "Wrong route calls";
                string6 = "Fringe slots";
                break;
            case 15: //hereford
                ab = getRandomBool();
                lc = getRandomBool();
                torr = getRandomBool();
                difficulties = getRandomVal(scaleofproblems);
                break;
            case 16: //horsham
                scenarios = getRandomVal(['None', 'Horsham Platofrms 2 & 3 closed']);
                torr = getRandomVal(scaleofproblems);
                tsr = getRandomVal(scaleofproblems);
                adversewc = getRandomVal(scaleofproblems);
                lc = getRandomVal(scaleofproblems);
                era = getRandomVal(['Pre 2012', 'Post 2012']);
                difficulties = getRandomVal(scaleofproblems);
                break;
            case 17: //huddersfield
                scenarios = getRandomVal(['Beginner', 'Average day', 'Leaffall']);
                break;
            case 18: //hunts x
                eras = getRandomVal(['Mechanical Route Setting', 'NX Route Setting']);
                difficulties = getRandomVal(scaleofproblems);
                break;
            case 19: //huyton
                eras = getRandomVal(['Pre 2014', '2014']);
                break;
            case 20: //leamington spa
                scenarios = getRandomVal(['None', 'Through Roads Shut at Leamington Spa', 'Up Goods Loop Shut at Fenny Compton']);
                torr = getRandomBool();
                era = getRandomVal(['2003', '2006']);
                difficulties = getRandomVal(scaleofproblems);
                break;
            case 21: //leeds A
                scenarios = getRandomVal(['Beginner', 'Average day', 'Leaffall']);
                ars = getRandomBool();
                break;
            case 22: //leeds city
                scenarios = getRandomVal(['Beginner mode', 'Standard mode', 'Leaf fall', 'Platform 17 blocked', 'Up/Down Leeds blocked']);
                ars = getRandomBool();
                break;
            case 23: //leeds nw
                scenarios = getRandomVal(['Beginner', 'Average day', 'Leaffall']);
                ars = getRandomBool();
                lc = getRandomBool();
                misc1 = getRandomVal(['Secured', 'Free']);
                string1 = "Crossley Evans";
                break;
            case 24: //lbg
                scenarios = getRandomVal(['Easy mode', 'Normal mode']);
                eras = getRandomVal(['2000-2009', '2010-2014']);
                ars = getRandomBool();
                break;
            case 25: //lbg mini
                scenarios = getRandomVal(['Easy mode', 'Normal mode']);
                ars = getRandomBool();
                break;
            case 26: //lts
                scenarios = getRandomVal(['Easy mode', 'Normal mode', 'Hard mode']);
                ars = getRandomBool();
                lc = getRandomBool();
                break;
            case 27: //maidstone east
                scenarios = getRandomVal(['Beginner', 'Average day', 'Leaffall']);
                eras = getRandomVal(['Beechbrook Farm Open', 'Beechbrook Farm Closed']);
                break;
            case 28: //man east
                scenarios = getRandomVal(['None', 'Stalybridge Platform Closure']);
                ab = getRandomBool();
                difficulties = getRandomVal(scaleofproblems);
                break;
            case 29: //man north
                eras = getRandomVal(['2009 - Present', '1998 - 2009']);
                difficulties = getRandomVal(scaleofproblems);
                break;
            case 30: //piccadilly
                scenarios = getRandomVal(['Easy mode', 'Normal mode', 'Points 308 no reverse', 'Slows at Longsight']);
                eras = getRandomVal(['1990-2007', '2008-2015', '2016-2017', '2018-2020']);
                ars = getRandomBool();
                break;
            case 31: //man south
                scenarios = getRandomVal(['Normal running', 'Bidirectional line closure']);
                difficulties = getRandomVal(scaleofproblems);
                break;
            case 32: //marylebone
                scenarios = getRandomVal(['IECC', 'Standard mode', 'Easy mode']);
                lc = getRandomBool();
                ars = getRandomBool();
                eras = getRandomVal(['2013', '2015', '2016']);
                misc1 = getRandomBool();
                misc2 = getRandomVal(['Minimal', 'Medium', 'High']);
                misc3 = getRandomVal(['Simple', 'Full']);
                string1 = "Autumn overlaps";
                string2 = "Failures";
                string3 = "LUL area";
                break;
            case 33: //motherwell
                scenarios = getRandomVal(['Perfect', 'Beginner', 'Standard', 'Difficult', 'Bad Weather']);
                eras = getRandomVal(['1980', '1990', '2000', '2015']);
                ars = getRandomBool();
                torr = getRandomBool();
                break;
            case 34: //newport
                torr = getRandomBool();
                difficulties = getRandomVal(scaleofproblems);
                break;
            case 35: //ne scot
                scenarios = getRandomVal(['Perfect', 'Beginner', 'Standard', 'Difficult', 'Tay Bridge', 'Bad Weather']);
                torr = getRandomBool();
                misc1 = getRandomBool();
                string1 = "Mechanical Interlocking";
                ab = getRandomBool();
                eras = getRandomVal(['Montrose resignalling enabled', 'Montrose resignalling disabled']);
                break;
            case 36: //oxford
                difficulties = getRandomVal(scaleofproblems);
                adversewc = getRandomBool();
                torr = getRandomBool();
                eras = getRandomVal(['2000', '2009', '2011', '2016']);
                break;
            case 37: //paisley
                scenarios = getRandomVal(['Perfect', 'Beginner', 'Standard', 'Difficult', 'Bad Weather']);    
                ars = getRandomBool();
                eras = getRandomVal(['1980s', 'Early 2000s', '2015']);
                break;
            case 38: //peak district
                scenarios = getRandomVal(['Beginner', 'Average day', 'Bad weather']);
                ab = getRandomBool();
                break;
            case 39: //penzance
                difficulties = getRandomVal(scaleofproblems);
                torr = getRandomBool();
                break;
            case 40: //plymouth
                scenarios = getRandomVal(['Perfect', 'Beginner', 'Standard', 'Difficult', 'Bad Weather']);       
                break;
            case 41: //port talbot
                difficulties = getRandomVal(scaleofproblems);
                torr = getRandomBool();
                misc1 = getRandomBool();
                string1 = "Port Talbot MCB";
                break;
            case 42: //portsmouth
                scenarios = getRandomVal(['Beginner', 'Standard', 'Difficult']);    
                break;
            case 43: //rugby south
                scenarios = getRandomVal(['Easy mode', 'Normal mode', 'Hard mode', 'Northchurch FL tunnel closure']);
                ars = getRandomBool();
                break;
            case 44: //rugby centre
                scenarios = getRandomVal(['Easy mode', 'Normal mode', 'Hard mode', 'Weedon closure', 'Coventry flyover closure', 'Platform 1 closure']);
                ars = getRandomBool();
                break;
            case 45: //rugby north
                scenarios = getRandomVal(['Easy mode', 'Normal mode', 'Hard mode', 'Up & Down Arley blocked', 'Up & Down Fast Nuneaton and Amington blocked', 'Up & Down Fast Amington to Lichfield blocked',
                                        'Up & Down Fast Nuneaton to Lichfield blocked', 'Up Fast Between Nuneaton & Rugby blocked', 'Up Slow between Nuneaotn & Rugby blocked']);
                ars = getRandomBool();
                break;
            case 46: //salisbury
                scenarios = getRandomVal(['None', 'Salisbury P2 shut', 'Salisbury P3 shut', 'Salisbury P4 shut', 'Salisbury P2 & P3 shut', 'Tisbury Passing Loop shut']);
                eras = getRandomVal(['1980', '2000']);
                torr = getRandomBool();
                difficulties = getRandomVal(['Beginner', 'Standard', 'Difficult', 'One of those days', 'Gremlins at work']);
                tsr = getRandomBool();
                adversewc = getRandomBool();
                lc = getRandomBool();
                break;
            case 47: //sandhills
                scenarios = getRandomVal(['None', 'WON 40 Item 1541 (Loop Line Closure)', 'WON 144 Item 144 (HS-BN Closure)', 'Birkenhead North Platform Closure', 'Rock Ferry Platform Closure', 'Southport Platform Closure']);
                difficulties = getRandomVal(scaleofproblems);
                misc1 = getRandomBool();
                misc2 = getRandomBool();
                string1 = "Extra TD Interpose";
                string2 = "Hall Road TMD";
                break;
            case 48: //sheffield
                scenarios = getRandomVal(['Beginner mode', 'Standard mode', 'Leaf fall']);
                lc = getRandomBool();
                ars = getRandomBool();
                break;
            case 49: //shrews
                ab = getRandomBool();
                lc = getRandomBool();
                torr = getRandomBool();
                difficulties = getRandomVal(scaleofproblems);
                break;
            case 50: //staffordshire
                scenarios = getRandomVal(['Platform Closure - Staffod', 'Platform Closure - Stoke on Trent', 'Slow Lines Milford - TV Junction Closed', 'Stafford Avoiding Line Closed', 'Norton Bridge Flyover Closed', 'Rickerscote Loop Closed', 'Two of the above', 'WON 41 - Item 137']);
                lc = getRandomBool();
                ars = getRandomBool();
                difficulties = getRandomVal(scaleofproblems);
                misc1 = getRandomBool();
                string1 = "Derby Line enabled";
                break;
            case 51: //stockport
                ab = getRandomBool();
                torr = getRandomBool();
                difficulties = getRandomVal(scaleofproblems);
                break;
            case 52: //three bridges
                scenarios = getRandomVal(['Beginner mode', 'Standard mode', 'Quarry Line closed', 'Leaf fall']);
                lc = getRandomBool();
                ars = getRandomBool();
                eras = getRandomVal(['2000-2013', '2014-2017', '2018-2019']);
                misc1 = getRandomBool();
                string1 = "Extra TD berths";
                misc2 = getRandomBool();
                string2 = "Point normalisation alarms";
                break;
            case 53: //tyneside
                scenarios = getRandomVal(['Beginner mode', 'Standard mode', 'Leaf fall']);
                ars = getRandomBool();
                break;
            case 54: //vicC
                scenarios = getRandomVal(['Easy mode', 'Normal mode', 'Hard mode', 'Tulse Hill', 'Balham']);
                eras = getRandomVal(['1990', '2000', '2010', '2014']);
                ars = getRandomBool();
                lc = getRandomBool();
                break;
            case 55: //vicSE
                scenarios = getRandomVal(['Easy mode', 'Normal mode', 'Hard mode']);
                eras = getRandomVal(['1980-1988', '1993-2003', '2004-2012']);
                ars = getRandomBool();
                break;
            case 56: //warringotn
                scenarios = getRandomVal(['Normal', 'Loop Closed at Arpley Junction', 'Acton Grange to Warrington', 'Golborne to Winwick', 'Springs Branch Junction to Golborne Fast Closed', 'Warrington to Winwick', 'Warrington BQ Platform Closed', 'Wigan NW Platform Closed', 'One of the above', 'Two of the above', 'Three of the above']);
                torr = getRandomBool();
                eras = getRandomVal(['1972-2009', '2009-Present']);
                difficulties = getRandomVal(scaleofproblems);
                break;
            case 57: //watfordjn
                scenarios = getRandomVal(['Easy mode', 'Normal mode', 'Fast line platforms closed']); 
                break;
            case 58: //wembleyML
                scenarios = getRandomVal(['Easy mode', 'Normal mode', 'Line X', 'Wembley Fast lines', 'Park Street Bridge']);
                break;
            case 59: //west anglia
                scenarios = getRandomVal(['Beginner mode', 'Standard mode', 'Leaf fall']);
                ars = getRandomBool();
                lc = getRandomBool();
                break;
            case 60: //west hampstead
                scenarios = getRandomVal(['Easy mode', 'Normal mode', 'Hard mode']);  
                eras = getRandomVal(['1985', '1990', '2005', '2009']);
                torr = getRandomBool();
                break;
            case 61: //west yorkshire
                scenarios = getRandomVal(['Beginner mode', 'Average day', 'Leaf fall', 'Cutsyke blocked']);
                lc = getRandomBool();
                break;
            case 62: //wgw
                ab = getRandomBool();
                torr = getRandomBool();
                difficulties = getRandomVal(scaleofproblems);
                break;
            case 63: //wimbledon
                scenarios = getRandomVal(['Easy mode', 'Normal mode', 'Hard mode']);
                ars = getRandomBool();
                lc = getRandomBool();
                break;
            case 64: //wolverhampton
                scenarios = getRandomVal(['Easy mode', 'Normal mode', 'Hard mode']);
                eras = getRandomVal(['1987-2003', '2004-2014']);
                break;
            case 65: //york
                scenarios = getRandomVal(['Beginner mode', 'Average day', 'Leaf fall', 'P9/P10 blocked', 'Tollerton <-> Thirsk fasts blocked']);
                ars = getRandomBool();
                eras = getRandomVal(['2011 and earlier', '2012 onwards']);
                break;
            default:
                break;
        }

        switch (freeindex) {
            case 0: //aston
                tsr = [true, false][Math.floor(Math.random() * 2)];
                adversewc  = getRandomBool();
                ars  = getRandomBool();
                torr  = getRandomBool();
                ab  = getRandomBool();

                difficulties = getRandomVal(['Beginner', 'Standard', 'Difficult', 'One of those days', 'Gremlins at work']);
                break;
            case 1: //brighton
                break;
            case 2: //carlisle
                torr  = getRandomBool();

                difficulties = getRandomVal(scaleofproblems);
                eras = getRandomVal(['1980s', '2000s', '2016']);
                scenarios = getRandomVal(['No closures or speed restrictions', 'Main lines at Upperby closed', 'Main lines at Kingmoor closed']);
                break;
            case 3: //chicago L
                break;
            case 4: //derby
                tsr  = getRandomBool();
                adversewc  = getRandomBool();
                torr  = getRandomBool();

                difficulties = getRandomVal(['Beginner', 'Standard', 'Difficult', 'One of those days', 'Gremlins at work']);
                eras = getRandomVal(['Pre 1999', '2000-2005', '2006 Onwards']);
                scenarios = getRandomVal(['None', 'Platform 1B & 2B', 'Platform 3B & 4B', 'Platofrm 6 & Goods Line']);
                break;
            case 5: //exeter
                torr  = getRandomBool();

                eras = getRandomVal(['Tiverton Junction', 'Tiverton Parkway', 'Silk Mill Crossing Closed', '2015']);
                scenarios = getRandomVal(['Perfect', 'Beginner', 'Standard', 'Exeter platform closed', 'Dawlish sea wall', 'Bad weather']);
                break;
            case 6: //kings cross
                difficulties = getRandomVal(['Easy', 'Normal', 'Hard', 'Bad Weather']);
                eras = getRandomVal(['Old Layout', 'Modern Layout']);
                scenarios = getRandomVal(['Normal running', 'Slow lines closed at Knebworth', 'Incident at New Southgate', 'Fast lines closed at Welwyn', 'Fast lines closed at Finsbury Park',
                                        'Platform  9 out of use at King\'s Cross', 'Gasworks Tunnels']);		
                break;
            case 7: //lancing
                difficulties = getRandomVal(['Beginner', 'Standard', 'Difficult', 'Leaf Fall Season']);	
                break;
            case 8: //liverpool lime st
                torr  = getRandomBool();

                difficulties = getRandomVal(['Beginner', 'Standard', 'Difficult', 'One of those days', 'Gremlins at work']);
                scenarios = getRandomVal(['None', 'Line Block', 'Platform Closure', 'Station Throat Closure']);		
                break;
            case 9: //liverpool st
                ars  = getRandomBool();

                eras = getRandomVal(['Before 2013', '2013 onwards']);
                scenarios = getRandomVal(['Easy mode', 'Normal mode']);	
                break;
            case 10: //llangollen
                torr  = getRandomBool();

                scenarios = getRandomVal(['Perfect', 'Beginner', 'Standard', 'Hard']);	
                break;	
            case 11: //victoria line
                ars  = getRandomBool();

                scenarios = getRandomVal(['Good Service', 'Minor Delays', 'Severe Delays']);	
                break;							
            case 12: //north east wales
                torr  = getRandomBool();

                difficulties = getRandomVal(scaleofproblems);
                eras = getRandomVal(['Post 2018', 'Pre 2018']);
                break;
            case 13: //nwc
                torr  = getRandomBool();
                ab  = getRandomBool();

                difficulties = getRandomVal(scaleofproblems);
                eras = getRandomVal(['Post 2018', 'Pre 2018']);
                break;
            case 14: //oxted
                tsr  = getRandomBool();
                ab  = getRandomBool();

                difficulties = getRandomVal(['Beginner', 'Minor delays and failures', 'Difficult', 'Leaf fall season']);
                eras = getRandomVal(['2008', '2013']);
                scenarios = getRandomVal(['Standard', 'East Grinstead Possession', 'Uckfield Blockdade', 'Random shift', '15th October 2009']);	
                break;
            case 15: //pbo
                ars = getRandomBool();
                torr = getRandomBool();
                lc  = getRandomBool();

                difficulties = getRandomVal(['None', 'Limited delays', 'Low', 'Medium', 'High']);
                eras = getRandomVal(['Original layout', 'Spalding bi-di']);
                scenarios = getRandomVal(['Normal', 'Bad Weather', 'Fast lines closed', 'New Englad closure', 'One random closure', 'Several random closures']);	

                misc1  = getRandomBool(); //Nene C.S. phone calls
                string1 = "Nene C.S. Phone Calls";
                break;
            case 16: //royston
                torr  = getRandomBool();
                tsr  = getRandomBool();
                
                difficulties = getRandomVal(['Perfect', 'Beginner', 'Standard', 'Difficult']);
                scenarios = getRandomVal(['Normal', 'Royston P1 blocked', 'Royston P2 blocked', 'Royston platform blocked']);

                misc1  = getRandomBool(); //timed approach control
                string1 = "Timed approach control";
                misc2  = getRandomBool(); //long routes
                string2 = "Long routes";
                misc3  = getRandomBool(); //active scratchpad
                string3 = "Active scratchpad";
                misc4  = getRandomBool(); //shunter knows timetable
                string4 = "Shunter knows timetable";
                misc5 = getRandomVal(['Two stripes', 'Cambridge PSB', 'Kings Cross PSB']); //screen layout
                string5 = "Screen layout";
                misc6  = getRandomBool(); //stacked signals
                string6 = "Stacked signals";
                break;
            case 17: //saltley
                adversewc  = getRandomBool();
                torr  = getRandomBool();
                tsr  = getRandomBool();

                scenarios = getRandomVal(['All lines open', 'Tyseley platforms 1 and 2 shut', 'Fast lines through Northfield closed', 'Platform closed at Snow Hill', 'Fast lines Water Orton - Kingsbury closed',
                                'Derby lines Landor street - New street closed', 'Any one scenario at random', 'Any two scenarios at random', 'Absolute chaos']);
                difficulty = getRandomVal(['Standard', 'Easy']);

                misc1 = getRandomVal(scaleofproblems); //scale of problems
                string1 = "Scale of problems";
                break;
            case 18: //stafford
                tsr  = getRandomBool();
                adversewc  = getRandomBool();

                scenarios = getRandomVal(['None', 'Random', 'Hixon Lines Blocked', 'Fast Lines to Norton Bridge Blocked', 'Fast Lines to Whitehouse Junction Blocked', 'Down Slow Line to Crewe Blocked',
                            'Two Possessions', 'Platform 3 Blocked', 'Delays in Birmingham', 'Delays at Crewe']);

                misc1  = getRandomBool(); //long routes
                string1 = "Long routes";
                break;
            case 19: //swindon
                ars  = getRandomBool();

                scenarios = getRandomVal(['Perfect', 'Beginner', 'Standard', 'Difficult', 'Bad Weather']);

                misc1 = getRandomVal(['Parcels', 'Platform 4']); //swindon platform option
                string1 = "Swindon platform option";
                break;
            case 20: //waterloo
                ars  = getRandomBool();

                scenarios = getRandomVal(['Perfect', 'Beginner', 'Random', 'Standard', 'Difficult', 'Bad Weather', 'Gremlins at work', 'One of those days', 'Main slow lines blocked', 'Main fast lines blocked',
                            'Windsor Down Slow Line blocked', 'Windsor Fast Lines blocked', 'P11/P12 closed', 'Windsor Lines blocked at Vauxhall']);
                break;
            case 21: //wembley sub
                scenarios = getRandomVal(['Normal', 'Watford Junction closure', 'Willesden Junction bay closed', 'Harrow siding closed', 'Stonebridge Park 21 road closed', 'Stonebridge Park 22 road closed',
                            'Stonebridge Park closure', 'Random closure']);

                difficulties = getRandomVal(['None', 'Delays only', 'Low', 'Medium', 'High']);

                misc1  = getRandomBool(); //Croxley Green Branch
                string1 = "Croxley Green branch";
                misc2  = getRandomBool(); //lengthened willesden bay
                string2 = "Lengthened Willesden bay";
                misc3  = getRandomBool(); //S8 auto button
                string3 = "S8 auto button";
                misc4  = getRandomBool(); //route to Bakerloo controlled by train describer
                string4 = "Route to Bakerloo controlled by train describer";
                misc5 = getRandomVal(['No train describer control', 'Any LU description required', 'Correct train description required']);
                string5 = "Routes to Stonebridge Park Depot";
                break;
            case 22: //westbury
                difficulties = getRandomVal(scaleofproblems);
                scenarios = getRandomVal(['Perfect', 'Beginner', 'Standard', 'Westbury Avoiding Line closed', 'Bad weather']);
                break;
            default:
                break;
        }
        var finalstring = "";
        if (paidindex == -1)
            finalstring += "<b>SIMULATION: </b>" + freesims[freeindex] + "<br>";
        else if (freeindex == -1)
            finalstring += "<b>SIMULATION: </b>" + paidsims[paidindex] + "<br>";

        if (tsr != -1) { //TSR is an option for this sim
            output = getEnabledOutput(tsr);
            finalstring += "<b>TSRs: </b>" + output + "<br>";
        }
        if (adversewc != -1) {
            output = getEnabledOutput(adversewc);
            finalstring += "<b>Adverse Weather Conditions: </b>" + output + "<br>";
        }
        if (ars != -1) {
            output = getEnabledOutput(ars);
            finalstring += "<b>ARS: </b>" + output + "<br>";
        }
        if (torr != -1) {
            output = getEnabledOutput(torr);
            finalstring += "<b>TORR: </b>" + output + "<br>";
        }
        if (ab != -1) {
            output = getEnabledOutput(ab);
            finalstring += "<b>AB: </b>" + output + "<br>";
        }
        if (lc != -1) {
            putput = getEnabledOutput(lc);
            finalstring += "<b>Level crossings: </b>" + output + "<br>";
        }
        if (difficulties != -1) {
            finalstring += "<b>Difficulty/Scale of Problems: </b>" + difficulties;
            finalstring += "<br>";
        }
        if (eras != -1) {
            finalstring += "<b>Era: </b>" + eras + " <i>(make sure to choose a timetable which works in this era)</i>";
            finalstring += "<br>";
        }
        if (scenarios != -1) {
            finalstring += "<b>Scenario: </b>" + scenarios;
            finalstring += "<br>";
        }
        if (misc1 != -1) {
            var toshow;
            if (misc1 == true)
                toshow = "Enabled";
            else if (misc1 == false)
                toshow = "Disabled";
            else
                toshow = misc1;
            finalstring += "<b>" + string1 + ": </b>" + toshow;
            finalstring += "<br>";
        }
        if (misc2 != -1) {
            var toshow;
            if (misc2 == true)
                toshow = "Enabled";
            else if (misc2 == false)
                toshow = "Disabled";
            else
                toshow = misc2;
            finalstring += "<b>" + string2 + ": </b>" + toshow;
            finalstring += "<br>";
        }
        if (misc3 != -1) {
            var toshow;
            if (misc3 == true)
                toshow = "Enabled";
            else if (misc3 == false)
                toshow = "Disabled";
            else
                toshow = misc3;
            finalstring += "<b>" + string3 + ": </b>" + toshow;
            finalstring += "<br>";
        }
        if (misc4 != -1) {
            var toshow;
            if (misc4 == true)
                toshow = "Enabled";
            else if (misc4 == false)
                toshow = "Disabled";
            else
                toshow = misc4;
            finalstring += "<b>" + string4 + ": </b>" + toshow;
            finalstring += "<br>";
        }
        if (misc5 != -1) {
            var toshow;
            if (misc5 == true)
                toshow = "Enabled";
            else if (misc5 == false)
                toshow = "Disabled";
            else
                toshow = misc5;
            finalstring += "<b>" + string5 + ": </b>" + toshow;
            finalstring += "<br>";
        }
        if (misc6 != -1) {
            var toshow;
            if (misc6 == true)
                toshow = "Enabled";
            else if (misc6 == false)
                toshow = "Disabled";
            else
                toshow = misc6;
            finalstring += "<b>" + string6 + ": </b>" + toshow;
            finalstring += "<br>";
        }
        document.getElementById("selection").innerHTML = finalstring;
    }
}

function resetSims() {
    freesims = ['Aston', 'Brighton', 'Carlisle', 'Chicago L', 'Derby', 'Exeter', 'Kings Cross', 'Lancing', 'Liverpool Lime St', 'London Liverpool St', 'Llangollen', 'LUL Victoria Line',
        'North East Wales', 'North Wales Coastal', 'Oxted', 'Peterborough', 'Royston', 'Saltley', 'Stafford', 'Swindon', 'Waterloo', 'Wembley Sub', 'Westbury'];

    paidsims = ['Birmingham New St', 'Cardiff', 'Cardiff Vale of Glamorgan', 'Cardiff Valleys', 'Cathcart', 'Central Scotland', 'Cheshire Lines', 'Chester', 'Coventry', 'Cowlairs',
        'East Coastway', 'Edge Hill', 'Edinburgh', 'Feltham', 'Fenchurch', 'Hereford', 'Horsham', 'Huddersfield', 'Hunts Cross', 'Huyton & St Helens', 'Leamington Spa',
        'Leeds Ardsley', 'Leeds East/West', 'Leeds Northwest', 'London Bridge', 'London Bridge ASC Mini Sim', 'LTS', 'Maidstone East', 'Manchester East', 'Manchester North',
        'Manchester Piccadilly', 'Manchester South', 'Marylebone', 'Motherwell', 'Newport', 'North East Scotland', 'Oxford', 'Paisley', 'Peak District', 'Penzance',
        'Plymouth', 'Port Talbot', 'Portsmouth', 'Rugby South', 'Rugby Centre', 'Rugby North', 'Salisbury', 'Sandhills', 'Sheffield', 'Shrewsbury', 'Staffordshire',
        'Stockport', 'Three Bridges', 'Tyneside', 'Victoria Central', 'Victoria South East', 'Warrington', 'Watford', 'Wembley Mainline', 'West Anglia', 'West Hampstead',
        'West Yorkshire', 'Wigan Wallgate', 'Wimbledon', 'Wolverhampton', 'York North/South'];
}

function getRandomBool() {
    return [true, false][Math.floor(Math.random() * 2)];
}

function getEnabledOutput(condition) {
    return (condition ? 'Enabled' : 'Disabled');
}

function getRandomVal(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function checkSimParameters() { //run this BEFORE the program selects the options
    for (var i = 0; i < paidsims.length; i++) {
        if (!document.getElementById(i).checked) {
            paidsims[i] = "X";
        }
    }        
    for (var i = 0; i < freesims.length; i++) {
        if (!document.getElementById(i+66).checked) {
            freesims[i] = "X";
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function toggleAll(set){
    var aInputs = document.getElementsByTagName('input');
    for(var i = 0; i < aInputs.length; i++) {
        aInputs[i].checked = set;
    }
}

function enableFreeOnly(){
    var aInputs = document.getElementsByTagName('input');
    var iteration = 0;
    for (iteration; iteration < paidsims.length; iteration++) {
        aInputs[iteration].checked = false;
    }
    let startiter = iteration;
    for (iteration; iteration < freesims.length + startiter; iteration++) {
        aInputs[iteration].checked = true;
    }
}

function identical(array) {
    for(var i = 0; i < array.length - 1; i++) {
        if(array[i] !== array[i+1]) {
            return false;
        }
    }
    return true;
}

function validSims(array) {
    let valid = 0;
    for(var i = 0; i < array.length - 1; i++) {
        if(array[i] !== "X") {
            valid++;
        }
    }
    return valid;
}