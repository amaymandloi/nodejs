function farm (key , value){
    let farmList = [
        {
            "farm_name":"rajwada",
            "city":"indore",
            "county":"India",
            "lat":501,
            "long":401
        },
        {
            "farm_name":"bhawarkuaa",
            "city":"Indore",
            "county":"India",
            "lat":502,
            "long":402
        },
        {
            "farm_name":"VijayNagar",
            "city":"Indore",
            "county":"India",
            "lat":503,
            "long":403
        },
        {
            "farm_name":"MR9",
            "city":"Indore",
            "county":"India",
            "lat":504,
            "long":404
        },
        {
            "farm_name":"GeetaBhawan",
            "city":"Indore",
            "county":"India",
            "lat":505,
            "long":405
        },
    ]
    if (value == "") {
        console.log("Please enter valid value!");
        return;
    }
    if (!value) {
        console.log("Please enter valid value!");
        return;
    }
    farmList.forEach((farm)=>{
             if (farm[key] == value) {
                console.log(farm)
             } 
    });
}
farm("long",405);

