import React, {Component} from 'react';
import RouteList from './RouteList'
import L from 'leaflet';
import './Map.css';
import './route-planner.css'
// import Routing from 'leaflet-routing-machine';
// import {MapLayer} from 'react-leaflet';
require('os-leaflet');

require('leaflet-routing-machine');
require('lrm-graphhopper'); // This will tack on the class to the L.Routing namespace



export default class RoutePlanner extends Component {

  constructor(props){
    super(props);
    this.state= {
      routes: [],
      been_routed: false,
      routing: ''
    }
    let been_routed = false;
    this.MapWrapper = this.MapWrapper.bind(this)
    this.flyTo = this.flyTo.bind(this)
    this.newRoute = this.newRoute.bind(this)

  }
  flyTo = function (coords) {
      this.map.flyTo([55.8642, -4.2518]);
  };


  newRoute = function(startCoords, endCoords, method){

    if(this.state.been_routed === true){
        console.log("hi");
       this.state.routing.spliceWaypoints(0, 2);}


     this.state.routing = L.Routing.control({

      router: new L.Routing.GraphHopper('3eff14d7-7b89-4050-98ef-f0d72edb928e', {
        urlParameters: {
          vehicle: method
        }}),
        waypoints: [
          L.latLng(startCoords),
          L.latLng(endCoords)
        ],
        routeWhileDragging: true
      }).addTo(this.map);
     this.state.been_routed = true;

    }

  MapWrapper = function () {
    const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
   this.map  = L.map('map')
                 .addLayer(osmLayer)
                 .setView([0, 0], 5);

    }

  componentDidMount(){
    const url = "/api/routes";
    fetch(url).then(res => res.json()).then(routes => this.setState({
      routes: routes
    }));
    this.MapWrapper()
  }
  render(){
    return(
      <div route-planner-div>
          <h4>Route Planner</h4>
          <RouteList  newRoute={this.newRoute} routes={this.state.routes} />
          <div id='map'/>
      </div>
    )
  }
};
{/* <Child doSomething={() => this.callMe()} /> */}
