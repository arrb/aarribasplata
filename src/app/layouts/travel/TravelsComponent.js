import React from "react";
import { css } from "@emotion/core";
import CircleLoader from "react-spinners/CircleLoader";

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
      loading: true
    };
    this.createGoogleMap.bind(this);
  }

  componentDidMount(){
    this.createGoogleMap();
    this.createMarker();
    this.setState({loading: map});
  }

  createGoogleMap() {
    var myLatLng = {lat: -25.363, lng: 131.044};
    var worldBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(70.4043,-143.5291),  
      new google.maps.LatLng(-46.11251, 163.4288)  
    );

    var mapOptions = {
      center : new google.maps.LatLng(0, 0),
      minZoom: 2.7,
      disableDefaultUI: true,
      zoomControl: true,
      gestureHandling: 'cooperative'
    };

    map = new google.maps.Map(document.getElementById('map'), mapOptions);
    map.fitBounds(worldBounds, 0);
  }

  createMarker(){
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
    var abuDhabiCoordinates    = {lat: 24.466667,  lng: 54.366669 };
    // mexico tijuana
    var setOfCountries = [
      {
        position: limaCoordinates, 
        name    : "Lima, Peru", 
        content : "The country where I was born. Peru is the place where I learned how to be compassionate and help everyone succeed."
      },
      {
        position: bostonCoordinates, 
        name    : "Boston, Massachusetts", 
        content : "I moved to Massachusetts when I was 16 and did not speak the language. This state has shaped me into the confident person I am today."
      },
      {
        position: miamiCoordinates, 
        name    : "Miami, Florida", 
        content : "Miami is the place where I go to escape from the fast paced life of Massachusetts."
      },
      {
        position: chicagoCoordinates, 
        name    : "Chicago, Illinois", 
        content : "Chicago is the only other state where I feel at home."
      },
      {
        position: newYorkCoordinates, 
        name    : "Brooklyn, New York", 
        content : "Brooklyn has so much diversity, I am able to find any type of food from all over the world."
      },
      {
        position: franceCoordinates, 
        name    : "Paris, France", 
        content : "Paris is the country where I feel I can be myself."
      },
      {
        position: irelandCoordinates, 
        name    : "Dublin, Ireland", 
        content : "Ireland was the first European country I traveled to."
      },
      {
        position: dubaiCoordinates, 
        name    : "Dubai, United Arab Emirates", 
        content : "Dubai has the most amazing beaches I have ever seen."
      },
      {
        position: abuDhabiCoordinates, 
        name    : "Abu Dhabi, United Arab Emirates", 
        content : "Abu Dhabi open my mind towards different types of religion."
      },
      {
        position: colombiaCoordinates, 
        name    : "Bogota, Colombia", 
        content : "Colombian people make anyone feel comfortable. They are trully the happiest people on earth."
      },
      {
        position: puertoRicoCoordinates, 
        name    : "San Juan, Puerto Rico", 
        content : "San Juan is the closest little Peru from Massachusetts. People like to dance and have a good time with anyone."
      },
      {
        position: monacoCoordinates, 
        name    : "Monte Carlo, Monaco", 
        content : "Monaco left me speachless with its rich culture and big casinos."
      },
      {
        position: netherlandsCoordinates, 
        name    : "Amsterdam, Netherlands", 
        content : "It was amazing to go to Netherlands where my dad got his MBA."
      },
      {
        position: baliCoordinates, 
        name    : "Bali, Indonesia", 
        content : "I went to Bali to clean my soul. I have never felt as peaceful as I did when I went to the Water Palace"
      }
    ]
    var marker ; 

    window.google 
      ? (
        setOfCountries.map( country => {
          var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">'+ country.name +'</h1>'+
            '<div id="bodyContent">'+
            '<p>' + country.content + '</p>'
            '</div>'+
            '</div>';
          var infowindow = new window.google.maps.InfoWindow({
            content: contentString,
            maxWidth: 200
          });
          var marker = new window.google.maps.Marker({
              position: country.position,
              map: map
          });
          marker.addListener('click', function() {
              infowindow.open(map, marker);
          })
          return 
      })
    ) : null

  }

  render() {
    return (
      <div className="content">
        <div className="sweet-loading" style={ this.state.loading ? {display: "show"} : {display: "none"} } >
          <CircleLoader
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