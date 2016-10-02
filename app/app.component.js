"use strict";
var HEROES = [
    { id: 11, name: "Bloodseeker", team: "Dire" },
    { id: 12, name: "Sniper", team: "Dire" },
    { id: 13, name: "Warlock", team: "Radiant" },
    { id: 14, name: "Windranger", team: "Radiant" },
    { id: 15, name: "WrathKing", team: "Dire" },
    { id: 16, name: "Witch Doctor", team: "Radiant" },
    { id: 17, name: "Dragon Knight", team: "Dire" },
    { id: 18, name: "Sand King", team: "Radiant" },
    { id: 19, name: "Bounty Hunter", team: "Dire" },
    { id: 20, name: "Viper", team: "Radiant" }
];
var AppComponent = (function () {
    function AppComponent() {
        this.hero = {
            id: 1,
            name: 'Windstorm',
            team: 'Neutral'
        };
        this.heroes = HEROES;
    }
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
//# sourceMappingURL=app.component.js.map