import { supabase } from './supabase';
import fs from 'fs';
import { parse } from 'csv-parse';
import path from 'path';

async function uploadRenalData() {
    const records: any[] = [];
    const csvFilePath = path.resolve(process.cwd(), 'modelo2.csv');
    
    console.log('Leyendo archivo CSV:', csvFilePath);
    
    // Leer el archivo CSV
    const parser = fs
        .createReadStream(csvFilePath)
        .pipe(parse({
            columns: true,
            skip_empty_lines: true
        }));

    // Procesar cada línea del CSV
    for await (const record of parser) {
        records.push({
            // No incluimos id porque es SERIAL (auto-increment)
            mac: record.mac,
            apellido_paterno: record.apellido_paterno,
            apellido_materno: record.apellido_materno,
            nombre_paciente: record.nombre_paciente,
            dni: record.dni,
            edad: parseInt(record.edad),
            altura: parseFloat(record.altura),
            peso: parseFloat(record.peso),
            creatinina: parseFloat(record.creatinina),
            urea: parseInt(record.urea),
            potasio: parseFloat(record.potasio),
            ph: parseFloat(record.ph),
            proteinuria: parseFloat(record.proteinuria),
            calcio: parseFloat(record.calcio),
            fecha_modificacion: new Date(record.fecha_modificacion),
            tipo: parseInt(record.tipo)
        });
    }

    console.log(`Total de registros a subir: ${records.length}`);

    // Subir los datos a Supabase en lotes de 50
    const batchSize = 50;
    let successCount = 0;
    let errorCount = 0;

    for (let i = 0; i < records.length; i += batchSize) {
        const batch = records.slice(i, i + batchSize);
        const { error } = await supabase
            .from('renal')
            .insert(batch);

        if (error) {
            console.error(`❌ Error en lote ${Math.floor(i/batchSize) + 1}:`, error.message);
            console.error('Registros fallidos:', batch.map(r => ({ id: r.id, nombre: r.nombre_paciente })));
            errorCount += batch.length;
        } else {
            console.log(`✅ Lote ${Math.floor(i/batchSize) + 1} subido exitosamente (${i + batch.length}/${records.length} registros)`);
            successCount += batch.length;
        }
    }

    console.log('\n📊 Resumen del proceso:');
    console.log(`✅ Registros subidos exitosamente: ${successCount}`);
    console.log(`❌ Registros con error: ${errorCount}`);
    console.log(`📈 Total procesado: ${records.length}`);
}

// Ejecutar la función
uploadRenalData()
    .then(() => console.log('🎉 Proceso de subida completado'))
    .catch(error => console.error('💥 Error en la subida:', error)); 