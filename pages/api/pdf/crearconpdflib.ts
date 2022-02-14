import {PDFDocument, StandardFonts,rgb} from 'pdf-lib'
const fs = require('fs');

const guardar= async (req:any,res:any)=>{
    const body=JSON.parse(req.body)
    const {datos}=body
    console.log(datos)
    try{
        console.log('creando documento')
        const pdfDoc= await PDFDocument.create()
        console.log('creando hoja')
        const timesRomanFont= await pdfDoc.embedFont(StandardFonts.TimesRoman)
        const page=pdfDoc.addPage()
        const {width, height}=page.getSize()

        const fontSize=16
        page.drawText('Creando un pdf con java',{
            x:100,
            y:height-4*fontSize,
            size:fontSize,
            font:timesRomanFont,
            color:rgb(0,0.53,0.52)
        })
        
        console.log('documento listo')
        const pdfBytes= await pdfDoc.save()
        console.log('documento guardado')
        fs.writeFileSync('./test.pdf', await pdfDoc.save())
        res.status(200).json({
            status:'Ok'
        })
    }catch(error){
        res.status(400).json('error')
    }
}

export default guardar