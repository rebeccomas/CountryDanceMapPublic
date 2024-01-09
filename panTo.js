// import React, { useState } from 'react';
"use strict";

import locationTable from './Dance_Locations.json' assert {type: 'json'}
let lastMarker;

async function panTo(){
  const mapSection = document.getElementById('mapAndTable');
  const mapElement = document.getElementById('my-map');
  const mapLoader = document.createElement('GMPX-API-LOADER')
  

  // console.log(process.env.API_KEY)

  mapLoader.apiKey = ""//#APIcode
  // mapLoader.apiKey = ""

  mapSection.appendChild(mapLoader)
  // mapLoader.key = window.API_KEY;

  for (var loc of locationTable.Dance_Locations) {
    let newMarker = document.createElement("GMP-ADVANCED-MARKER");
    newMarker.innerHTML= '<!--' + loc.Name + '-->'
    newMarker.id = loc['Place ID'] +' marker'
    newMarker.className = "pannable"
    newMarker.position = {lat: loc.Coordinate.Latitude, lng: loc.Coordinate.Longitude}
    newMarker.title = loc['Place ID']
    mapElement.appendChild(newMarker);
  }

window.addEventListener('load', () => {
    // const mapElement = document.getElementById('my-map');
    const markers = document.querySelectorAll('gmp-advanced-marker.pannable');
    const infowindow = new google.maps.InfoWindow({
      maxWidth: 710,
      ariaLabel: "Primary",
    });
    markers.forEach((marker) => {
      
      marker.addListener('click', (e) => {
        let danceSchedule = "";
        let ageRestriction = "";
        let danceStyles = "";
        let lessons = "";
        let coverFee = "";
        let Notes = "";
        let tab = "\t";

        mapElement.innerMap.panTo(marker.position);
        for (var loc of locationTable.Dance_Locations) {
          if (loc['Place ID'] == marker.title) {
              ////////////////////////////////Dance Schedule////////////////////////////
              if(loc['Dance Schedule'].Monday != ""){
                if(loc['Lesson Schedule'].Monday != ""){
                  danceSchedule = danceSchedule.concat('<p>Monday: ' + loc['Dance Schedule'].Monday + ' (Lessons: ' + loc['Lesson Schedule'].Monday + ')</p>')
                } else {
                  danceSchedule = danceSchedule.concat('<p>Monday: ' + loc['Dance Schedule'].Monday + '</p>')
                }
              }
              if(loc['Dance Schedule'].Tuesday != ""){
                if(loc['Lesson Schedule'].Tuesday != ""){
                  danceSchedule = danceSchedule.concat('<p>Tuesday: ' + loc['Dance Schedule'].Tuesday + ' (Lessons: ' + loc['Lesson Schedule'].Tuesday + ')</p>')
                } else {
                  danceSchedule = danceSchedule.concat('<p>Tuesday: ' + loc['Dance Schedule'].Tuesday + '</p>')
                }
              }
              if(loc['Dance Schedule'].Wednesday != ""){
                if(loc['Lesson Schedule'].Wednesday != ""){
                  danceSchedule = danceSchedule.concat('<p>Wednesday: ' + loc['Dance Schedule'].Wednesday + ' (Lessons: ' + loc['Lesson Schedule'].Wednesday + ')</p>')
                } else {
                  danceSchedule = danceSchedule.concat('<p>Wednesday: ' + loc['Dance Schedule'].Wednesday + '</p>')
                }
              }
              if(loc['Dance Schedule'].Thursday != ""){
                if(loc['Lesson Schedule'].Thursday != ""){
                  danceSchedule = danceSchedule.concat('<p>Thursday: ' + loc['Dance Schedule'].Thursday + ' (Lessons: ' + loc['Lesson Schedule'].Thursday + ')</p>')
                } else {
                  danceSchedule = danceSchedule.concat('<p>Thursday: ' + loc['Dance Schedule'].Thursday + '</p>')
                }
              }
              if(loc['Dance Schedule'].Friday != ""){
                if(loc['Lesson Schedule'].Friday != ""){
                  danceSchedule = danceSchedule.concat('<p>Friday: ' + loc['Dance Schedule'].Friday + ' (Lessons: ' + loc['Lesson Schedule'].Friday + ')</p>')
                } else {
                  danceSchedule = danceSchedule.concat('<p>Friday: ' + loc['Dance Schedule'].Friday + '</p>')
                }
              }
              if(loc['Dance Schedule'].Saturday != ""){
                if(loc['Lesson Schedule'].Saturday != ""){
                  danceSchedule = danceSchedule.concat('<p>Saturday: ' + loc['Dance Schedule'].Saturday + ' (Lessons: ' + loc['Lesson Schedule'].Saturday + ')</p>')
                } else {
                  danceSchedule = danceSchedule.concat('<p>Saturday: ' + loc['Dance Schedule'].Saturday + '</p>')
                }
              }
              if(loc['Dance Schedule'].Sunday != ""){
                if(loc['Lesson Schedule'].Sunday != ""){
                  danceSchedule = danceSchedule.concat('<p>Sunday: ' + loc['Dance Schedule'].Sunday + ' (Lessons: ' + loc['Lesson Schedule'].Sunday + ')</p>')
                } else {
                  danceSchedule = danceSchedule.concat('<p>Sunday: ' + loc['Dance Schedule'].Sunday + '</p>')
                } 
              }   

              ////////////////////////////////Age Restriction and Cover Fee////////////////////////////
              if(loc['Age Restriction'] == "21+"){
                ageRestriction = loc['Age Restriction']
                if(loc['Cover Fee']['21+'] !="N"){
                  coverFee = coverFee.concat('21+: $' + loc['Cover Fee']['21+'])
                }
              } else if(loc['Age Restriction'] == "18+"){
                  ageRestriction = loc['Age Restriction']
                  if(loc['Cover Fee']['21+'] !="N"){
                    if(loc['Cover Fee']['Under 21'] !="N"){
                      coverFee = coverFee.concat('21+: $' + loc['Cover Fee']['21+'] +', 18+: $' + loc['Cover Fee']['Under 21'])
                    } else{
                      coverFee = coverFee.concat('21+: $' + loc['Cover Fee']['21+'])
                    }                   
                  }
              } else{
                ageRestriction = "None"
                if(loc['Cover Fee']['21+'] !="N"){
                  if(loc['Cover Fee']['Under 21'] !="N"){
                    coverFee = coverFee.concat('21+: $' + loc['Cover Fee']['21+'] +', Under 21: $' + loc['Cover Fee']['Under 21'])
                  }else{
                    coverFee = coverFee.concat('21+: $' + loc['Cover Fee']['21+'])
                  }                  
                }               
              }
              if (coverFee == ""){
                coverFee = "None";
              }

              ////////////////////////////////Dance Styles////////////////////////////
              if(loc['Dance Style']['Line Dance'] == true){
                  danceStyles = danceStyles.concat('Line Dance, ')
                }
              if(loc['Dance Style']['Pattern Partner'] == true){
                  danceStyles = danceStyles.concat('Pattern Partner, ')
                }
              if(loc['Dance Style']['Classic Two-Step'] == true){
                danceStyles = danceStyles.concat('Classic Two-Step, ')
              }
              if(loc['Dance Style']['Texas Two-Step'] == true){
                danceStyles = danceStyles.concat('Texas Two-Step, ')
              }
              if(loc['Dance Style']['Bar Coast Swing'] == true){
                danceStyles = danceStyles.concat('Bar Coast Swing, ')
              }
              if(loc['Dance Style']['Country Swing'] == true){
                danceStyles = danceStyles.concat('Country Swing, ')
              }
              if(loc['Dance Style']['East Coast Swing'] == true){
                danceStyles = danceStyles.concat('East Coast Swing, ')
              }
              if(loc['Dance Style']['West Coast Swing'] == true){
                danceStyles = danceStyles.concat('West Coast Swing, ')
              }             
              if (danceStyles !=""){
                danceStyles = danceStyles.substr(0, danceStyles.length-2);
              }             
              break;
            }
          }

        let site;
        if (loc.Website == ""){
          site = ""
        } else{
          // site = '<gmpx-icon-button icon="Public" href="https://www.'+ loc.Website +'" condensed=true variant="filled" style="display:inline-block; padding-right: 20px;">Website</gmpx-icon-button>'
          site = '<a href="https://www.'+ loc.Website +'" target="_blank"><button style="display:inline-block; padding-right: 20px; border-radius: 50%;">Website</button></a>'
        }

        const contentString =
        '<div id="content">' +
        // '<gmpx-place-data-provider place = "'+ newMarker.title +'">'+
        '<h2>' + loc.Name + '</h2>'+
        '<p><b>' + loc.Address + '</b></p>'+
        // '<gmpx-place-directions-button condensed=true variant="filled" style="display:inline-block; padding-right: 20px;">Directions</gmpx-place-directions-button>'+
        '<a href="' + loc['Google Maps Link'] + '" target="_blank"><button style="display:inline-block; padding-right: 20px; border-radius: 50%;">Directions</button></a>' +
        site +
        '<p><b> Dance Styles: </b></p>'+
        '<p>' + danceStyles + '</p>'+
        '<p><b>Dance Schedule:</b></p>' +
        danceSchedule +
        '<p><b>Age Restrictions:</b> ' + ageRestriction +'</p>' +
        '<p><b> Cover Fee: </b> '+ coverFee + '</p>' +
        // '<p><gmpx-place-photo-gallery max-tiles=3></gmpx-place-photo-gallery></p>'+
        // '</gmpx-place-data-provider>'+
        "</div>";

        if (lastMarker == marker.title){
          infowindow.close();
          lastMarker = "";
        } else{
          infowindow.close();
          infowindow.setContent(contentString)
          console.log("infobox should be open")
          infowindow.open({
            anchor: marker,
            mapElement,
          });  
          lastMarker = marker.title        
        }
      });
    });
  });

}

panTo();
