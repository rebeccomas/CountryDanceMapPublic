async function GenerateTable(filter){
    const response = await fetch('./Dance_Locations.json');
    const locationJSON = await response.json();
    let table = document.getElementById("table-body");
    let JSONLen = locationJSON.Dance_Locations.length
    const mapElement = document.getElementById('my-map');  
    //delete the existing table then recreate it.
    $("#table-body tr").remove()
    if(filter){
        let selectElement = document.querySelector('#StateDrop').value;

        if (selectElement != "-"){
            if(selectElement == "AL"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 32.60298762506326,lng: -85.87831432069676};
                // mapElement.styles = [{
                //     featureType: 'administrative.province',
                //     elementType: 'geometry.stroke',
                //     stylers: [{
                //       visibility: '#off'
                //     }]
                //   }, ]
            } else if (selectElement == "AK"){
                mapElement.zoom = 4;
                mapElement.center = {lat: 63.66575181818917, lng: -149.7044246580702};
            } else if(selectElement == "AZ"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 34.30135406745482, lng: -111.70832194398214};
            } else if(selectElement == "AR"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 34.5355450390804, lng: -91.3358522640787};
            } else if(selectElement == "CA"){
                mapElement.zoom = 6;
                mapElement.center = {lat: 37.20393240597717, lng: -120.30365903607633};
            } else if(selectElement == "CO"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 38.919499832575426, lng: -105.66158760255317};
            } else if(selectElement == "CT"){
                mapElement.zoom = 9;
                mapElement.center = {lat: 41.47420989895652, lng: -72.74017882526918};
            } else if(selectElement == "DE"){
                mapElement.zoom = 9;
                mapElement.center = {lat: 39.15200856752437, lng: -75.58487337327732};
            } else if(selectElement == "FL"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 28.18430455037509, lng: -83.91790953878586 };
            } else if(selectElement == "GA"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 32.91515503862144, lng: -83.18658158075522};
            } else if(selectElement == "HI"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 20.332889795634742, lng: -157.24917345780008};
            } else if(selectElement == "ID"){
                mapElement.zoom = 6;
                mapElement.center = {lat: 45.26914740411183, lng: -114.90342556156334};
            } else if(selectElement == "IL"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 39.84308205279999, lng: -89.35344050671473};
            } else if(selectElement == "IN"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 39.952892630527685, lng: -86.17244905196212};
            } else if(selectElement == "IA"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 41.99553339302036, lng: -93.34252288679413};
            } else if(selectElement == "KS"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 38.350190282902524, lng: -98.36200134283027};
            } else if(selectElement == "KY"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 37.49850491776951, lng: -85.52811932333917};
            } else if(selectElement == "LA"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 31.056684580377663, lng: -91.74675468913995};
            } else if(selectElement == "ME"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 45.24618139337471, lng: -68.95019081567948};
            } else if(selectElement == "MD"){
                mapElement.zoom = 8;
                mapElement.center = {lat: 38.854182048558215, lng: -77.20193997562372};
            } else if(selectElement == "MA"){
                mapElement.zoom = 8;
                mapElement.center = {lat: 41.848634140932326, lng: -71.84296254013704};
            } else if(selectElement == "MI"){
                mapElement.zoom = 6;
                mapElement.center = {lat: 44.63030505866913, lng: -85.46118911268644};
            } else if(selectElement == "MN"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 46.225525258869006, lng: -93.68390302170602};
            } else if(selectElement == "MS"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 32.78172753481053, lng: -89.63441826330732};
            } else if(selectElement == "MO"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 38.29376454057642, lng: -92.60617108139768};
            } else if(selectElement == "MT"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 46.658843408168984, lng: -109.81236868889575};
            } else if(selectElement == "NE"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 41.045530382809474, lng: -100.04664188267886};
            } else if(selectElement == "NV"){
                mapElement.zoom = 6;
                mapElement.center = {lat: 38.66593181585938, lng: -116.89723487275869};
            } else if(selectElement == "NH"){
                mapElement.zoom = 8;
                mapElement.center = {lat: 43.88781261683626, lng: -72.03152145358989};
            } else if(selectElement == "NJ"){
                mapElement.zoom = 8;
                mapElement.center = {lat: 40.01546459172137, lng: -74.88495593320357};
            } else if(selectElement == "NM"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 34.16376627336139, lng: -106.16837716929177};
            } else if(selectElement == "NY"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 42.786002658583676, lng: -76.01076292947087};
            } else if(selectElement == "NC"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 35.02984947166842, lng: -79.84701124109215};
            } else if(selectElement == "ND"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 47.42992116865672, lng: -100.53865641089105};
            } else if(selectElement == "OH"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 40.3610929147186, lng: -82.8903352729224};
            } else if(selectElement == "OK"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 35.36775219490615, lng: -98.60165479606788};
            } else if(selectElement == "OR"){
                mapElement.zoom = 
                mapElement.center = {lat: 43.95949660446641, lng: -120.58817506376947};
            } else if(selectElement == "PA"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 40.63937880514037, lng: -77.34557884158731};
            } else if(selectElement == "RI"){
                mapElement.zoom = 9;
                mapElement.center = {lat: 41.54886153323278, lng: -71.4662565591606};
            } else if(selectElement == "SC"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 33.57262499103177, lng: -81.02356566568574};
            } else if(selectElement == "SD"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 43.85932935729144, lng: -100.41048641597405};
            } else if(selectElement == "TN"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 35.50320353276507, lng: -85.94768372713925};
            } else if(selectElement == "TX"){
                mapElement.zoom = 6;
                mapElement.center = {lat: 30.8916054683652, lng: -99.72650305674559};
            } else if(selectElement == "UT"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 39.256815324441945, lng: -111.61393697259429};
            } else if(selectElement == "VT"){
                mapElement.zoom = 8;
                mapElement.center = {lat: 43.83554932799226, lng: -72.58099912404215};
            } else if(selectElement == "VA"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 37.27372073225429, lng: -79.23023597861875};
            } else if(selectElement == "WA"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 47.313543249915185, lng: -120.37437089869799};
            } else if(selectElement == "WV"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 38.64027251853448, lng: -80.31766751386931};
            } else if(selectElement == "WI"){
                mapElement.zoom = 7;
                mapElement.center = {lat: 44.7838447998723, lng: -89.75685844542062};
            } else {                                        //if(selectElement = "WY")
                mapElement.zoom = 7;
                mapElement.center = {lat: 43.07047238220474, lng: -107.38577223940415};
            }

            for (i = 0; i < JSONLen; i++){
                if(selectElement != locationJSON.Dance_Locations[i].State){
                    locationJSON.Dance_Locations.splice(i,1);
                    JSONLen--;
                    i--;
                }
            }
        } 

        ////////////////Add this code below back if you want the map to reset to the "default" zoom when someone filters the map with "-" as the state value///////

        // else{
        //     mapElement.zoom = 4;
        //     mapElement.center = {lat: 38.74633641617695, lng: -97.7580946006948};
        // }

        selectElement = document.querySelector('#DanceStyleDrop').value;
        if (selectElement != "-"){
             for (i = 0; i < JSONLen; i++){
                if (locationJSON.Dance_Locations[i]['Dance Style'][selectElement] == false){
                    locationJSON.Dance_Locations.splice(i,1);
                    JSONLen--;
                    i--;
                }
            }
        }

        selectElement = document.querySelector('#DanceNightDrop').value;
        if (selectElement != "-"){
            for (i = 0; i < JSONLen; i++){
                if (locationJSON.Dance_Locations[i]['Dance Schedule'][selectElement] == ""){
                   locationJSON.Dance_Locations.splice(i,1);
                   JSONLen--;
                   i--;
               }
           }
       }

       selectElement = document.querySelector('#hasLessonsDrop').value;
       if (selectElement != "-"){
            let hasLesson;
            for (i = 0; i < JSONLen; i++){
                hasLesson = "No"
                if(locationJSON.Dance_Locations[i]['Lesson Schedule'].Monday != "" ||
                locationJSON.Dance_Locations[i]['Lesson Schedule'].Tuesday != "" ||
                locationJSON.Dance_Locations[i]['Lesson Schedule'].Wednesday != "" ||
                locationJSON.Dance_Locations[i]['Lesson Schedule'].Thursday != "" ||
                locationJSON.Dance_Locations[i]['Lesson Schedule'].Friday != "" ||
                locationJSON.Dance_Locations[i]['Lesson Schedule'].Saturday != "" ||
                locationJSON.Dance_Locations[i]['Lesson Schedule'].Sunday != ""){
                    hasLesson = "Yes";
                }
                if (selectElement != hasLesson){
                  locationJSON.Dance_Locations.splice(i,1);
                  JSONLen--;
                  i--;
                }
            } 
        }

        selectElement = document.querySelector('#ageRestrictionDrop').value;
        if (selectElement != "-"){
            for (i = 0; i < JSONLen; i++){
                if (locationJSON.Dance_Locations[i]['Age Restriction'] != selectElement){
                   locationJSON.Dance_Locations.splice(i,1);
                   JSONLen--;
                   i--;
               }
           }
       }

// Now that table has been filtered, only the markers for remaining locations will be shown.

    } else{
       ////////////////Add this code below back if you want the map to reset to the "default" zoom when someone uses the reset filter button///////

        // mapElement.zoom = 4;
        // mapElement.center = {lat: 38.74633641617695, lng: -97.7580946006948};
        document.querySelector('#StateDrop').value = "-"
        document.querySelector('#DanceStyleDrop').value = "-"
        document.querySelector('#DanceNightDrop').value = "-"
        document.querySelector('#hasLessonsDrop').value = "-"
        document.querySelector('#ageRestrictionDrop').value = "-"
    }

    for (var loc of locationJSON.Dance_Locations){
        let newRow= document.createElement("TR");
        let danceStylesCell = "";

        if(loc['Dance Style']['Line Dance'] == true){
            danceStylesCell = danceStylesCell.concat('Line Dance, ')
        }
        if(loc['Dance Style']['Pattern Partner'] == true){
            danceStylesCell = danceStylesCell.concat('Pattern Partner, ')
        }
        if(loc['Dance Style']['Classic Two-Step'] == true){
        danceStylesCell = danceStylesCell.concat('Classic Two-Step, ')
        }
        if(loc['Dance Style']['Texas Two-Step'] == true){
        danceStylesCell = danceStylesCell.concat('Texas Two-Step, ')
        }
        if(loc['Dance Style']['Bar Coast Swing'] == true){
        danceStylesCell = danceStylesCell.concat('Bar Coast Swing, ')
        }
        if(loc['Dance Style']['Country Swing'] == true){
        danceStylesCell = danceStylesCell.concat('Country Swing, ')
        }
        if(loc['Dance Style']['East Coast Swing'] == true){
        danceStylesCell = danceStylesCell.concat('East Coast Swing, ')
        }
        if(loc['Dance Style']['West Coast Swing'] == true){
        danceStylesCell = danceStylesCell.concat('West Coast Swing, ')
        }             
        if (danceStylesCell !=""){
        danceStylesCell = danceStylesCell.substr(0, danceStylesCell.length-2);
        }  
        
        let danceSchedule = "";
        if(loc['Dance Schedule'].Monday != ""){
            danceSchedule = danceSchedule.concat('Mon, ')
        }
        if(loc['Dance Schedule'].Tuesday != ""){
            danceSchedule = danceSchedule.concat('Tue, ')
        }
        if(loc['Dance Schedule'].Wednesday != ""){
            danceSchedule = danceSchedule.concat('Wed, ')
        }
        if(loc['Dance Schedule'].Thursday != ""){
            danceSchedule = danceSchedule.concat('Thu, ')
        }  
        if(loc['Dance Schedule'].Friday != ""){
            danceSchedule = danceSchedule.concat('Fri, ')
        }  
        if(loc['Dance Schedule'].Saturday != ""){
            danceSchedule = danceSchedule.concat('Sat, ')
        }  
        if(loc['Dance Schedule'].Sunday != ""){
            danceSchedule = danceSchedule.concat('Sun, ')
        }            
        if (danceSchedule !=""){
            danceSchedule = danceSchedule.substr(0, danceSchedule.length-2);
        } 

        let hasLessonsCell = "No";
        if (loc['Lesson Schedule'].Monday != "" || 
        loc['Lesson Schedule'].Tuesday != "" || 
        loc['Lesson Schedule'].Wednesday != "" ||
        loc['Lesson Schedule'].Thursday != "" ||
        loc['Lesson Schedule'].Friday != "" || 
        loc['Lesson Schedule'].Saturday != "" ||
        loc['Lesson Schedule'].Sunday != ""){
            hasLessonsCell = "Yes";
        }
        
        newRow.innerHTML=
        '<td id="NameCell"><a onclick="panToMarker('+ "'" + loc["Place ID"] +"'"+')">' + loc['Name'] +'</a></td>' +
        '<td class = "centerCell">' + loc['State'] +'</td>' +
        '<td>' + danceStylesCell+'</td>' +
        '<td>' + danceSchedule +'</td>' +
        '<td class = "centerCell">' + hasLessonsCell +'</td>' +
        '<td class = "centerCell">' + loc['Age Restriction']; +'</td>' +
        table.appendChild(newRow);       
    }

    
    
    let markerLoc=0;
    let keepMarker;
    for(var mark of document.getElementsByClassName('pannable')){        
        if (filter == false){
            if (mark.position == null){
                mark.position = {lat: locationJSON.Dance_Locations[markerLoc]['Coordinate'].Latitude, lng: locationJSON.Dance_Locations[markerLoc]['Coordinate'].Longitude}
            }
            markerLoc++;
        }else{
            keepMarker=false;
            for(i = 0; i< locationJSON.Dance_Locations.length; i++){
                if (locationJSON.Dance_Locations.length != 0){
                     if (mark.title == locationJSON.Dance_Locations[i]['Place ID']){
                        keepMarker = true;
                        if (mark.position == null){
                            mark.position = { lat: locationJSON.Dance_Locations[0]['Coordinate'].Latitude, lng: locationJSON.Dance_Locations[0]['Coordinate'].Longitude}
                        }
                        locationJSON.Dance_Locations.splice(i,1);
                        break;
                    }
                }
            }
            if (keepMarker==false){
                if (mark.position != null){
                    mark.position = null;
                }
            }
        }  
    }
}

function panToMarker(placeID){
    const mapElement = document.getElementById('my-map');
    mapElement.zoom = 10;
    google.maps.event.trigger(document.getElementById(placeID + " marker"), 'click');    
}

GenerateTable(false);
