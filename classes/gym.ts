export class Gym {

    constructor(
        $key : string,
        gymName : string,
        address1 : string,
        address2 : string,
        city : string,
        state: string,
        zip : string,
        phone : string,
        email : string,
        website : string,
        isMainGym? : boolean, // like Stone Summit Atlanta - first one
        childGyms? : string[], // SSM, SSK (but their keys, not names)
        coordinates? : string, // for plotting gyms on a map
        climbRatingDescription? : string,
    ) { }
}

export interface IGym {
    $key : string;
    gymName : string;
    address1 : string;
    address2? : string;a
    city : string;
    state: string;
    zip : string;
    phone : string;
    email : string;
    website : string;
    isMainGym? : boolean; // like Stone Summit Atlanta - first one
    childGyms? : string[]; // SSM, SSK (but their keys, not names)
    coordinates : string; // for plotting gyms on a map
    climbRatingDescription : string;
}

// future
// gym icon/logo
// gym membership option - do they pay for storage? 
// news - make model
// events - make model

// future - gym settings
// route schedule - how often a route is taken down, in integer days
// data preservation - delete data inline with route schedule