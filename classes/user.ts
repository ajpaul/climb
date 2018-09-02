export class User {
    constructor(
        $key : string,
        firstName : string,
        lastName : string, 
        userSince? : string,
        homeGym? : string, 
        blurb? : string // a short bio on the profile
    ){ }
}

export interface IUser {
    $key : string,
    firstName : string,
    lastName : string, 
    userSince? : string,
    homeGym? : string, 
    blurb? : string // a short bio on the profile
}

//fix this?
// export class GymEmployee extends User { // ??????????
//     $key : string;
//     firstName : string;
//     lastName : string; 
//     userSince : string;
//     homeGym? : string; 
//     blurb? : string; // a short bio on the profile
//     gymEmployee : boolean;
//     employerKey? : string; // corresponds to the gym primary key
// }

// future
// profile pic? gravatar or firebase storage?
// pro user?
// friends
// climbing history (days, routes, etc)
// email
// can we contact them flag
