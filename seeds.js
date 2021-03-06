use routesDB;

db.routes.remove({});

db.users.remove({});

db.users.insert([
  {
  name: "Paul",
  routes: []
  },
  {
  name: "Dragon",
  routes: []
  },
  {
  name: "Callum",
  routes: []
  },
])

db.routes.insert([
  { name: "West Highland way",
   startPoint:[55.9411,-4.318 ],
   endPoint: [56.8198, -5.1052],
   startTown:"Milngavie",
   endTown:"Fort William",
   description: "The West Highland Way stretches 96 miles (154 Km) from Milngavie to Fort William, taking in a huge variety of scenery along the way, from countryside parks to loch-shores and open moorlands to steep mountains",
   photo: "https://ac4fa7708134a70c34d3-66da2307b23609a8f8a6d8a13d2f16e2.ssl.cf1.rackcdn.com/13/1/large.jpg",
   difficulty: "3",
   travelMethod: "hike",
   duration:"3-5 days",
   distance:"96 Miles"
 },
 { name: "The Great Glen Way",
  startPoint:[56.8198, -5.1052],
  endPoint: [57.4778, -4.2247],
  startTown:"Fort William",
  endTown:"Inverness",
  description: "The stunning landscape surrounding the Great Glen Way could be described as very unique; featuring a 'ruler straight' deep scar in the landscape stretching coast to coast from west to east, effectively splitting the Highlands into a geological north/south divide.",
  photo: "https://www.absoluteescapes.com/images/great-glen-way-header.jpg",
  difficulty: "3",
  travelMethod: "hike",
  duration:"3 days",
  distance:"75 Miles"
},
 { name: "The Rob Roy Way",
  startPoint:[56.0655, -4.4500],
  endPoint: [56.7044, -3.7297],
  startTown:"Drymen",
  endTown:"Pitlochry",
  description: "The Rob Roy Way is officially one of Scotland’s Great Trails, and follows in the footsteps of Rob Roy MacGregor, a famous figure amongst Scottish folklore.  Considered by many as the Scottish Robin Hood, Rob Roy was primarily a cattle dealer (later to become an illegal cattle ‘rustler’), however, he also spend time as a Jacobite soldier before becoming leader of the MacGregor Clan.",
  photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKhh5c5q08c5pPcl_u4r7DxVpgMT81e6n39tqYXaAGo9jpq-cF",
  difficulty: "3",
  travelMethod: "hike",
  duration:"2-3 days",
  distance:"79 Miles"
},
 { name: "The Heart of Scotland Trail",
  startPoint:[56.3950, -3.4308],
  endPoint: [56.6009, -4.0525],
  startTown:"Perth",
  endTown:"Fort William",
  description: "The Heart of Scotland Trail is a delightful long distance walk, connecting east and west with a series of river walks, forest tracks, hill climbs and country lanes.  Starting in Perth city centre, the route follows the River Tay upstream into the heart of the remote Perthshire hills and countryside as it meanders through the regions historic towns and villages.  The trail then traverses the wilderness of Rannoch Moor towards the dramatic mountainous landscape of Glencoe and the famous West Highland Way, before arriving in Fort William under the shadow of Scotland’s highest mountain, Ben Nevis.",
  photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThz2f9MIqM_YvxvXgW9zaZ-C9dO4-DxkdPZaSeTMZlpML3-5CLEA",
  difficulty: "4",
  travelMethod: "hike",
  duration:"5-7 days",
  distance:"123 miles"
},
 { name: "Formanrtine and Buchan Way, Aberdeenshire",
  startPoint:[57.2056, -2.1925],
  endPoint: [57.5081, -1.7841],
  startTown:"Dyce",
  endTown:"Peterhead",
  description: "Set on a former railway line, this cycle route passes through the sweeping north east countryside away from the hustle and bustle of road traffic. At Maud you can travel on to either Fraserburgh or Peterhead, both boasting beautiful beaches.",
  photo: "https://cimg.visitscotland.com/cms-images/destinations/aberdeen-city-and-shire/kinnaird-head-lighthouse?size=md",
  difficulty: "2",
  travelMethod: "hike",
  duration:"4-6 hours",
  distance:"40 miles"
},
 { name: "Ayrshire coast cycle way",
  startPoint:[55.6116, -4.6696],
  endPoint: [55.4586, -4.6292],
  startTown:"Irvine",
  endTown:"Ayr",
  description: "This beautiful linear route along the coast from Irvine to Ayr takes in some of Ayrshire's most picturesque scenery, from the glittering coastline with views out to the Isle of Arran to the thriving marshland and woodland of two Scottish wildlife reserves, Gailes Marsh and Shewalton Wood.",
  photo: "https://cimg.visitscotland.com/cms-images/destinations/ayrshire-and-arran/kitesurfing-troon-beach?size=md",
  difficulty: "2",
  travelMethod: "hike",
  duration:"2-3 hours",
  distance:"19 miles"
},
 { name: "Stirling to Skye",
  startPoint:[56.1165, -3.9369],
  endPoint: [57.5359, -6.2263],
  startTown:"Stirling",
  endTown:"Skye",
  description: "For many people a trip to Skye will be on their itinerary and the A82 is the most popular route from the south.  If you’re coming from Glasgow the A82 takes you up the western shores of Loch Lomond, a road which is narrow and windy in places, but from Edinburgh the best way to come is from Stirling on the A85.",
  photo: "https://wildaboutscotland.files.wordpress.com/2014/05/img_3754.jpg?w=1348&h=1022",
  difficulty: "1",
  travelMethod: "hike",
  duration:"5-6 hours",
  distance:"237 miles"
},
 { name: "Ullapool to Durness",
  startPoint:[57.8954, -5.1613],
  endPoint: [58.5686, -4.7469],
  startTown:"Ullapool",
  endTown:"Durness",
  description: "With the possible exception of some sections of the Ardnamurchan and Arran loops, all of the routes described so far include popular roads where traffic can build up, especially in summer.  However, the route up the far northwest of Scotland covers some of the most spectacular and quietest spots in Scotland.  For many, this is Scotland at its wildest and most scenic, where mountains, lochs and small communities combine to give an experience not found anywhere else in the UK.  This is a journey to savour, to stop off, linger and soak up the experience.",
  photo: "https://wildaboutscotland.files.wordpress.com/2014/05/dsc_0055.jpg?w=1348&h=900",
  difficulty: "1",
  travelMethod: "car",
  duration:"2 hours",
  distance:"67 miles"
}
]);
