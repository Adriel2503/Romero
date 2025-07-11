import { supabase } from './supabase';
import fs from 'fs';
import { parse } from 'csv-parse';

async function uploadDiabetesData() {
    const records: any[] = [];
    
    // Leer el archivo CSV
    const parser = fs
        .createReadStream('public/diabetes.csv')
        .pipe(parse({
            columns: true,
            skip_empty_lines: true
        }));

    // Procesar cada línea del CSV
    for await (const record of parser) {
        records.push({
            patient_id: record.patient_id,
            ts_utc: record.ts_utc,
            timestamp: parseInt(record.timestamp),
            glucose_mg_dl: parseFloat(record.glucose_mg_dl),
            glucose_rate_mgdl_min: parseFloat(record.glucose_rate_mgdl_min),
            heart_rate_bpm: parseInt(record.heart_rate_bpm),
            alarm: parseInt(record.alarm),
            alarm_level: record.alarm_level
        });
    }

    // Subir los datos a Supabase en lotes de 100
    const batchSize = 100;
    for (let i = 0; i < records.length; i += batchSize) {
        const batch = records.slice(i, i + batchSize);
        const { data, error } = await supabase
            .from('diabetes')
            .insert(batch);

        if (error) {
            console.error('Error uploading batch:', error);
        } else {
            console.log(`Uploaded batch ${i/batchSize + 1} successfully`);
        }
    }
}

// Ejecutar la función
uploadDiabetesData()
    .then(() => console.log('Upload completed'))
    .catch(error => console.error('Upload failed:', error)); 