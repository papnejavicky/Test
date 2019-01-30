import React, { Component } from "react";
import ReactDOM from "react-dom";
var $S = require("scriptjs");
class GoogleMap extends React.Component {
  constructor(props) {
    super(props);
    $S(
      "https://maps.googleapis.com/maps/api/js?key=" +
        this.props.Kkey +
        "&libraries=places",
      () => {
        this.initMap();
      }
    );
  }
  componentDidMount() {
    /* alert(
      this.props.Kkey +
        " " +
        this.props.defaultLang +
        " " +
        this.props.defaultLong +
        " " +
        this.props.defaultLang
    );
    console.log(this.props);*/
  }
  initMap() {
    const google = window.google;
    //*global google*//
    var lat = this.props.defaultLang;
    var long = this.props.defaultLong;
    var zoom = this.props.zoom;
    var center = new google.maps.LatLng(lat, long);
    var mapOptions = {
      center: center,
      zoom: zoom,
      mapTypeId: google.maps.MapTypeId.roadmap
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    var locations = [
      {
        lat: "30.706849761",
        long: "76.688178317",
        headding: "MYcompany",
        description: "Mysense Technologies - Mohali"
      }
    ];

    for (i = 0; i < locations.length; i++) {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i].lat, locations[i].long),
        map: map,
        icon: "",
        title: ""
      });

      google.maps.event.addListener(
        marker,
        "click",
        (function(marker, i) {
          return function() {
            var Html = "<div class='location-info'>";
            Html += "<h4>" + locations[i].headding + "</h4>";
            Html +=
              "<p class='location-description'>" +
              locations[i].description +
              "</p>";
            Html += "</div>";

            infowindow.setContent(Html);
            infowindow.open(map, marker);
          };
        })(marker, i)
      );
    }
  }

  render() {
    return (
      <div>
        <div id="map" style={{ height: 600, width: 600 }}>
          Getting Map props value with default parameter
        </div>
      </div>
    );
  }
}

export default GoogleMap;
/*document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<GoogleMap />, document.getElementById("root"));
});*/
