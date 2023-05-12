let montoPresupuesto=0;
let montoGasto=0;
let montoSaldo=0;
let valida
let i=0;
let gastos =[];

// Modificacion de resumen->presupuesto + saldo
$("#botonPresupuesto").click(function(){
    valida=parseInt($("#presupuesto").val());

    if(!isNaN(valida)){
        montoPresupuesto += parseInt($("#presupuesto").val());
        var htmlPresupuesto="";
        htmlPresupuesto += montoPresupuesto;
        $("#spanPresupuesto").html(htmlPresupuesto);
        montoSaldo= montoPresupuesto - montoGasto;
        $("#spanSaldo").html(montoSaldo); 
    }
    else{}
})

function creaGasto (id, concepto, monto){
    let gasto = {
        id: id,
        concepto: concepto,
        monto: monto,
    }
    gastos.push(gasto);
}

/* class Gasto{
    constructor(id,concepto, monto){
        this.id=id;
        this.concepto = concepto;
        this.monto  = monto;
    }
} */

// Modificacion de resumen -> gasto + saldo + tabla
let htmlTabla ="";
$("#botonGasto").click(function(){
    valida=parseInt($("#gasto").val());

    if(!isNaN(valida)){
        creaGasto(i, $("#nombreGasto").val(), $("#gasto").val())
        montoGasto+= parseInt($("#gasto").val());
        //console.log("montoGasto: "+montoGasto);
        var htmlGasto ="";
        htmlGasto += montoGasto;
        $("#spanGasto").html(htmlGasto);
        montoSaldo= montoPresupuesto - montoGasto;
        $("#spanSaldo").html(montoSaldo); 
        //console.log(gastos);
        //console.log(gastos[i].concepto);

        //modificacion de la tabla
        htmlTabla="";
        gastos.forEach(gastos => {
            htmlTabla+=`
            <tr id="${gastos.id}">
            <th scope="row" class="text-center">${gastos.concepto}</th>
            <td class="text-center">$<span>${gastos.monto}</span></td>
            <td class="borrarGasto text-center">&#128465</td>
            </tr>
        `
        });
        
        $("#tablaGastos").html(htmlTabla);

        //agregar +1 al contador
        i=i+1;
    }
    else{}

    // Eliminacion de gasto
    $(".borrarGasto").click(function(){
        console.log("borrar");
        let idEliminar = this.parentElement.id;
        //console.log(idEliminar);
        let montoRecuperar=0;
        montoRecuperar=parseInt(gastos[idEliminar].monto)
        //console.log(typeof(montoRecuperar), montoRecuperar);
        montoGasto=montoGasto-montoRecuperar;
        htmlGasto = montoGasto;
        $("#spanGasto").html(htmlGasto);
        montoSaldo= montoPresupuesto - montoGasto;
        $("#spanSaldo").html(montoSaldo);
        //document.getElementById(idEliminar).style.display="none";
        document.getElementById(idEliminar).innerHTML = "";
        //$("#"+idEliminar).remove();
        delete gastos[idEliminar];
        //gastos.splice(idEliminar, 1);
        //console.log(gastos);

        gastos.forEach(element => {
            console.log(element);
        });
    })
})