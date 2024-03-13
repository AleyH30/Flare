import ash_hoodie_back from '../Images/ash-hoodie-back.png';
import ash_hoodie_front from '../Images/ash-hoodie-front.png';
import black_stripehoodie_back from '../Images/black-stripehoodie-back.jpg';
import black_stripehoodie_front from '../Images/black-stripehoodie-front.jpg';
import black_twohoodie_back from '../Images/black-twohoodie-back.jpg';
import black_twohoodie_front from '../Images/black-twohoodie-front.jpg';
import blue_dyeshirt from '../Images/blue-dyeshirt.jpg';
import blue_shortshirt from '../Images/blue-shortshirt.jpg';
import blue_stripehoodie_back from '../Images/blue-stripehoodie-back.jpg';
import blue_stripehoodie_front from '../Images/blue-stripehoodie-front.jpg';
import brown_dyeshirt from '../Images/brown-dyeshirt.jpg';
import brown_longshirt from '../Images/brown-longshirt.jpg';
import green_dyeshirt from '../Images/green-dyeshirt.jpg';
import green_hoodie_back from '../Images/green-hoodie-back.png';
import green_hoodie_front from '../Images/green-hoodie-front.png';
import green_longshirt from '../Images/green-longshirt.jpg';
import grey_shortshirt from '../Images/grey-shortshirt.jpg';
import maroon_hoodie_back from '../Images/maroon-hoodie-back.png';
import maroon_hoodie_front from '../Images/maroon-hoodie-front.png';
import mustard_twohoodie_back from '../Images/mustard-twohoodie-back.jpg';
import mustard_twohoodie_front from '../Images/mustard-twohoodie-front.jpg';
import pink_hoodie_back from '../Images/pink-hoodie-back.png';
import pink_hoodie_front from '../Images/pink-hoodie-front.png';
import red_dyeshirt from '../Images/red-dyeshirt.jpg';
import red_twohoodie_back from '../Images/red-twohoodie-back.jpg';
import red_twohoodie_front from '../Images/red-twohoodie-front.jpg';
import white_shortshirt from '../Images/white-shortshirt.jpg';


let products = [
    {
        id: 1,
        name: "Dye Shirt",
        price: 65,
        category: "tee",
        items: [{
                id: "1blue",
                visibility: true,
                color: ["blue"],
                sizes: ["all"],
                tags: ["featured"],
                img: [
                    blue_dyeshirt
                ]},{
                id: "1brown",
                visibility: true,
                color: ["brown"],
                sizes: ["all"],
                tags: [],
                img: [
                    brown_dyeshirt
                ]},{
                id: "1green",
                visibility: true,
                color: ["green"],
                sizes: ["all"],
                tags: [],
                img: [
                    green_dyeshirt
                ]},{
                id: "1red",
                visibility: true,
                color: ["red"],
                sizes: "all",
                tags: ["featured"],
                img: [
                    red_dyeshirt
                ]}]
    },{
        id: 2,
        name: "Short Sleeve Shirt",
        price: 40,
        category: "tee",
        items: [{
                id: "2blue",
                visibility: true,
                color: ["blue"],
                sizes: ["all"],
                tags: [],
                img: [
                    blue_shortshirt
                ]},{
                id:"2grey",
                visibility: true,
                color: ["grey"],
                sizes: ["all"],
                tags: [],
                img: [
                    grey_shortshirt
                ]},{
                id: "2white",
                visibility: true,
                color: ["white"],
                sizes: ["all"],
                tags: [],
                img: [
                    white_shortshirt
                ]}]
    },{
        id: 3,
        name: "Long Sleeve Shirt",
        price: 80,
        category: "tee",
        items: [{
                id: "3brown",
                visibility: true,
                color: ["brown"],
                sizes: ["all"],
                tags: ["featured"],
                img: [
                    brown_longshirt
                ]},{
                id: "3green",
                visibility: true,
                color: ["green"],
                sizes: ["all"],
                tags: [],
                img: [
                    green_longshirt
                ]}]
    },{
        id: 4,
        name: "Simple Hoodie",
        price: 45,
        category: "hoodie",
        items: [{
                id: "4green",
                visibility: true,
                color: ["green"],
                sizes: ["all"],
                tags: [],
                img: [
                    green_hoodie_front, green_hoodie_back
                ]},{
                id: "4white",
                visibility: true,
                color: ["white"],
                sizes: ["all"],
                tags: [],
                img: [
                    ash_hoodie_front, ash_hoodie_back
                ]},{
                id: "4red",
                visibility: true,
                color: ["red"],
                sizes: ["all"],
                tags: [],
                img: [
                    maroon_hoodie_front, maroon_hoodie_back
                ]},{
                id: "4pink",
                visibility: true,
                color: ["pink"],
                sizes: ["all"],
                tags: [],
                img: [
                    pink_hoodie_front, pink_hoodie_back
                ]}]
    },{
        id: 5,
        name: "Stripe Hoodie",
        price: 110,
        category: "hoodie",
        items: [{
                id: "5black",
                visibility: true,
                color: ["black"],
                sizes: ["all"],
                tags: [],
                img: [
                    black_stripehoodie_front, black_stripehoodie_back
                ]},{
                id: "5blue",
                visibility: true,
                color: ["blue"],
                sizes: ["all"],
                tags: [],
                img: [
                    blue_stripehoodie_front, blue_stripehoodie_back
                ]}]
    }, {
        id: 6,
        name: "Two-Stripe Hoodie",
        price: 75,
        category: "hoodie",
        items: [{
            id: "6black",
            visibility: true,
            color: ["black"],
            sizes: ["all"],
            tags: ["featured"],
            img: [
                black_twohoodie_front, black_twohoodie_back
            ]},{
            id: "6yellow",
            visibility: true,
            color: ["yellow"],
            sizes: ["all"],
            tags: ["featured"],
            img: [
                mustard_twohoodie_front, mustard_twohoodie_back
            ]},{
            id: "6red",
            visibility: true,
            color: ["red"],
            sizes: ["all"],
            tags: ["featured"],
            img: [
                red_twohoodie_front, red_twohoodie_back
            ]}]
    }
]

export default products