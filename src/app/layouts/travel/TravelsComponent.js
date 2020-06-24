import React from "react";
import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";

var map;

const override = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
`;
class TravelsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          GOOGLE_MAP_API_KEY: 'AIzaSyBizrFcjeueuIq774fmA-vaertz5T97ZgQ',
          loading: true
        };
        this.createGoogleMap.bind(this);
    }

    componentWillMount() {
        console.log("WILL MOUNT")

        const script = document.createElement("script");

        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBizrFcjeueuIq774fmA-vaertz5T97ZgQ&libraries=places";
        script.async = true;
        script.defer = true;

        document.body.appendChild(script);
    }

    componentDidMount(){
        this.createGoogleMap();
        this.createMarker();
        this.setState({loading: map})
    }

    createGoogleMap() {
        console.log("create google wwmap55" , google, map)
        var myLatLng = {lat: -25.363, lng: 131.044};
        var worldBounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(70.4043,-143.5291),  
            new google.maps.LatLng(-46.11251, 163.4288)  
        );
        var mapOptions = {
            center : new google.maps.LatLng(0, 0),
            minZoom: 2.7,
            zoomControl: false,
            gestureHandling: 'none'
        };
        map = new google.maps.Map(document.getElementById('map'), mapOptions);
        map.fitBounds(worldBounds, 0);
    }

    createMarker(){
        console.log("create google map marker" , this);
        var limaCoordinates        = {lat: -12.096280, lng: -76.939500};
        var bostonCoordinates      = {lat: 42.361145,  lng: -71.057083};
        var miamiCoordinates       = {lat: 25.761681,  lng: -80.191788};
        var chicagoCoordinates     = {lat: 41.8756,    lng: -87.6244  };
        var newYorkCoordinates     = {lat: 40.502440,  lng: -74.462930};
        var franceCoordinates      = {lat: 48.856788,  lng: 2.351077  };
        var irelandCoordinates     = {lat: 53.344120,  lng: -6.267337 };
        var dubaiCoordinates       = {lat: 25.267406,  lng: 55.292681 };
        var colombiaCoordinates    = {lat: 4.658555,   lng: -74.053345};
        var puertoRicoCoordinates  = {lat: 18.386665,  lng: -66.061288};
        var monacoCoordinates      = {lat: 43.740455,  lng: 7.425611  };
        var netherlandsCoordinates = {lat: 52.368097,  lng: 4.899590  };
        var baliCoordinates        = {lat: -8.378402,  lng: 115.134465};
        // mexico tijuana
        var setOfCountries = [
            {position: limaCoordinates       , title: "Lima, Peru the country where I was born"            },
            {position: bostonCoordinates     , title: "Boston Massachusetts, the place I now call home"    },
            {position: miamiCoordinates      , title: "Miami Florida, the place I go when I'm missing home"},
            {position: chicagoCoordinates    , title: "The other place I feel at home."                    },
            {position: newYorkCoordinates    , title: "The place I go when I am looking for good food"     },
            {position: franceCoordinates     , title: "The place where I want to retire"                   },
            {position: irelandCoordinates    , title: "First time I was in Europe"                         },
            {position: dubaiCoordinates      , title: "The best beach I have ever seen"                    },
            {position: colombiaCoordinates   , title: "Place with people with good hearts"                 },
            {position: puertoRicoCoordinates , title: "Place where I go to escape from Boston"             },
            {position: monacoCoordinates     , title: "Place I wish to come back soon"                     },
            {position: netherlandsCoordinates, title: "Place where my dad went to get his MBA."            },
            {position: baliCoordinates       , title: "Amazing place to clean your soul"                   }
        ]
        
         window.google 
            ? (
               setOfCountries.map( country => {
                new window.google.maps.Marker({
                    position: country.position,
                    map: map,
                    title: country.title
                })
               })
            ) : console.log("boo")
    }
                      // color={"#50E3C2"}

    render() {
        console.log("RENDER ! ", this.state.loading, map)
        return (
            <div className="content">
                <div className="sweet-loading" style={ this.state.loading ? {display: "show"} : {display: "none"} } >
                    <PacmanLoader
                      css={override}
                      size={150}
                      color={"#50E3C2"}
                      loading={this.state.loading}
                    />
                </div>
                <div id="map"></div> 
                <h1 id="title-abs">Places I have been ...</h1>
            </div>
        )
    }
}


export default TravelsComponent;