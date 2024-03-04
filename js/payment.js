function payment(params) {
    const type = localStorage.getItem("type");
    var ida = document.getElementById("summary");  
    var divIda = document.createElement('div'); 
    divIda.setAttribute('id', 'divIda');
    const component = document.getElementById('divIda')
    if (component !== null) {
        component.remove('divIda');
    }
    const arrayIda = [
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
    ]

    const arrayRetorno = [
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
    ]
    
    divIda.innerHTML += `        
        <div class="card1" style="position: relative; padding: 0px;">     
            <div class="div75">                
                <span class="font-size: 20px;">IDA - Miércoles, 8 de febrero de 2023</span>
                <div id="ida" style="margin-bottom: 10px;"></div>                
                ${type != "one-way" ? (
                    `
                        <div>
                            <div style="border-bottom: 1px solid #707070; padding: 10px 0px;"></div>
                        </div>
                    `
                    ):`<div></div>`}
            </div>
            <div class="div25" style="position: relative">
                <div style="padding: 0px 20px; display: flex; align-items: center; flex-direction: column;">
                    <div>
                        <img src="img/airplane1.png" alt="img" style="width: 30px; height: 26px;"/>
                    </div>
                    <div style="color:#1C1B1BCC; padding-top: 10px;text-align: center;">
                        <span class="font-size: 15px; font-weight: 700; ">Número de vuelo</span>
                    </div>
                    <div style="color:#1C1B1BCC;padding-top: 10px;">
                        <span class="font-size: 15px; font-weight: 700;">VH5641</span>
                    </div>
                    <div style="margin-top: 10px;">
                    </div>
                </div>
                ${type != "one-way" ? (
                    `
                        <div style="position: absolute; bottom: 0px; width: 100%">
                            <div style="padding: 20px 20px 0px 20px; width: 85%">
                                <div style="border-bottom: 1px solid #707070; width: 100%"></div>
                            </div>
                        </div>
                    `
                    ):`<div></div>`}
            </div>
        </div>     
        ${type != "one-way" ? (
            `
                <div class="card1" style="position: relative; padding: 0px;">     
                    <div class="div75" style="margin-top: 20px;">                
                        <span class="font-size: 20px;">RETORNO - Miércoles, 8 de febrero de 2023</span>
                        <div id="retorno" style="margin-bottom: 10px;"></div>
                    </div>
                    <div class="div25">
                        <div style="padding: 0px 20px; display: flex; align-items: center; flex-direction: column;">
                            <div>
                                <img src="img/airplane1.png" alt="img" style="width: 30px; height: 26px;"/>
                            </div>
                            <div style="color:#1C1B1BCC; padding-top: 10px; text-align: center;">
                                <span class="font-size: 15px; font-weight: 700;">Número de vuelo</span>
                            </div>
                            <div style="color:#1C1B1BCC;padding-top: 10px;">
                                <span class="font-size: 15px; font-weight: 700;">VH463</span>
                            </div>
                            <div style="margin-top: 10px;">
                            </div>
                        </div>
                    </div>
                </div> 
            `
        ):`<div></div>`}
    `
    ida.appendChild(divIda);
    var retorno = document.getElementById("retorno");
    var divRetorno = document.createElement('div');
    arrayIda.map(arr => {
        var travelIda= document.getElementById("ida");  
        var divtravelIda = document.createElement('div'); 
        divtravelIda.innerHTML += `            
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
        travelIda.appendChild(divtravelIda);
    })

    
    arrayRetorno.map(arr => {
        divRetorno.innerHTML += `            
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
        retorno.appendChild(divRetorno);
    })
}

function handleRadio(event) {
    var card = document.getElementById("methodCard");
    var paypal = document.getElementById("methodPaypal");
    var zelle = document.getElementById("methodZelle");
    switch (event.value) {
        case "card":
            card.setAttribute('style', "display: block");
            paypal.setAttribute('style', "display: none");
            zelle.setAttribute('style', "display: none");            
            break;
        case "paypal":
            card.setAttribute('style', "display: none");
            paypal.setAttribute('style', "display: block");
            zelle.setAttribute('style', "display: none");            
            break;
        case "zelle":
            card.setAttribute('style', "display: none");
            paypal.setAttribute('style', "display: none");
            zelle.setAttribute('style', "display: block");            
            break;    
        default:
            break;
    }
}
