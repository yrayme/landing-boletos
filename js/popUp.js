function popUp(params) {
    const type = localStorage.getItem("type");
    var airlines = document.getElementById("airlines"); 
    var divAirlines = document.createElement('div');
    divAirlines.setAttribute('id', 'divAirlines');
    const component = document.getElementById('divAirlines')
    if (component !== null) {
        component.remove('divAirlines');
    }
        const arrayIda = [
            [
                {
                    id: 1,
                    name: "Caracas(ccs) - República Dominicana(SDQ)",
                    hour1: "09:30 am",
                    duration: "1h 30min",
                    hour2: "11:00 am",
                    logo: "img/laser.png",
                    infoAir: "Operado por Laser Airlines QL 9962"
                },
                {
                    id: 2,
                    name: "República Dominicana(SDQ) - Miami(MIA)",
                    hour1: "01:30 pm",
                    duration: "1h 30min",
                    hour2: "03:00 pm",
                    logo: "img/redAir.png",
                    infoAir: "Operado por Red Air L5 201"
                }
            ],
            [
                {
                    id: 1,
                    name: "Caracas(ccs) - República Dominicana(SDQ)",
                    hour1: "12:45 am",
                    duration: "1h 30min",
                    hour2: "02:15 am",
                    logo: "img/laser.png",
                    infoAir: "Operado por Laser Airlines QL 9964"
                },
                {
                    id: 2,
                    name: "República Dominicana(SDQ) - Miami(MIA)",
                    hour1: "04:00 pm",
                    duration: "1h 30min",
                    hour2: "05:30 pm",
                    logo: "img/redAir.png",
                    infoAir: "Operado por Red Air L5 203"
                }
            ]
        ]
    
        const arrayRetorno = [
            [
                {
                    id: 1,
                    name: "Miami(MIA) - República Dominicana(SDQ)",
                    hour1: "08:00 am",
                    duration: "3h 30min",
                    hour2: "11:30 am",
                    logo: "img/redAir.png",
                    infoAir: "Operado por Red Air L5 200"
                },
                {
                    id: 2,
                    name: "República Dominicana(SDQ) - Caracas(ccs)",
                    hour1: "01:40 pm",
                    duration: "1h 30min",
                    hour2: "03:10 pm",
                    logo: "img/laser.png",
                    infoAir: "Operado por Laser Airlines QL 9963"
                }
            ], 
            [
                {
                    id: 1,
                    name: "Miami(MIA) - República Dominicana(SDQ)",
                    hour1: "10:30 am",
                    duration: "3h 30min",
                    hour2: "02:00 am",
                    logo: "img/redAir.png",
                    infoAir: "Operado por Red Air L5 202"
                },
                {
                    id: 2,
                    name: "República Dominicana(SDQ) - Caracas(ccs)",
                    hour1: "04:15 pm",
                    duration: "1h 30min",
                    hour2: "05:45 pm",
                    logo: "img/laser.png",
                    infoAir: "Operado por Laser Airlines QL 9965"
                }
            ]
    
        ]
    
    
        for (var j = 0; j < 2; j++) {
            divAirlines.innerHTML += `
                <div class="card">
                    <div class="divTitle">
                        <div class="title">
                            <span class="font-size: 18px;">Miami(MIA) - Caracas(CCS) - Miami(MIA)</span>
                        </div>
                        <div class="title1"> 
                            <span class="font-size: 16px; ">Horario:</span>
                            <div style="display: flex; flex-direction: column;">                                
                                <span class="font-size: 14px; ">Ida: 09:30am - 03:00pm</span>                            
                                <span class="font-size: 14px; ">Retorno: 09:30am - 03:00pm</span>
                            </div>
                        </div>
                    </div>
                    <div class="card1">     
                        <div class="div75">                
                            <span class="font-size: 20px;">IDA</span>
                            <div id="ida${j}" style="margin-bottom: 10px;"></div>
                            ${type != "one-way" ? (
                                    `
                                <div style="border-top: 1px solid #707070; padding: 10px 0px;"></div>
                                <span class="font-size: 20px;">RETORNO</span>
                                <div id="retorno${j}" style="margin-bottom: 10px;"></div>
                                `
                            ):`<div></div>`}
                        </div>
                        <div class="div25">
                            <div style="padding: 0px 20px;">
                                <span style="font-size: 30px; color: #FA8C09;">$499</span>
                                <div style="color:#1C1B1B99;">
                                    <span class="font-size: 14px; font-weight: 700;">Roundtrip por viajero</span>
                                </div>
                                <div style="margin-top: 10px;">
                                    <button><a href="#form-family" style="text-decoration: none; color: white">Seleccionar</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>         
            `   
            airlines.appendChild(divAirlines);
            // IDA
            var ida = document.getElementById(`ida${j}`);  
            var divIda = document.createElement('div'); 
            arrayIda[j].map(arr => {
                divIda.innerHTML += `            
                <div style="margin-top: 15px;">
                    <span class="font-size: 15px; font-weight: 700;">${arr.name}</span>
                </div>
                <div class="divHour">
                    <div style="font-weight: 600;">
                        <span class="font-size: 20px;">${arr.hour1}</span>
                    </div>
                    <div style="color: #707070; display: flex; align-items: center; margin-top: -7px;"> 
                        <span>&nbsp;............&nbsp;</span>
                    </div>
                    <div class="airplane">
                        <div>
                            <span style="font-size: 14px;">${arr.duration}</span>
                        </div>
                        <div>
                            <img src="img/airplane.png" alt="img" style="width: 14px; height: 12px;"/>
                        </div>
                        <div>
                            <span style="font-size: 14px;">directo</span>
                        </div>
                    </div>
                    <div style="color: #707070; display: flex; align-items: center; margin-top: -7px;"> 
                        <span>&nbsp;............&nbsp;</span>
                    </div>
                    <div style="font-weight: 600;">
                        <span class="font-size: 20px;">${arr.hour2}</span>
                    </div>
                </div>
                <div style="margin-top: 10px; display: flex;">
                    <div style="margin-right: 10px;">
                        <img src=${arr.logo} alt="img" style="width: 30px; height: 20px;"/>
                    </div>
                    <span class="font-size: 14px; font-weight: 700;">${arr.infoAir}</span>
                </div>
                ` 
            }) 
            ida.appendChild(divIda);
            
            // RETORNO
            var divRetorno = document.createElement('div');
            var retorno = document.getElementById(`retorno${j}`);
            if (retorno){
                arrayRetorno[j].map(arr => {
                    divRetorno.innerHTML +=  `            
                    <div style="margin-top: 15px;">
                        <span class="font-size: 15px; font-weight: 700;">${arr.name}</span>
                    </div>
                    <div class="divHour">
                        <div style="font-weight: 600;">
                            <span class="font-size: 20px;">${arr.hour1}</span>
                        </div>
                        <div style="color: #707070; display: flex; align-items: center; margin-top: -7px;"> 
                            <span>&nbsp;............&nbsp;</span>
                        </div>
                        <div class="airplane">
                            <div>
                                <span style="font-size: 14px;">${arr.duration}</span>
                            </div>
                            <div>
                                <img src="img/airplane.png" alt="img" style="width: 14px; height: 12px;"/>
                            </div>
                            <div>
                                <span style="font-size: 14px;">directo</span>
                            </div>
                        </div>
                        <div style="color: #707070; display: flex; align-items: center; margin-top: -7px;"> 
                            <span>&nbsp;............&nbsp;</span>
                        </div>
                        <div style="font-weight: 600;">
                            <span class="font-size: 20px;">${arr.hour2}</span>
                        </div>
                    </div>
                    <div style="margin-top: 10px; display: flex;">
                        <div style="margin-right: 10px;">
                            <img src=${arr.logo} alt="img" style="width: 30px; height: 20px;"/>
                        </div>
                        <span class="font-size: 14px; font-weight: 700;">${arr.infoAir}</span>
                    </div>
                    ` 
                })
                retorno.appendChild(divRetorno);
            }
        }
    }



function handleRoundTrip(event) {
    console.log("event", event)
    localStorage.setItem("type", event);
    if (event.value == "card"){
    }else{}
}

// document.getElementById('submit').onclick = function() {
// }
// console.log("id", document.getElementsByName("type_of_flight").value)