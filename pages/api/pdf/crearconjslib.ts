import {jsPDF} from 'jspdf'
import 'jspdf-autotable'
import { encodeToBase64 } from 'pdf-lib'

const crear=async(req:any,res:any)=>{
    const body=JSON.parse(req.body)
    const {datos}=body
    const {columnas}=body
    try{
        const doc=new jsPDF()
        const mediaData = require("fs").readFileSync('C:/Users/Maelstrom/Downloads/Ougi2.jpg')
        const mediaData2 = require("fs").readFileSync('C:/Users/Maelstrom/Downloads/Dados.png').toString('base64')
        
        
        //console.log(mediaData)
        doc.addImage(mediaData,'JPEG',175,10,50,50)
        doc.addImage(mediaData2,'PNG',175,10,20,20)
        doc.text("Tienda Elctronica",10,10)
        doc.text("Fecha: ",10,20)
        doc.text("Cotizacion: ",10,30)
        doc.addImage(mediaData2,'PNG',20,10,20,20)
        doc.text("Para",10,50)
        doc.text("Representante",150,50)
        console.log(datos)
        doc.autoTable({
            //styles:{fillColor:[155,100,0]},
            startY:60,
            theme:'plain',
            columnStyles:{descripcion:{cellWidth:150,minCellHeight:20}},
            body:datos,
            columns:[
                {header:'Descripcion',dataKey:'descripcion'},
                {header:'Precio',dataKey:'precio'},
                {header:'Cantidad',dataKey:'cantidad'},
                {header:'Subtotal',dataKey:'subtotal'},
            ],
            
            
          })

          doc.setFillColor(233,233,233)
          doc.rect(10,150,190,20,"F")
          doc.setFillColor(200,200,200,0.5)
          doc.rect(10,180,190,20,"F")
          doc.text("Super Prueba",10,160)
          doc.setTextColor(255,255,255)
          doc.text("Super Prueba",10,190)
          doc.addImage(mediaData2,'PNG',100,150,60,60)
        doc.save("Pruebajs.pdf")
        res.status(200).json({ status: 'Ok' })
    }catch(error){
        console.log('error')
        res.status(400).json('error')
    }
}

export default crear